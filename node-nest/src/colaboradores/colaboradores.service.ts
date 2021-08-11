import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateColaboradorDto } from './dto/create-colaborador.dto';
import { UpdateColaboradorDto } from './dto/update-colaborador.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class ColaboradoresService {
  // Modificador de acesso: private/public
  // Private: só quem está na classe acessa
  // Public: qualquer código externo também acessa

  constructor(private readonly prisma: PrismaService) {}

  create(createColaboradorDto: CreateColaboradorDto) {
    // const item: Colaborador = {
    //   id: this.data.length + 1,
    //   ...createColaboradorDto,
    // };

    // this.data.push(item);

    // return item;

    const data: CreateColaboradorDto = {
      ...createColaboradorDto,
    };

    return this.prisma.colaborador
      .create({ data, include: { empresa: true } })
      .catch((e) => this.prisma.handleDataBaseError(e, 'Colaborador'));
  }

  findAll() {
    return this.prisma.colaborador.findMany({ include: { empresa: true } });
  }

  async findOne(id: number) {
    const data = await this.prisma.colaborador
      .findUnique({
        where: {
          id,
        },
        include: { empresa: true },
        rejectOnNotFound: true,
      })
      .catch((e) => this.prisma.handleDataBaseError(e, 'Colaborador'));

    // if (!data) {
    //   throw new EntityNotFoundError('Colaborador não encontrado');
    // }

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

    return this.prisma.colaborador
      .update({
        where: { id },
        data,
        include: { empresa: true },
      })
      .catch((e) => this.prisma.handleDataBaseError(e, 'Colaborador'));
  }

  remove(id: number) {
    // const index = this.findIndexById(id);

    // delete this.data[index];

    return this.prisma.colaborador
      .delete({ where: { id } })
      .catch((e) => this.prisma.handleDataBaseError(e, 'Colaborador'));
  }

  // private handleDataBaseError(error: PrismaClientKnownRequestError): Error {
  //   if (error.code === 'P2025' || error.name === 'NotFoundError') {
  //     throw new EntityNotFoundError('Colaborador não encontrado');
  //   }
  //   if (error.code === 'P2003') {
  //     throw new EntityNotFoundError('Empresa não encontrada');
  //   }

  //   throw error;
  // }

  // private findIndexById(id: number) {
  //   const index = this.data.findIndex((item) => item?.id == id);

  //   if (!this.data[index]) {
  //     throw new EntityNotFoundError('Colaborador não encontrado.');
  //   }

  //   return index;
  // }
}
