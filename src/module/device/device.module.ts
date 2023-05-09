import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { DeviceController } from './device.controller';
import { DeviceService } from './device.service';

@Module({
  providers: [DeviceService],
  controllers: [DeviceController],
  imports: [PrismaModule],
})
export class DeviceModule {}
