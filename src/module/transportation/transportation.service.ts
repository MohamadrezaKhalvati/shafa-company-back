import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TransportationService {
  constructor(private prisma: PrismaService) {}
}
