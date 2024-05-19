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
import {
  IDataSendResponse,
  ISendResponse,
} from 'src/shared/interfaces/response.interface';
import { UserService } from './user.service';
import { UserEntity } from '../../shared/entities/user.entity';
import { Request } from 'express';
import { CheckSessionGuard } from 'src/shared/guards/check-session.guard';
import { UpdateUsernameDto } from './dtos/update-username.dto';
import { AuthenticatedGuard } from 'src/shared/guards/authenticated.guard';
import { functions } from 'src/shared/utils/functions';
import { UpdateFirstNameDto } from './dtos/update-first-name.dto';
import { UpdateLastNameDto } from './dtos/update-last-name.dto';
import { UpdatePasswordDto } from './dtos/update-password.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateProfessionDto } from './dtos/update-profession.dto';

@Controller('/users')
export class UserController {
  constructor(
    @InjectRepository(UserEntity)
    private readonly _userRepo: Repository<UserEntity>,
    private readonly _userService: UserService,
  ) {}

  /**
   * Ova ruta se koristi kako bi iz frontenda proverilo da li postoji username u bazi.
   * Potrebno je da korisnik unese username.
   * Ukoliko je username zauzet, vratice vrednost true, u suprotnom, false.
   */
  @Post('/availability/username/:username')
  @HttpCode(HttpStatus.OK)
  public async usernameAvailability(
    @Param('username') username: string,
  ): Promise<IDataSendResponse<boolean>> {
    return {
      success: true,
      data: await this._userService.usernameAvailability(username),
      message: 'Uspesno.',
    };
  }

  /**
   * Ova ruta se koristi kako bi se iz frontenda proverilo da li postoji email u bazi.
   * Potrebno je da korisnik unese email.
   * Ukoliko je email zauzet, vratice vrednost true, u suprotnom, false.
   */
  @Post('/availability/email/:email')
  @HttpCode(HttpStatus.OK)
  public async emailAvailability(
    @Param('email') email: string,
  ): Promise<IDataSendResponse<boolean>> {
    return {
      success: true,
      data: await this._userService.emailAvailability(email),
      message: 'Uspesno.',
    };
  }

