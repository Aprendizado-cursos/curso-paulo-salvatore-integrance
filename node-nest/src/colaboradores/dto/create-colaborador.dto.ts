import { Prisma } from '.prisma/client';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Empresa } from 'src/empresas/entities/empresa.entity';
import { Colaborador } from '../entities/colaborador.entity';

export class CreateColaboradorDto implements Colaborador {
  empresa: Empresa;

  @IsString()
  nome: string;

  @IsNumber()
  @IsOptional()
  idade?: number;
}
