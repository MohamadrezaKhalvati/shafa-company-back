import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";

class CreatCompanyData{

}

export default class CreateComplicationsInput {

    @ApiProperty({ type: CreatCompanyData})
    @Type(() => CreatCompanyData)
    @ValidateNested()
    Data: CreatCompanyData
}