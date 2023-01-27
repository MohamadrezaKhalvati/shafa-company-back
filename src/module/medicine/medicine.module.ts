import { Module } from '@nestjs/common';
import { MedicineService } from './medicine.service';
import { MedicineController } from './medicine.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { DbConnection } from 'src/dbConnection/DB-connection';

@Module({
  providers: [MedicineService ],
  controllers: [MedicineController],
  imports: [PrismaModule ],
})
export class MedicineModule {}
