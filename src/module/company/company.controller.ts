import { Body, Controller, Get } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CompanyService } from './company.service';
import ReadCompanyInput from './dto/read-company.input';

@Controller('company')
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Get('readCompany')
  @ApiOperation({ operationId: 'readCompany' })
  @ApiBody({ type: ReadCompanyInput })
  @ApiResponse({ status: 200 })
  async readCompany(@Body() input: ReadCompanyInput) {
    console.log(input);
  }
}
