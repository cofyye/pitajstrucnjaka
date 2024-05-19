import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminSevice } from './admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagEntity } from 'src/shared/entities/tag.entity';
import { UserEntity } from 'src/shared/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TagEntity, UserEntity])],
  controllers: [AdminController],
  providers: [AdminSevice],
})
export class AdminModule {}
