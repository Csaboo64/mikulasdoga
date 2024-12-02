import { IsString, IsBoolean } from 'class-validator';

export class CreateGyerekDto {
  @IsString()
  nev: string;

  @IsString()
  cim: string;

  @IsBoolean()
  joe: boolean;
}

