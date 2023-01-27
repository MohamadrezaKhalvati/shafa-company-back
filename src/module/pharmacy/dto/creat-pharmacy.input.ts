import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsNumberString, IsOptional, IsString, ValidateNested } from "class-validator"

class CreatPharmacyData {

  
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

  export default class CreatPharmacyInput{

    @ApiPropertyOptional()
    @IsOptional()
    @Type(() => CreatPharmacyData)
    @ValidateNested()
    Data: CreatPharmacyData;
  }