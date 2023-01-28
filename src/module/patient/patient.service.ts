import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { createPaginationResult } from 'src/common/input/pagination.input';
import { PrismaService } from '../prisma/prisma.service';
import CreatePatientInput from './dto/create-patient.input';
import ReadPatientInput from './dto/read-patient.input';

@Injectable()
export class PatientService {
  constructor(private prisma: PrismaService) {}

  async createPatient(input: CreatePatientInput) {
    const { Data } = input;
    const patient = await this.prisma.patient.create({
      data: {
        patient_name: Data.patient_name,
        patient_last_name: Data.patient_last_name,
        patient_age: Data.patient_age,
        patient_birthday: Data.patient_birthday,
        patient_blood_type: Data.patient_blood_type,
        patient_gender: Data.patient_gender,
        patient_identification_id: Data.patient_identification_id,
        patient_phone_number: Data.patient_phone_number,
      },
    });
    return patient;
  }

  async readPatient(input: ReadPatientInput) {
    const rawWhere = input.Data || {};

    const whereClause: Prisma.patientWhereInput = {
      id_patient: rawWhere.id_patient,
      patient_name: rawWhere.patient_name,
      patient_last_name: rawWhere.patient_last_name,
      patient_age: rawWhere.patient_age,
      patient_birthday: rawWhere.patient_birthday,
      patient_blood_type: rawWhere.patient_blood_type,
      patient_gender: rawWhere.patient_gender,
    };

    // whereClause = cleanDeep(whereClause);

    const count = this.prisma.patient.count({ where: whereClause });
    const entity = this.prisma.patient.findMany({
      where: whereClause,
      ...input?.sortBy?.convertToPrismaFilter(),
      ...input?.pagination?.convertToPrismaFilter(),
    });
    return createPaginationResult({ count, entity });
  }
}
