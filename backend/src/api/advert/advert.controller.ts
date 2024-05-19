import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AdvertSevice } from './advert.service';
import { AdvertExpertEntity } from './entities/advert-expert.entity';
import { CreateExpertAdvertDto } from './dtos/create-expert-advert.dto';
import {
  IDataSendResponse,
  ISendResponse,
} from 'src/shared/interfaces/response.interface';
import { functions } from 'src/shared/utils/functions';
import { AuthenticatedGuard } from 'src/shared/guards/authenticated.guard';
import { Request } from 'express';
import { UserEntity } from 'src/shared/entities/user.entity';
import { UploadedFile } from 'express-fileupload';
import { ExpertGuard } from 'src/shared/guards/expert.guard';
import { TagEntity } from 'src/shared/entities/tag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Controller('/advert')
@UseGuards(ExpertGuard)
@UseGuards(AuthenticatedGuard)
export class AdvertController {
  constructor(
    @InjectRepository(AdvertExpertEntity)
    private readonly _advertExpertRepo: Repository<AdvertExpertEntity>,
    private readonly _advertService: AdvertSevice,
  ) {}

  /**
   * Ova ruta se koristi kako bi vratila sve tagove odnosno kategorije.
   * Strucnjak samo poziva ovu rutu.
   * Vraca true ako su tagovi vraceni, u suprotnom false.
   */
  @Get('/tag/all')
  @HttpCode(HttpStatus.OK)
  public async getAllTags(): Promise<IDataSendResponse<TagEntity[]>> {
    return {
      success: true,
      data: await this._advertService.getAllTags(),
      message: 'Uspesno.',
    };
  }

  /**
   * Ova ruta se koristi kako bi strucnjak dodao oglas.
   * Strucnjak unosi podatke o oglasu.
   * Vraca true ako je oglas dodat, u suprotnom false.
   */
  @Post('/expert/create')
  @HttpCode(HttpStatus.CREATED)
  public async createExpertAdvert(
    @Body() body: CreateExpertAdvertDto,
    @Req() req: Request,
  ): Promise<ISendResponse> {
    const user: UserEntity = req.user as UserEntity;

    const image_one = req.files?.image_one as UploadedFile;
    const image_two = req.files?.image_two as UploadedFile;
    const video = req.files?.video as UploadedFile;

    const expertAdvert: AdvertExpertEntity =
      await this._advertService.createExpertAdvert(
        user,
        body,
        image_one,
        image_two,
        video,
      );

    if (!expertAdvert) {
      functions.throwHttpException(
        false,
        'Doslo je do greske prilikom dodavanja oglasa.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return {
      success: true,
      message: 'Uspesno ste dodali oglas.',
    };
  }

  /**
   * Ova ruta se koristi kako bi strucnjak izbrisao oglas.
   * Strucnjak unosi id oglasa.
   * Vraca true ako je oglas izbrisan, u suprotnom false.
   */
  @Post('/expert/delete/:id')
  @HttpCode(HttpStatus.OK)
  public async deleteExpertAdvert(
    @Param('id') adId: string,
    @Req() req: Request,
  ): Promise<ISendResponse> {
    const user: UserEntity = req.user as UserEntity;

    await this._advertService.deleteExpertAdvert(adId, user.id);

    return {
      success: true,
      message: 'Uspesno ste izbrisali oglas.',
    };
  }

  /**
   * Ova ruta se koristi kako bi strucnjak pogledao sve njegove oglase.
   * Strucnjak poziva ovu rutu.
   * Uzimaju se svi oglasi iz baze kome pripadaju logovanom strucnjaku i vracaju se.
   */
  @Get('/expert/get/own')
  @HttpCode(HttpStatus.OK)
  public async getAllExpertAdverts(
    @Req() req: Request,
  ): Promise<IDataSendResponse<AdvertExpertEntity[]>> {
    const loggedUser: UserEntity = req.user as UserEntity;

    const expertAds = await this._advertExpertRepo.find({
      where: {
        expertId: loggedUser.id,
      },
    });

    return {
      success: true,
      data: expertAds,
      message: 'Uspesno.',
    };
  }
}
