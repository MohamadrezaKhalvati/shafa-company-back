import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import CreateMedicieInput from './dto/create-medicine.input';

@Injectable()
export class MedicineService {
  constructor(private prisma: PrismaService) {}

  async createMedicine(input: CreateMedicieInput) {
    console.log(input);
  }
}
