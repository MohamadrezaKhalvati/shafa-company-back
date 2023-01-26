import { Module } from '@nestjs/common';
import { ComplicationsService } from './complications.service';
import { ComplicationsController } from './complications.controller';

@Module({
  providers: [ComplicationsService],
  controllers: [ComplicationsController]
})
export class ComplicationsModule {}
