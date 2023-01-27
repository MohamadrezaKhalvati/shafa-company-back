import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { createPaginationResult } from 'src/common/input/pagination.input';
import { PrismaService } from '../prisma/prisma.service';
import ReadPharmacyInput from './dto/read-pharmacy.input';

@Injectable()
export class PharmacyService {
  constructor(private prisma: PrismaService) {}

  async readPharmacy(input: ReadPharmacyInput) {

    let whereClause: Prisma.pharmacyWhereInput = {

       id_pharmacy: input.Data.id_pharmacy || {} ,
       pharmacy_name : input.Data.pharmacy_name || {},
       pharmacy_address : input.Data.pharmacy_address || {} ,
       pharmacy_branch : input.Data.pharmacy_branch || {} ,
       pharmacy_established_year: input.Data.pharmacy_established_year || {},
       pharmacy_phone_number : input.Data.pharmacy_phone_number || {}


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





}
