import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import ReadDeviceInput from './dto/read-device.input';

@Injectable()
export class DeviceService {
  constructor(private prisma: PrismaService) {}

  async readDevice(input: ReadDeviceInput) {}
}
