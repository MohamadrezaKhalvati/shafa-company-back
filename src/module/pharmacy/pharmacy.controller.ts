import { Body, Controller, Get } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import ReadPharmacyInput from './dto/read-pharmacy.input';
import { PharmacyService } from './pharmacy.service';

@Controller('pharmacy')
export class PharmacyController {
  constructor(private pharmacyService: PharmacyService) {}

  @Get('readPharmacy')
  @ApiOperation({ operationId: 'readPharmacy' })
  @ApiBody({ type: ReadPharmacyInput })
  @ApiResponse({ status: 200 })
  async readPharmacy(@Body() input: ReadPharmacyInput) {
    return await this.pharmacyService.readPharmacy(input);
  }
}
