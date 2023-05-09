import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDateString, IsString, ValidateNested } from 'class-validator';

class CreateComplicationsData {
  @ApiProperty()
  @IsString()
  complications_disese_name: string;

  @ApiProperty()
  @IsDateString()
  complications_duration: Date;
}

export default class CreateComplicationsInput {
  @ApiProperty({ type: CreateComplicationsData })
  @Type(() => CreateComplicationsData)
  @ValidateNested()
  Data: CreateComplicationsData;
}
