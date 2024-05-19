import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateExpertAdvertDto {
  @MaxLength(100, {
    message: 'Naslov mora imati najvise 100 karaktera.',
  })
  @IsNotEmpty({ message: 'Polje za naslov ne sme biti prazno.' })
  public title: string;

  @IsNotEmpty({ message: 'Polje za deskripciju ne sme biti prazno.' })
  public description: string;

  @IsArray({ message: 'Morate da posaljete tagove u vidu niza.' })
  @IsString({ each: true, message: 'Nevalidno slanje tagova.' })
  @ArrayMaxSize(5, { message: 'Mozete da posaljete maksimalno 5 tagova.' })
  @ArrayMinSize(1, { message: 'Morate izabrati bar jedan tag.' })
  @IsNotEmpty({ message: 'Tagovi ne smeju biti prazni.' })
  public tags: string[];

  public image_one: string;
  public image_two: string;
  public video: string;

  @IsNotEmpty({ message: 'Polje da li je oglas aktivan ne sme biti prazno.' })
  public active: boolean;
}
