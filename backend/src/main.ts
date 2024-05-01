import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ClassValidatorFilter } from './shared/filters/class-validator.filter';
import { TrimPipe } from './shared/pipes/trim.pipe';
import * as cookieParser from 'cookie-parser';
import * as fileUpload from 'express-fileupload';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());
  app.use(fileUpload());

  app.enableCors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  });
  app.useGlobalPipes(
    new TrimPipe(),
    new ValidationPipe({
      whitelist: true,
      transformOptions: { enableImplicitConversion: true },
      stopAtFirstError: true,
    }),
  );
  app.useGlobalFilters(new ClassValidatorFilter());

  await app.listen(3000);
}

bootstrap();
