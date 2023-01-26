import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumberString, IsOptional, IsString, ValidateNested } from 'class-validator';
import { PaginationData } from 'src/common/input/pagination.input';
import { SortByData } from 'src/common/input/sort-by.input';

class ReadPharmacyData {

  @ApiProperty()
  @IsString()
  pharmacy_name : string
  @ApiProperty()
  @IsString()
  pharmacy_established_year : string
  @ApiProperty()
  @IsString()
  pharmacy_address : string
  @ApiProperty()
  @IsString()
  pharmacy_branch : string
  @ApiProperty()
  @IsNumberString()
  pharmacy_phone_number : string 



}

export default class ReadPharmacyInput {
  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => PaginationData)
  @ValidateNested()
  pagination: PaginationData;

  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => SortByData)
  sortBy: SortByData;

  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => ReadPharmacyData)
  @ValidateNested()
  data: ReadPharmacyData;
}
