import { Prisma } from '@prisma/client';

export class Empresa implements Prisma.empresaCreateInput {
  id?: number;
  razaoSocial: string;
  colaboradores?: Prisma.colaboradorCreateNestedManyWithoutEmpresaInput;
}
