import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { TransportationController } from './transportation.controller';
import { TransportationService } from './transportation.service';

@Module({
  controllers: [TransportationController],
  providers: [TransportationService],
  imports: [PrismaModule],
})
export class TransportationModule {}
