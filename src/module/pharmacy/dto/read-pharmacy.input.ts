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

class ReadPharmacyData {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  id_pharmacy?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  pharmacy_name?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  pharmacy_established_year?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  pharmacy_address?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  pharmacy_branch?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  pharmacy_phone_number?: string;
}

export default class ReadPharmacyInput {
  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => PaginationData)
  @ValidateNested()
  pagination?: PaginationData;

  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => SortByData)
  sortBy?: SortByData;

  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => ReadPharmacyData)
  @ValidateNested()
  Data?: ReadPharmacyData;
}
