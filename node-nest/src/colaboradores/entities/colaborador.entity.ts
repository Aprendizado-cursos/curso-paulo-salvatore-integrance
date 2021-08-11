import { Empresa } from 'src/empresas/entities/empresa.entity';

export class Colaborador {
  id?: number;

  nome: string;

  idade?: number;

  empresa: Empresa;
}
