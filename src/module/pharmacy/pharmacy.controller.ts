import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import CreatPharmacyInput from './dto/create-pharmacy.input';
import ReadPharmacyInput from './dto/read-pharmacy.input';
import { PharmacyService } from './pharmacy.service';

@Controller('pharmacy')
export class PharmacyController {
  constructor(private pharmacyService: PharmacyService) {}

  @Post('readPharmacy')
  @ApiOperation({ operationId: 'readPharmacy' })
  @ApiBody({ type: ReadPharmacyInput })
  @ApiResponse({ status: 200 })
  async readPharmacy(@Body() input: ReadPharmacyInput) {
    return await this.pharmacyService.readPharmacy(input);
  }

  @Post('createPharmacy')
  @ApiOperation({ operationId: 'creatPharmacy' })
  @ApiBody({ type: CreatPharmacyInput })
  @ApiResponse({ status: 200 })
  async creatPharmacy(@Body() input: CreatPharmacyInput) {
    return await this.pharmacyService.createPharmacy(input);
  }
}
