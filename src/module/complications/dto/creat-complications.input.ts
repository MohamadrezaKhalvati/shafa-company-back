import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString, ValidateNested } from "class-validator";

class CreatComplicationsData{

    @ApiProperty()
    @IsString()
    complications_disese_name : string


    @ApiProperty()
    @IsString()
    complications_duration : string

}

export default class CreateComplicationsInput {

    @ApiProperty({ type: CreatComplicationsData})
    @Type(() => CreatComplicationsData)
    @ValidateNested()
    Data: CreatComplicationsData
}