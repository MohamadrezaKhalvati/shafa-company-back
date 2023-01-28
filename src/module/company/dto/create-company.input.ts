import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

class CreatCompanyData {
  @ApiProperty()
  @IsString()
  pharmaceuticalCompany_name: string;

  @ApiProperty()
  @IsDateString()
  pharmaceuticalCompany_established_year: Date;

  @ApiProperty()
  @IsString()
  pharmaceuticalCompany_locadtion: string;

  @ApiProperty()
  @IsString()
  pharmaceuticalCompany_country: string;
}

export default class CreatCompanyInput {
  @ApiProperty()
  @Type(() => CreatCompanyData)
  @ValidateNested()
  data: CreatCompanyData;
}
