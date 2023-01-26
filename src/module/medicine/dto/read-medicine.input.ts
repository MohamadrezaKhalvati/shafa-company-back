import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { Type } from "class-transformer"
import {  IsNumber, IsOptional, IsString, ValidateNested } from "class-validator"
import { PaginationData } from "src/common/input/pagination.input"
import { SortByData } from "src/common/input/sort-by.input"

class ReadMedicineData {

    @ApiPropertyOptional()
    @IsNumber()
    id_medicine ?:number

    @ApiPropertyOptional()
    @IsString()
    medicine_name ?: string

    @ApiPropertyOptional()
    @IsString()
    medicine_adminstration ?: string

    @ApiPropertyOptional()
    @IsString()
    medicine_production_date ?: string

    @ApiPropertyOptional()
    @IsString()
    medicine_expiry_date ?: string

    @ApiPropertyOptional()
    @IsString()
    medicine_age_limit ?: string 
    
    @ApiPropertyOptional()
    @IsNumber()
    id_company ?: number

}

export default class ReadMedicieInput {

    @ApiPropertyOptional()
    @IsOptional()
    @Type(() => PaginationData)
    @ValidateNested()
    pagination: PaginationData;
  
    @ApiPropertyOptional()
    @IsOptional()
    @Type(() => SortByData)
    sortBy: SortByData;

    @ApiProperty({ type: ReadMedicineData })
    @Type(() => ReadMedicineData)
    @ValidateNested()
    Data: ReadMedicineData
}


