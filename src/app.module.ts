import { Module } from '@nestjs/common';
import { CompanyModule } from './module/company/company.module';
import { CompanyService } from './module/company/company.service';
import { DeviceController } from './module/device/device.controller';
import { DeviceModule } from './module/device/device.module';
import { DeviceService } from './module/device/device.service';
import { MedicineController } from './module/medicine/medicine.controller';
import { MedicineModule } from './module/medicine/medicine.module';
import { MedicineService } from './module/medicine/medicine.service';
import { OrderController } from './module/order/order.controller';
import { OrderModule } from './module/order/order.module';
import { OrderService } from './module/order/order.service';
import { PatientController } from './module/patient/patient.controller';
import { PatientModule } from './module/patient/patient.module';
import { PatientService } from './module/patient/patient.service';
import { PharmacyController } from './module/pharmacy/pharmacy.controller';
import { PharmacyModule } from './module/pharmacy/pharmacy.module';
import { PharmacyService } from './module/pharmacy/pharmacy.service';
import { PrismaModule } from './module/prisma/prisma.module';
import { PrismaService } from './module/prisma/prisma.service';
import { SuggestionController } from './module/suggestion/suggestion.controller';
import { SuggestionModule } from './module/suggestion/suggestion.module';
import { TransportationController } from './module/transportation/transportation.controller';
import { TransportationModule } from './module/transportation/transportation.module';
import { TransportationService } from './module/transportation/transportation.service';

@Module({
  imports: [
    DeviceModule,
    CompanyModule,
    PharmacyModule,
    MedicineModule,
    PatientModule,
    OrderModule,
    SuggestionModule,
    TransportationModule,
    PrismaModule,
  ],
  controllers: [
    PharmacyController,
    OrderController,
    SuggestionController,
    TransportationController,
    OrderController,
    PatientController,
    MedicineController,
    DeviceController,
  ],
  providers: [
    DeviceService,
    PharmacyService,
    OrderService,
    TransportationService,
    OrderService,
    MedicineService,
    CompanyService,
    PatientService,
    PrismaService,
  ],
})
export class AppModule {}
