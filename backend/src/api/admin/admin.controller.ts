import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AdminSevice } from './admin.service';
import { AuthenticatedGuard } from 'src/shared/guards/authenticated.guard';
import { RoleGuard } from 'src/shared/guards/role.guard';
import { UserRole } from 'src/shared/enums/role.enum';
import { CreateTagDto } from './dtos/create-tag.dto';
import { ISendResponse } from 'src/shared/interfaces/response.interface';
import { TagEntity } from 'src/shared/entities/tag.entity';
import { functions } from 'src/shared/utils/functions';
import { DeleteTagDto } from './dtos/delete-tag.dto';

@Controller('/admin')
@UseGuards(AuthenticatedGuard)
export class AdminController {
  constructor(private readonly _adminService: AdminSevice) {}

  /**
   * Ova ruta se koristi kako bi admin dodao tag.
   * Admin unosi ime taga.
   * Vraca true ako je tag dodat, u suprotnom false.
   */
  @UseGuards(new RoleGuard([UserRole.OWNER, UserRole.ADMIN]))
  @Post('/tag/create')
  @HttpCode(HttpStatus.CREATED)
  public async createTag(@Body() body: CreateTagDto): Promise<ISendResponse> {
    const tag: TagEntity = await this._adminService.createTag(body);

    if (!tag) {
      functions.throwHttpException(
        false,
        'Doslo je do greske prilikom dodavanja taga.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return {
      success: true,
      message: 'Uspesno ste dodali tag.',
    };
  }

  /**
   * Ova ruta se koristi kako bi admin izbrisao tag.
   * Admin unosi id taga.
   * Vraca true ako je tag izbrisan, u suprotnom false.
   */
  @UseGuards(new RoleGuard([UserRole.OWNER, UserRole.ADMIN]))
  @Post('/tag/delete/:id')
  @HttpCode(HttpStatus.OK)
  public async deleteTag(@Param() param: DeleteTagDto): Promise<ISendResponse> {
    await this._adminService.deleteTag(param);

    return {
      success: true,
      message: 'Uspesno ste izbrisali tag.',
    };
  }
}
