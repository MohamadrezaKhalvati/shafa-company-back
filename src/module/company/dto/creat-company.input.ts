import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString, isString, ValidateNested } from 'class-validator';
import { PaginationData } from 'src/common/input/pagination.input';
import { SortByData } from 'src/common/input/sort-by.input';

class CreatCompanyData {


  @ApiProperty()
  @IsString()
  pharmaceuticalCompany_name : string

  @ApiProperty()
  @IsString()
  pharmaceuticalCompany_established_year : string

  @ApiProperty()
  @IsString()
  pharmaceuticalCompany_locadtion : string

  @ApiProperty()
  @IsString()
  pharmaceuticalCompany_country : string

}



export default class CreatCompanyInput{

  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => CreatCompanyData)
  @ValidateNested()
  data : CreatCompanyData;
}

