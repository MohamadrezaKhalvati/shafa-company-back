import { Module } from '@nestjs/common';
import { ComplicationsService } from './complications.service';
import { ComplicationsController } from './complications.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [ComplicationsService , PrismaService],
  controllers: [ComplicationsController]
})
export class ComplicationsModule {}
