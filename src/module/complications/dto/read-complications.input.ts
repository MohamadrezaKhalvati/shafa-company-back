import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { PaginationData } from 'src/common/input/pagination.input';
import { SortByData } from 'src/common/input/sort-by.input';

class ReadComplicationsData {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  id_complications?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  id_pharmaceuticalcompany?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  complications_disese_name?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  complications_duration?: string;
}

export default class ReadComplicationsDataInput {
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
  @Type(() => ReadComplicationsData)
  @ValidateNested()
  data?: ReadComplicationsData;
}
