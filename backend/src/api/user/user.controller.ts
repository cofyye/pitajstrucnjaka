import {
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { IDataSendResponse } from 'src/shared/interfaces/response.interface';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { Request } from 'express';
import { CheckSessionGuard } from 'src/shared/guards/check-session.guard';

@Controller('/users')
export class UserController {
  constructor(private readonly _userService: UserService) {}

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
    const user: Partial<UserEntity> = req.user;

    if (user) {
      return {
        success: true,
        data: {
          id: user.id,
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
