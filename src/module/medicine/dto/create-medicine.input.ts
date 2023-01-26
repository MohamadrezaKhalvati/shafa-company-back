import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsNumber, IsString, ValidateNested } from "class-validator"

class CreateMedicineData {

    @ApiProperty()
    @IsString()
    medicine_name : string

    @ApiProperty()
    @IsString()
    medicine_adminstration : string

    @ApiProperty()
    @IsString()
    medicine_production_date : string

    @ApiProperty()
    @IsString()
    medicine_expiry_date : string

    @ApiProperty()
    @IsString()
    medicine_age_limit : string 
    
    @ApiPropertyOptional()
    @IsNumber()
    id_company ?: number






}

export default class CreateMedicineInput {

    @ApiProperty({ type: CreateMedicineData })
    @Type(() => CreateMedicineData)
    @ValidateNested()
    Data: CreateMedicineData
}

