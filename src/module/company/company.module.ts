import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [CompanyService],
  controllers: [CompanyController],
  imports: [PrismaModule],
})
export class CompanyModule {}
