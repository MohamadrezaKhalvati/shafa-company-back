import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [CompanyService , PrismaService],
  controllers: [CompanyController],
  imports: [PrismaModule],
})
export class CompanyModule {}
