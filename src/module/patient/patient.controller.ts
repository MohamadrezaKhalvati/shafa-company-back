import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import CreatePatientInput from './dto/create-patient.input';
import { PatientService } from './patient.service';

@Controller('patient')
export class PatientController {
  constructor(private patientService: PatientService) {}

  @Post('createPatient')
  @ApiOperation({ operationId: 'createPatient' })
  @ApiBody({ type: CreatePatientInput })
  @ApiResponse({ status: 200 })
  async createPatient(@Body() input: CreatePatientInput) {
    return await this.patientService.createPatient(input);
  }
}
