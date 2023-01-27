import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import CreateMedicieInput from './dto/create-medicine.input';
import ReadMedicieInput from './dto/read-medicine.input';
import { MedicineService } from './medicine.service';

@Controller('medicine')
export class MedicineController {
  constructor(private medicineService: MedicineService) {}

  @Post('createMedicine')
  @ApiOperation({ operationId: 'createMedicine' })
  @ApiBody({ type: CreateMedicieInput })
  @ApiResponse({ status: 200 })
  async createMedicine(@Body() input: CreateMedicieInput) {
    await this.medicineService.createMedicine(input);
  }




  @Post("readMedicine")
  @ApiBody({type : ReadMedicieInput})
  @ApiResponse({ status: 200 })
  async addMedicine(@Body() input: ReadMedicieInput) {
      return this.medicineService.readMedicien(input);
  }




}
