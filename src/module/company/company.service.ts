import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { createPaginationResult } from 'src/common/input/pagination.input';
import { PrismaService } from '../prisma/prisma.service';
import CreatCompanyInput from './dto/create-company.input';
import ReadCompanyInput from './dto/read-company.input';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}

  async readCompany(input: ReadCompanyInput) {
    const rawWhere = input.data || {};

    const whereClause: Prisma.pharmaceuticalcompanyWhereInput = {
      id_PharmaceuticalCompany: rawWhere.id_pharmaceuticalCompany,
      PharmaceuticalCompany_name: rawWhere.pharmaceuticalCompany_name,
      PharmaceuticalCompany_country: rawWhere.pharmaceuticalCompany_country,
      PharmaceuticalCompany_location: rawWhere.pharmaceuticalCompany_locadtion,
      PharmaceuticalCompany_established_year:
        rawWhere.pharmaceuticalCompany_established_year,
    };

    const count = this.prisma.pharmaceuticalcompany.count({
      where: whereClause,
    });

    const entity = this.prisma.pharmaceuticalcompany.findMany({
      where: whereClause,
      ...input?.sortBy?.convertToPrismaFilter(),
      ...input?.pagination?.convertToPrismaFilter(),
    });

    return await createPaginationResult({ count, entity });
  }

  async creatCompany(input: CreatCompanyInput) {
    const { data } = input;

    const company = await this.prisma.pharmaceuticalcompany.create({
      data: {
        PharmaceuticalCompany_name: data.pharmaceuticalCompany_name,
        PharmaceuticalCompany_country: data.pharmaceuticalCompany_country,
        PharmaceuticalCompany_established_year:
          data.pharmaceuticalCompany_established_year,
        PharmaceuticalCompany_location: data.pharmaceuticalCompany_locadtion,
      },
    });
    console.log(company);

    return company;
  }
}
