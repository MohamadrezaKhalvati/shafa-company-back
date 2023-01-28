import { Body, Controller, Get } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import ReadOrderInput from './dto/read-order.input';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get('readOrder')
  @ApiOperation({ operationId: 'readOrder' })
  @ApiBody({ type: ReadOrderInput })
  @ApiResponse({ status: 200 })
  async readOrder(@Body() input: ReadOrderInput) {
    // return await this.orderService.readOrder(input);
  }
}
