import { PrismaService } from './prisma.service';
import { Global, Module } from '@nestjs/common';

@Global() //NOTE Importado em AppModule e pode ser usado por outros módulos sem ser importado novamente
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
