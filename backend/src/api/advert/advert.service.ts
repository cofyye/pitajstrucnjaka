import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdvertExpertEntity } from './entities/advert-expert.entity';
import { Repository } from 'typeorm';
import { functions } from 'src/shared/utils/functions';
import { CreateExpertAdvertDto } from './dtos/create-expert-advert.dto';
import { UserEntity } from 'src/shared/entities/user.entity';
import { UploadedFile } from 'express-fileupload';
import { FileUploadService } from 'src/shared/services/file-upload/file-upload.service';
import { TagEntity } from 'src/shared/entities/tag.entity';

@Injectable()
export class AdvertSevice {
  constructor(
    @InjectRepository(AdvertExpertEntity)
    private readonly _advertExpertRepo: Repository<AdvertExpertEntity>,
    @InjectRepository(TagEntity)
    private readonly _tagRepo: Repository<TagEntity>,
    private readonly _fileUploadService: FileUploadService,
  ) {}

  public async createExpertAdvert(
    user: UserEntity,
    body: CreateExpertAdvertDto,
    image_one: UploadedFile,
    image_two: UploadedFile,
    video: UploadedFile,
  ): Promise<AdvertExpertEntity> {
    let filename_image_one: string = '';
    let filename_image_two: string = '';
    let filename_video: string = '';

    try {
      const expertAdvert = new AdvertExpertEntity();
      expertAdvert.title = body.title;
      expertAdvert.description = body.description;
      expertAdvert.expert = user;

      const tags: TagEntity[] = [];

      for (const item of body.tags) {
        const tag = await this._tagRepo.findOne({
          where: {
            id: item,
          },
        });

        if (!tag) {
          functions.throwHttpException(
            false,
            'Jedan od tagova koje ste izabrali nije pronadjen u bazi.',
            HttpStatus.NOT_FOUND,
          );
        }

        if (tags.findIndex((p) => p.id == tag.id) != -1) {
          functions.throwHttpException(
            false,
            'Ne mozete da stavite dva ista taga. Tagovi moraju da budu razliciti.',
            HttpStatus.BAD_REQUEST,
          );
        }

        tags.push(tag);
      }

      expertAdvert.tags = tags;

      if (image_one) {
        filename_image_one = await this._fileUploadService.uploadImage(
          'expert_ad',
          image_one,
        );

        if (!filename_image_one) {
          functions.throwHttpException(
            false,
            'Doslo je do greske prilikom otpremanja prve slike.',
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
        }

        expertAdvert.image_one = filename_image_one;
      }

      if (image_two) {
        filename_image_two = await this._fileUploadService.uploadImage(
          'expert_ad',
          image_two,
        );

        if (!filename_image_two) {
          functions.throwHttpException(
            false,
            'Doslo je do greske prilikom otpremanja druge slike.',
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
        }

        expertAdvert.image_two = filename_image_two;
      }

      if (video) {
        filename_video = await this._fileUploadService.uploadVideo(
          'expert_ad',
          video,
        );

        if (!filename_video) {
          functions.throwHttpException(
            false,
            'Doslo je do greske prilikom otpremanja video zapisa.',
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
        }

        expertAdvert.video = filename_video;
      }

      return await this._advertExpertRepo.save(expertAdvert);
    } catch (err) {
      this._fileUploadService.deleteFile(filename_image_one);
      this._fileUploadService.deleteFile(filename_image_two);
      this._fileUploadService.deleteFile(filename_video);

      functions.handleHttpException(
        err,
        false,
        'Doslo je do greske prilikom dodavanja oglasa.',
      );
    }
  }

  public async deleteExpertAdvert(adId: string, userId: string): Promise<void> {
    try {
      const advert = await this._advertExpertRepo.findOne({
        where: {
          id: adId,
        },
      });

      if (!advert) {
        functions.throwHttpException(
          false,
          'Ovaj oglas ne postoji.',
          HttpStatus.NOT_FOUND,
        );
      }

      if (advert.expertId != userId) {
        functions.throwHttpException(
          false,
          'Vi niste vlasnik ovog oglasa.',
          HttpStatus.FORBIDDEN,
        );
      }

      this._fileUploadService.deleteFile(advert.image_one);
      this._fileUploadService.deleteFile(advert.image_two);
      this._fileUploadService.deleteFile(advert.video);

      if (!(await this._advertExpertRepo.delete({ id: advert.id })).affected) {
        functions.throwHttpException(
          false,
          'Doslo je do greske prilikom brisanja oglasa.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    } catch (err) {
      functions.handleHttpException(
        err,
        false,
        'Doslo je do greske prilikom brisanja oglasa.',
      );
    }
  }

  public async getAllTags(): Promise<TagEntity[]> {
    try {
      return await this._tagRepo.find({
        select: ['id', 'name'],
      });
    } catch (err) {
      functions.handleHttpException(
        err,
        false,
        'Doslo je do greske prilikom vracanja svih tagova.',
      );
    }
  }
}
