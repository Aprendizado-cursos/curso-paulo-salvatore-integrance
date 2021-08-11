import { IsString } from 'class-validator';
import { Colaborador } from 'src/colaboradores/entities/colaborador.entity';
import { Empresa } from '../entities/empresa.entity';

export class CreateEmpresaDto implements Empresa {
  @IsString()
  razaoSocial: string;

  colaboradores: Colaborador[];
}
