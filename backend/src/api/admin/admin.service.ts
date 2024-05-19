import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateTagDto } from './dtos/create-tag.dto';
import { TagEntity } from 'src/shared/entities/tag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { functions } from 'src/shared/utils/functions';
import { DeleteTagDto } from './dtos/delete-tag.dto';

@Injectable()
export class AdminSevice {
  constructor(
    @InjectRepository(TagEntity)
    private readonly _tagRepo: Repository<TagEntity>,
  ) {}

  public async createTag(body: CreateTagDto): Promise<TagEntity> {
    try {
      let tag = await this._tagRepo.findOne({
        where: {
          name: body.name,
        },
      });

      if (tag) {
        functions.throwHttpException(
          false,
          'Tag sa ovim imenom vec postoji.',
          HttpStatus.CONFLICT,
        );
      }

      tag = this._tagRepo.create(body);

      return await this._tagRepo.save(tag);
    } catch (err) {
      functions.handleHttpException(
        err,
        false,
        'Doslo je do greske prilikom dodavanja taga.',
      );
    }
  }

  public async deleteTag(param: DeleteTagDto): Promise<void> {
    try {
      if (!(await this._tagRepo.delete({ id: param.id })).affected) {
        functions.throwHttpException(
          false,
          'Ovaj tag nije pronadjen.',
          HttpStatus.NOT_FOUND,
        );
      }
    } catch (err) {
      functions.handleHttpException(
        err,
        false,
        'Doslo je do greske prilikom brisanja taga.',
      );
    }
  }
}
