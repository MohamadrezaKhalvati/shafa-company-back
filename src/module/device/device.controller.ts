import { Body, Controller, Get } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { DeviceService } from './device.service';
import ReadDeviceInput from './dto/read-device.input';

@Controller('device')
export class DeviceController {
  constructor(private deviceService: DeviceService) {}

  @Get('readDevice')
  @ApiOperation({ operationId: 'readDevice' })
  @ApiBody({ type: ReadDeviceInput })
  @ApiResponse({ status: 200 })
  async readDevice(@Body() input: ReadDeviceInput) {
    return await this.deviceService.readDevice(input);
  }
}
