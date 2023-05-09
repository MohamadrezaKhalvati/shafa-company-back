import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [PatientService],
  controllers: [PatientController],
  imports: [PrismaModule],
})
export class PatientModule {}
