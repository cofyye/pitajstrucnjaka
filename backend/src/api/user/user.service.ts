import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { functions } from 'src/shared/utils/functions';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly _userRepo: Repository<UserEntity>,
  ) {}

  public async usernameAvailability(username: string): Promise<boolean> {
    try {
      const user = await this._userRepo.findOne({
        where: {
          username,
        },
      });

      return user ? true : false;
    } catch (err) {
      functions.handleHttpException(
        err,
        false,
        'Doslo je do greske prilikom provere korisnickog imena.',
      );
    }
  }

  public async emailAvailability(email: string): Promise<boolean> {
    try {
      const user = await this._userRepo.findOne({
        where: {
          email,
        },
      });

      return user ? true : false;
    } catch (err) {
      functions.handleHttpException(
        err,
        false,
        'Doslo je do greske prilikom provere e-mail adrese.',
      );
    }
  }
}
