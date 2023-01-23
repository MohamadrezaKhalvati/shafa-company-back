import { Module } from '@nestjs/common';
import { MedicineService } from './medicine.service';
import { MedicineController } from './medicine.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [MedicineService],
  controllers: [MedicineController],
  imports: [PrismaModule],
})
export class MedicineModule {}
