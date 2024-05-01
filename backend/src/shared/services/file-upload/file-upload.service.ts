import { HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UploadedFile } from 'express-fileupload';
import { functions } from 'src/shared/utils/functions';
import { UserEntity } from 'src/api/user/entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class FileUploadService {
  private readonly fullPath = path.join(__dirname, '../../../../uploads');

  constructor(
    @InjectRepository(UserEntity)
    private readonly _userRepo: Repository<UserEntity>,
    private readonly _configService: ConfigService,
  ) {}

  private checkSize(file: UploadedFile): void {
    if (
      file.size > this._configService.get<number>('PICTURE_MAX_UPLOAD_SIZE')
    ) {
      functions.throwHttpException(
        false,
        `Velicina Vaseg fajla je ${functions.formatBytes(file.size)}, maksimalna velicina je ${functions.formatBytes(this._configService.get<number>('PICTURE_MAX_UPLOAD_SIZE'))}.`,
        HttpStatus.PAYLOAD_TOO_LARGE,
      );
    }
  }

  private checkExtension(file: UploadedFile): void {
    const extensions: Array<string> = this._configService
      .get<string>('PICTURE_EXTENSIONS')
      .split(', ');

    if (!extensions.includes(path.extname(file.name))) {
      functions.throwHttpException(
        false,
        `Ekstenzija ovog fajla nije podrzana.`,
        HttpStatus.UNSUPPORTED_MEDIA_TYPE,
      );
    }
  }

  private async checkFileInDb(filename: string): Promise<void> {
    try {
      if (
        await this._userRepo.findOne({
          where: [{ avatar: filename }],
        })
      ) {
        functions.throwHttpException(
          false,
          `Slika sa istim imenom vec postoji na serveru.`,
          HttpStatus.CONFLICT,
        );
      }
    } catch (err) {
      functions.handleHttpException(
        err,
        false,
        'Doslo je do greske prilikom provere duplikata fajla na serveru.',
      );
    }
  }

  private checkFileInFolder(filename: string): void {
    try {
      if (fs.existsSync(`${this.fullPath}/${filename}`)) {
        functions.throwHttpException(
          false,
          `Slika sa istim imenom vec postoji na serveru.`,
          HttpStatus.CONFLICT,
        );
      }
    } catch (err) {
      functions.handleHttpException(
        err,
        false,
        'Doslo je do greske prilikom provere duplikata fajla na serveru.',
      );
    }
  }

  public async uploadFile(
    file: UploadedFile | UploadedFile[],
  ): Promise<string | null> {
    try {
      if (Array.isArray(file)) {
        functions.throwHttpException(
          false,
          'Mozete otpremiti samo jednu sliku odjednom.',
          HttpStatus.BAD_REQUEST,
        );
      } else {
        this.checkExtension(file);
        this.checkSize(file);

        const filename =
          functions.generateRandomString() + path.extname(file.name);

        this.checkFileInFolder(filename);
        await this.checkFileInDb(filename);

        file.mv(`${this.fullPath}/${filename}`, (err: unknown) => {
          if (err) {
            functions.throwHttpException(
              false,
              'Dogodila se greska prilikom otpremanja fajla.',
              HttpStatus.INTERNAL_SERVER_ERROR,
            );
          }
        });

        return filename;
      }
    } catch (err) {
      functions.handleHttpException(
        err,
        false,
        'Doslo je do greske prilikom otpremanja fajla.',
      );
    }
  }

  public deleteFile(filename: string): void {
    try {
      fs.unlinkSync(`${this.fullPath}/${filename}`);
    } catch (err: unknown) {}
  }
}
