import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { PharmacyController } from './pharmacy.controller';
import { PharmacyService } from './pharmacy.service';

@Module({
  controllers: [PharmacyController],
  providers: [PharmacyService],
  imports: [PrismaModule],
})
export class PharmacyModule {}
