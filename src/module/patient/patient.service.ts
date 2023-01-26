import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import CreatePatientInput from './dto/create-patient.input';

@Injectable()
export class PatientService {
  constructor(private prisma: PrismaService) {}

  async createPatient(input: CreatePatientInput) {

    const {Data} = input
    const patient = await this.prisma.patient.create({
      data : {
        patient_name : Data.patient_name,
        patient_last_name : Data.patient_last_name ,
        patient_age : Data.patient_age , 
        patient_birthday : Data.patient_birthday,
        patient_blood_type : Data.patient_blood_type,
        patient_gender : Data.patient_gender,
        patient_identification_id  : Data.patient_identification_id,
        patient_phone_number : Data.patient_phone_number,

      }
    })
    return patient
  }
}
