import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { EntityNotFoundError } from 'src/errors/entity-not-found.error';
import { CreateColaboradorDto } from './dto/create-colaborador.dto';
import { UpdateColaboradorDto } from './dto/update-colaborador.dto';
import { Colaborador } from './entities/colaborador.entity';
import { Prisma } from '@prisma/client';

@Injectable()
export class ColaboradoresService {
  // Modificador de acesso: private/public
  // Private: só quem está na classe acessa
  // Public: qualquer código externo também acessa

  constructor(private readonly prisma: PrismaService) {}

  private readonly data: Colaborador[] = [
    {
      id: 1,
      nome: 'Paulo Salvatore',
      idade: 99,
    },
  ];

  create(createColaboradorDto: CreateColaboradorDto) {
    // const item: Colaborador = {
    //   id: this.data.length + 1,
    //   ...createColaboradorDto,
    // };

    // this.data.push(item);

    // return item;

    const data: Prisma.colaboradorCreateInput = {
      ...createColaboradorDto,
    };

    return this.prisma.colaborador.create({ data });
  }

  findAll() {
    return this.prisma.colaborador.findMany();
  }

  async findOne(id: number) {
    const data = await this.prisma.colaborador.findUnique({
      where: {
        id,
      },
    });

    if (!data) {
      throw new EntityNotFoundError('Colaborador não encontrado');
    }

    return data;
  }

  update(id: number, updateColaboradorDto: UpdateColaboradorDto) {
    // const index = this.findIndexById(id);

    // this.data[index] = {
    //   ...this.data[index],
    //   ...updateColaboradorDto,
    // };

    // return this.data[index];

    const data: Prisma.colaboradorUpdateInput = {
      ...updateColaboradorDto,
    };

    return this.prisma.colaborador.update({ where: { id }, data });
  }

  remove(id: number) {
    // const index = this.findIndexById(id);

    // delete this.data[index];

    return this.prisma.colaborador.delete({ where: { id } });
  }

  // private findIndexById(id: number) {
  //   const index = this.data.findIndex((item) => item?.id == id);

  //   if (!this.data[index]) {
  //     throw new EntityNotFoundError('Colaborador não encontrado.');
  //   }

  //   return index;
  // }
}
