import { PrismaService } from './../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { ColaboradoresService } from './colaboradores.service';
import { ColaboradoresController } from './colaboradores.controller';

@Module({
  controllers: [ColaboradoresController],
  providers: [ColaboradoresService, PrismaService],
})
export class ColaboradoresModule {}
