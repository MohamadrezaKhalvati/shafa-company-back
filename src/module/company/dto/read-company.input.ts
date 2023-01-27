import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString, isString, ValidateNested } from 'class-validator';
import { PaginationData } from 'src/common/input/pagination.input';
import { SortByData } from 'src/common/input/sort-by.input';

class ReadCompanyData {


  @ApiPropertyOptional()
  @IsNumber()
  id_pharmaceuticalCompany ?: number

  @ApiPropertyOptional()
  @IsString()
  pharmaceuticalCompany_name ?: string

  @ApiPropertyOptional()
  @IsString()
  pharmaceuticalCompany_established_year ?: string

  @ApiPropertyOptional()
  @IsString()
  pharmaceuticalCompany_locadtion ?: string

  @ApiPropertyOptional()
  @IsString()
  pharmaceuticalCompany_country ?: string

}

export default class ReadCompanyInput {
  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => PaginationData)
  @ValidateNested()
  pagination ? : PaginationData;

  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => SortByData)
  sortBy ? : SortByData;

  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => ReadCompanyData)
  @ValidateNested()
  data ? : ReadCompanyData;
}