  /**
   * Ova ruta se koristi kako bi korisnik izmenio korisnicko ime.
   * Potrebno je da korisnik prosledi novo korisnicko ime.
   * Ukoliko je korisnicko ime slobodno, i promeni se, vratice true, u suprotnom false.
   */
  @UseGuards(AuthenticatedGuard)
  @Post('/update/username')
  @HttpCode(HttpStatus.OK)
  public async updateUsername(
    @Body() body: UpdateUsernameDto,
    @Req() req: Request,
  ): Promise<ISendResponse> {
    const loggedUser: UserEntity = req.user as UserEntity;

    const isUserChanged: UserEntity = await this._userService.updateUsername(
      loggedUser.id,
      body,
    );

    if (!isUserChanged) {
      functions.throwHttpException(
        false,
        'Doslo je do greske prilikom izmene korisnickog imena.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return {
      success: true,
      message: 'Uspesno ste izmenili korisnicko ime.',
    };
  }

  /**
   * Ova ruta se koristi kako bi korisnik izmenio ime.
   * Potrebno je da korisnik prosledi novo ime.
   * Ukoliko se ime promeni, vratice true, u suprotnom false.
   */
  @UseGuards(AuthenticatedGuard)
  @Post('/update/firstname')
  @HttpCode(HttpStatus.OK)
  public async updateFirstName(
    @Body() body: UpdateFirstNameDto,
    @Req() req: Request,
  ): Promise<ISendResponse> {
    const loggedUser: UserEntity = req.user as UserEntity;

    const isUserChanged: UserEntity = await this._userService.updateFirstName(
      loggedUser.id,
      body,
    );

    if (!isUserChanged) {
      functions.throwHttpException(
        false,
        'Doslo je do greske prilikom izmene imena.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return {
      success: true,
      message: 'Uspesno ste izmenili ime.',
    };
  }

  /**
   * Ova ruta se koristi kako bi korisnik izmenio prezime.
   * Potrebno je da korisnik prosledi novo prezime.
   * Ukoliko se prezime promeni, vratice true, u suprotnom false.
   */
  @UseGuards(AuthenticatedGuard)
  @Post('/update/lastname')
  @HttpCode(HttpStatus.OK)
  public async updateLastName(
    @Body() body: UpdateLastNameDto,
    @Req() req: Request,
  ): Promise<ISendResponse> {
    const loggedUser: UserEntity = req.user as UserEntity;

    const isUserChanged: UserEntity = await this._userService.updateLastName(
      loggedUser.id,
      body,
    );

    if (!isUserChanged) {
      functions.throwHttpException(
        false,
        'Doslo je do greske prilikom izmene prezimena.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return {
      success: true,
      message: 'Uspesno ste izmenili prezime.',
    };
  }

  /**
   * Ova ruta se koristi kako bi korisnik izmenio lozinku.
   * Potrebno je da korisnik prosledi novu lozinku.
   * Ukoliko se lozinka promeni, vratice true, u suprotnom false.
   */
  @UseGuards(AuthenticatedGuard)
  @Post('/update/password')
  @HttpCode(HttpStatus.OK)
  public async updatePassword(
    @Body() body: UpdatePasswordDto,
    @Req() req: Request,
  ): Promise<ISendResponse> {
    const loggedUser: UserEntity = req.user as UserEntity;

    const isUserChanged: UserEntity = await this._userService.updatePassword(
      loggedUser.id,
      body,
    );

    if (!isUserChanged) {
      functions.throwHttpException(
        false,
        'Doslo je do greske prilikom izmene lozinke.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return {
      success: true,
      message: 'Uspesno ste izmenili lozinku.',
    };
  }

  /**
   * Ova ruta se koristi kako bi korisnik izmenio profesiju.
   * Potrebno je da korisnik prosledi profesiju i biografiju.
   * Ukoliko se profesija promeni, vratice true, u suprotnom false.
   */
  @UseGuards(AuthenticatedGuard)
  @Post('/update/profession')
  @HttpCode(HttpStatus.OK)
  public async updateProfession(
    @Body() body: UpdateProfessionDto,
    @Req() req: Request,
  ): Promise<ISendResponse> {
    const loggedUser: UserEntity = req.user as UserEntity;

    const isUserChanged: UserEntity = await this._userService.updateProfession(
      loggedUser.id,
      body,
    );

    if (!isUserChanged) {
      functions.throwHttpException(
        false,
        'Doslo je do greske prilikom izmene podataka.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return {
      success: true,
      message: 'Uspesno ste izmenili podatke.',
    };
  }

  /**
   * Ova ruta se koristi kako bi korisnik zatrazio informacije o svom profilu.
   * Potrebno je da korisnik pozove ovu rutu.
   * Ruta vraca informacije o profilu.
   */
  @UseGuards(AuthenticatedGuard)
  @Get('/profile/info')
  @HttpCode(HttpStatus.OK)
  public async getProfileInfo(
    @Req() req: Request,
  ): Promise<IDataSendResponse<UserEntity>> {
    const loggedUser: UserEntity = req.user as UserEntity;

    const user = await this._userRepo.findOne({
      where: {
        id: loggedUser.id,
      },
      select: [
        'firstName',
        'lastName',
        'username',
        'email',
        'role',
        'avatar',
        'isExpert',
        'profession',
        'bio',
        'registrationDate',
      ],
    });

    if (!user) {
      functions.throwHttpException(
        false,
        'Korisnik ne postoji.',
        HttpStatus.NOT_FOUND,
      );
    }

    return {
      success: true,
      data: user,
      message: 'Uspesno.',
    };
  }

  /**
   * Ova ruta se koristi kako bi se iz frontenda proverilo da li korisnik logovan.
   * Potrebno je da korisnik pozove ovu rutu.
   * Ukoliko je logovan, vratice true i informacije, ukoliko nije, false.
   */
  @UseGuards(CheckSessionGuard)
  @Post('/check/session')
  @HttpCode(HttpStatus.OK)
  public async checkUserSession(
    @Req() req: Request,
  ): Promise<IDataSendResponse<Partial<UserEntity>>> {
    const loggedUser: Partial<UserEntity> = req.user;

    if (loggedUser) {
      return {
        success: true,
        data: {
          id: loggedUser.id,
        },
        message: 'Uspesno.',
      };
    } else {
      return {
        success: false,
        data: {},
        message: 'Uspesno.',
      };
    }
  }
}
