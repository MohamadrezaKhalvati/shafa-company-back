import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import ReadCompanyInput from './dto/read-company.input';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}

  async readCompany(input: ReadCompanyInput) {
    console.log(input);
  }
}
