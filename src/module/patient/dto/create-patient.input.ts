import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsNumber,
  IsNumberString,
  IsString,
  ValidateNested,
} from 'class-validator';

class CreatPatientData {
  @ApiProperty()
  @IsString()
  patient_name: string;

  @ApiProperty()
  @IsString()
  patient_last_name: string;

  @ApiProperty()
  @IsString()
  patient_gender: string;

  @ApiProperty()
  @IsNumber()
  patient_age: number;

  @ApiProperty()
  @IsNumberString()
  patient_identification_id: string;

  @ApiProperty()
  @IsString()
  patient_blood_type: string;

  @ApiProperty()
  @IsDateString()
  patient_birthday: Date;

  @ApiProperty()
  @IsNumberString()
  patient_phone_number: string;
}

export default class CreatePatientInput {
  @ApiProperty({ type: CreatPatientData })
  @Type(() => CreatPatientData)
  @ValidateNested()
  Data: CreatPatientData;
}
