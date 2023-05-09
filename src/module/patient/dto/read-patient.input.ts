import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { PaginationData } from 'src/common/input/pagination.input';
import { SortByData } from 'src/common/input/sort-by.input';

class ReadPatientData {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  id_patient?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  patient_name?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  patient_last_name?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  patient_gender?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  patient_age?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  patient_identification_id?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  patient_blood_type?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  patient_birthday?: string;
}

export default class ReadPatientInput {
  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => PaginationData)
  @ValidateNested()
  pagination?: PaginationData;

  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => SortByData)
  sortBy?: SortByData;

  @ApiProperty({ type: ReadPatientData })
  @Type(() => ReadPatientData)
  @ValidateNested()
  Data?: ReadPatientData;
}
