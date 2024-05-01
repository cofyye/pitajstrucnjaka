import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'users',
})
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ name: 'first_name', nullable: false, length: 50 })
  public firstName: string;

  @Column({ name: 'last_name', nullable: false, length: 50 })
  public lastName: string;

  @Column({ name: 'username', unique: true, nullable: false, length: 30 })
  public username: string;

  @Column({ name: 'email', unique: true, nullable: false, length: 100 })
  public email: string;

  @Column({ name: 'password', nullable: false, length: 100 })
  public password: string;

  @Column({ name: 'verification_token', length: 6, nullable: true })
  public verificationToken: string;

  @Column({ name: 'verification_exp_date', type: 'datetime', nullable: true })
  public verificationExpDate: Date;

  @Column({ name: 'password_token', length: 12, nullable: true })
  public passwordToken: string;

  @Column({ name: 'password_exp_date', type: 'datetime', nullable: true })
  public passwordExpDate: Date;

  @Column({ name: 'refresh_token', nullable: true })
  public refreshToken: string;

  @Column({ name: 'active', default: false, nullable: false })
  public active: boolean;

  @Column({ name: 'is_expert', default: false, nullable: false })
  public isExpert: boolean;

  @Column({
    name: 'avatar',
    nullable: false,
    default: 'default-avatar.png',
    length: 100,
  })
  public avatar: string;

  @CreateDateColumn({
    name: 'registration_date',
    type: 'datetime',
    nullable: false,
  })
  public registrationDate: Date;
}
