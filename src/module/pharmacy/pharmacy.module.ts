import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { PharmacyController } from './pharmacy.controller';
import { PharmacyService } from './pharmacy.service';

@Module({
  controllers: [PharmacyController],
  providers: [PharmacyService , PrismaService],
  imports: [PrismaModule],
})
export class PharmacyModule {}
