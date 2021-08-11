import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { Empresa } from './entities/empresa.entity';

@Injectable()
export class EmpresasService {
  constructor(private readonly prisma: PrismaService) {}

  create(createEmpresaDto: CreateEmpresaDto) {
    const data: Empresa = {
      ...createEmpresaDto,
    };

    return this.prisma.empresa.create({ data });
  }

  findAll() {
    return this.prisma.empresa.findMany();
  }

  findOne(id: number) {
    const empresa = this.prisma.empresa
      .findUnique({
        where: {
          id,
        },
        rejectOnNotFound: true,
      })
      .catch((e) => this.prisma.handleDataBaseError(e, 'Empresa'));

    return empresa;
  }

  update(id: number, updateEmpresaDto: UpdateEmpresaDto) {
    return `This action updates a #${id} empresa`;
  }

  remove(id: number) {
    return `This action removes a #${id} empresa`;
  }
}
