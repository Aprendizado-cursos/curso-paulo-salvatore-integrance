import { IsNumber, IsOptional, IsString } from 'class-validator';
export class CreateColaboradorDto {
  @IsNumber()
  empresaId: number;

  @IsString()
  nome: string;

  @IsNumber()
  @IsOptional()
  idade?: number;
}
