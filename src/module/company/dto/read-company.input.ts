import { ApiPropertyOptional } from '@nestjs/swagger';
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

class ReadCompanyData {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  id_pharmaceuticalCompany?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  pharmaceuticalCompany_name?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  pharmaceuticalCompany_established_year?: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  pharmaceuticalCompany_locadtion?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  pharmaceuticalCompany_country?: string;
}

export default class ReadCompanyInput {
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
  @Type(() => ReadCompanyData)
  @ValidateNested()
  data?: ReadCompanyData;
}
