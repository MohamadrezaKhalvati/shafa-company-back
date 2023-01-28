import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsDateString,
  IsJSON,
  isJSON,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

class CreateMedicineData {
  @ApiProperty()
  @IsString()
  medicine_name: string;

  @ApiProperty()
  @IsString()
  medicine_adminstration: string;

  @ApiProperty()
  @IsDateString()
  medicine_production_date: Date;

  @ApiProperty()
  @IsDateString()
  medicine_expiry_date: Date;

  @ApiProperty()
  @IsString()
  medicine_age_limit: string;

  @ApiPropertyOptional()
  @IsNumber()
  id_company?: number;

  @ApiPropertyOptional()
  // @IsString()
  medicine_content?: any;
}

export default class CreateMedicineInput {
  @ApiProperty({ type: CreateMedicineData })
  @Type(() => CreateMedicineData)
  @ValidateNested()
  Data: CreateMedicineData;
}
