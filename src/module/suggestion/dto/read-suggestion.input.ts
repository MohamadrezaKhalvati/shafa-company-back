import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { PaginationData } from 'src/common/input/pagination.input';
import { SortByData } from 'src/common/input/sort-by.input';

class ReadSuggestionData {


  @ApiPropertyOptional()
  @IsString()
  suggestion_topic ?: string
  
  @ApiPropertyOptional()
  @IsString()
  suggestion_date ?: string 
  
  @ApiPropertyOptional()
  @IsString()
  suggestion_value ?: string




}

export default class ReadSuggestionInput {
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
  @Type(() => ReadSuggestionData)
  @ValidateNested()
  data?: ReadSuggestionData;
}
