import { IsNotEmpty, IsUUID } from 'class-validator';

export class DeleteTagDto {
  @IsUUID('4', { message: 'ID nije validan.' })
  @IsNotEmpty({ message: 'ID ne sme biti prazan.' })
  public id: string;
}
