import { Module } from '@nestjs/common';
import { TransportationController } from './transportation.controller';

@Module({
  controllers: [TransportationController]
})
export class TransportationModule {}
