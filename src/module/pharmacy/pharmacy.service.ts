import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import ReadPharmacyInput from './dto/read-pharmacy.input';

@Injectable()
export class PharmacyService {
  constructor(prisma: PrismaService) {}

  async readPharmacy(input: ReadPharmacyInput) {
    console.log(input);
  }
}
