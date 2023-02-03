import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import ReadOrderInput from './dto/read-order.input';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}
}
