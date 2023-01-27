import { ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { PaginationData } from "src/common/input/pagination.input";
import { SortByData } from "src/common/input/sort-by.input";

class ReadComplicationsData{


    @ApiPropertyOptional()
    @IsNumber()
    id_complications ?: number
    
    
    @ApiPropertyOptional()
    @IsString()
    complications_disese_name ? : string
    
    
    @ApiPropertyOptional()
    @IsString()
    complications_duration ?: string

    
    @ApiPropertyOptional()
    @IsNumber()
    id_pharmaceuticalcompany ? : number




}

export default class ReadComplicationsDataInput {
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
    @Type(() => ReadComplicationsData)
    @ValidateNested()
    data ?: ReadComplicationsData;
  }
  