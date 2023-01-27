import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CompanyService } from './company.service';
import CreatCompanyInput from './dto/creat-company.input';
import ReadCompanyInput from './dto/read-company.input';

@Controller('company')
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Get('readCompany')
  @ApiOperation({ operationId: 'readCompany' })
  @ApiBody({ type: ReadCompanyInput })
  @ApiResponse({ status: 200 })
  async readCompany(@Body() input: ReadCompanyInput) {
    this.companyService.readCompany(input);
  }


  @Post('creatCompany')
  @ApiOperation({ operationId: 'creatCompany' })
  @ApiBody({ type: CreatCompanyInput })
  @ApiResponse({ status: 200 })
  async creatCompany(@Body() input: CreatCompanyInput) {
    this.companyService.creatCompany(input);
  }
}
