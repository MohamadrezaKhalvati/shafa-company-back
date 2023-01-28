import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { createPaginationResult } from 'src/common/input/pagination.input';
import { PrismaService } from '../prisma/prisma.service';
import CreatPharmacyInput from './dto/create-pharmacy.input';
import ReadPharmacyInput from './dto/read-pharmacy.input';

@Injectable()
export class PharmacyService {
  constructor(private prisma: PrismaService) {}

  async readPharmacy(input: ReadPharmacyInput) {
    const Data = input.Data || {};

    const whereClause: Prisma.pharmacyWhereInput = {
      id_pharmacy: Data.id_pharmacy,
      pharmacy_name: Data.pharmacy_name,
      pharmacy_address: Data.pharmacy_address,
      pharmacy_branch: Data.pharmacy_branch,
      pharmacy_established_year: Data.pharmacy_established_year,
      pharmacy_phone_number: Data.pharmacy_phone_number,
    };

    // whereClause = cleanDeep(whereClause);

    const count = this.prisma.pharmacy.count({ where: whereClause });
    const entity = this.prisma.pharmacy.findMany({
      where: whereClause,
      ...input?.sortBy?.convertToPrismaFilter(),
      ...input?.pagination?.convertToPrismaFilter(),
    });
    return createPaginationResult({ count, entity });
  }

  async createPharmacy(input: CreatPharmacyInput) {
    const { Data } = input;

    const pharmacy = await this.prisma.pharmacy.create({
      data: {
        pharmacy_name: Data.pharmacy_name,
        pharmacy_established_year: Data.pharmacy_established_year,
        pharmacy_address: Data.pharmacy_address,
        pharmacy_branch: Data.pharmacy_branch,
        pharmacy_phone_number: Data.pharmacy_phone_number,
      },
    });

    return pharmacy;
  }
}
