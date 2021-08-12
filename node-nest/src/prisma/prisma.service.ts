import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { EntityNotFoundError } from 'src/errors/entity-not-found.error';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
    
  }

  handleDataBaseError(
    error: PrismaClientKnownRequestError,
    entity: string,
  ): Error {
    if (error.code === 'P2025' || error.name === 'NotFoundError') {
      throw new EntityNotFoundError(`${entity} não encontrado(a)`);
    }
    if (error.code === 'P2003') {
      throw new EntityNotFoundError(`${entity} não encontrado(a)`);
    }

    throw error;
  }
}
