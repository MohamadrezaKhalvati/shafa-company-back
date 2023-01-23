import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import ReadTransportationInput from './dto/read-transportation.input';

@Injectable()
export class TransportationService {
  constructor(private prisma: PrismaService) {}

  async readTransportation(input: ReadTransportationInput) {
    console.log(input);
  }
}
