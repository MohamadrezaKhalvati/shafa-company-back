import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ComplicationsService } from './complications.service';
import CreateComplicationsInput from './dto/creat-complications.input';
import ReadComplicationsDataInput from './dto/read-complications.input';

@Controller('complications')
export class ComplicationsController {
  constructor(private complicationsService: ComplicationsService) {}

  @Post('readcomplications')
  @ApiOperation({ operationId: 'readcomplications' })
  @ApiBody({ type: ReadComplicationsDataInput })
  @ApiResponse({ status: 200 })
  async readComplications(@Body() input: ReadComplicationsDataInput) {
    return await this.complicationsService.readComplications(input);
  }

  @Post('creatcomplications')
  @ApiOperation({ operationId: 'creatcomplications' })
  @ApiBody({ type: CreateComplicationsInput })
  @ApiResponse({ status: 200 })
  async craetComplications(@Body() input: CreateComplicationsInput) {
    await this.complicationsService.creatComplication(input);
  }
}
