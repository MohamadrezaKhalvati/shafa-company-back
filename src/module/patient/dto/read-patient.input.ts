import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsNumberString, IsOptional, IsString, ValidateNested } from "class-validator";
import { PaginationData } from "src/common/input/pagination.input";
import { SortByData } from "src/common/input/sort-by.input";

class ReadPatientData {

    @ApiPropertyOptional()
    @IsNumber()
    id_patient ?: number

    @ApiPropertyOptional()
    @IsString()
    patient_name ?: string

    @ApiProperty()
    @IsString()
    patient_last_name ?: string 

    @ApiProperty()
    @IsString()
    patient_gender ?: string

    @ApiProperty()
    @IsNumber()
    patient_age ?: number

    @ApiProperty()
    @IsNumberString()
    patient_identification_id ?: string

    @ApiProperty()
    @IsString()
    patient_blood_type ?: string

    @ApiProperty()
    @IsString()
    patient_birthday ?: string
}

export default class ReadPatientInput {

    @ApiPropertyOptional()
    @IsOptional()
    @Type(() => PaginationData)
    @ValidateNested()
    pagination: PaginationData;
  
    @ApiPropertyOptional()
    @IsOptional()
    @Type(() => SortByData)
    sortBy: SortByData;
  
    @ApiProperty({ type: ReadPatientData })
    @Type(() => ReadPatientData)
    @ValidateNested()
    Data: ReadPatientData

}

