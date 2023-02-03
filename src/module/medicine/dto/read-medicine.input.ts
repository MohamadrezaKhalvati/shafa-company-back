import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { PaginationData } from 'src/common/input/pagination.input';
import { SortByData } from 'src/common/input/sort-by.input';

class ReadMedicineData {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  id_medicine?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  medicine_name?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  medicine_adminstration?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  medicine_production_date?: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  medicine_expiry_date?: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  medicine_age_limit?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  id_company?: number;
}

export default class ReadMedicieInput {
  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => PaginationData)
  @ValidateNested()
  pagination?: PaginationData;

  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => SortByData)
  sortBy?: SortByData;

  @ApiPropertyOptional({ type: ReadMedicineData })
  @IsOptional()
  @Type(() => ReadMedicineData)
  @ValidateNested()
  Data?: ReadMedicineData;
}
