import { Module } from '@nestjs/common';
import { CompanyModule } from './module/company/company.module';
import { ComplicationsModule } from './module/complications/complications.module';
import { DeviceModule } from './module/device/device.module';
import { MedicineModule } from './module/medicine/medicine.module';
import { OrderModule } from './module/order/order.module';
import { PatientModule } from './module/patient/patient.module';
import { PharmacyModule } from './module/pharmacy/pharmacy.module';
import { PrismaModule } from './module/prisma/prisma.module';
import { SuggestionModule } from './module/suggestion/suggestion.module';
import { TransportationModule } from './module/transportation/transportation.module';


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
    ComplicationsModule,
  ],
})
export class AppModule {}
