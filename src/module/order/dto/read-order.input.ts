import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PaginationData } from 'src/common/input/pagination.input';
import { SortByData } from 'src/common/input/sort-by.input';

class ReadOrderData {}

export default class ReadOrderInput {
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
  @Type(() => ReadOrderData)
  @ValidateNested()
  data: ReadOrderData;
}
