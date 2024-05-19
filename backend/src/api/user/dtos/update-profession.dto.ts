import { IsOptional, MaxLength } from 'class-validator';

export class UpdateProfessionDto {
  @MaxLength(100, {
    message: 'E-mail adresa mora imati najvise 100 karaktera.',
  })
  @IsOptional()
  public readonly profession: string;

  @IsOptional()
  public readonly bio: string;
}
