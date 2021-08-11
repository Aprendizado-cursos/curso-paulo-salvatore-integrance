import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { Colaborador } from 'src/colaboradores/entities/colaborador.entity';
import { Empresa } from '../entities/empresa.entity';
import { CreateEmpresaDto } from './create-empresa.dto';

export class UpdateEmpresaDto implements Empresa {
  @IsString()
  razaoSocial: string;
  colaboradores: Colaborador[];
}
