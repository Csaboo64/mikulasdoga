import { IsString, IsNumber } from 'class-validator';

export class CreateJatekDto {
  @IsString()
  megnevezes: string;

  @IsString()
  anyag: string;

  @IsNumber()
  suly: number;
}
