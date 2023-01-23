import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import CreatePatientInput from './dto/create-patient.input';

@Injectable()
export class PatientService {
  constructor(private prisma: PrismaService) {}

  async createPatient(input: CreatePatientInput) {
    console.log(input);
  }
}
