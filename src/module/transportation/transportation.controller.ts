import { Body, Controller, Get } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import ReadTransportationInput from './dto/read-transportation.input';
import { TransportationService } from './transportation.service';

@Controller('transportation')
export class TransportationController {
  constructor(private transporationService: TransportationService) {}

  @Get('readTransportation')
  @ApiOperation({ operationId: 'readTransportation' })
  @ApiBody({ type: ReadTransportationInput })
  @ApiResponse({ status: 200 })
  async readTransportation(@Body() input: ReadTransportationInput) {
    return await this.readTransportation(input);
  }
}
