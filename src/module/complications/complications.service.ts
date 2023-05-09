import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { createPaginationResult } from 'src/common/input/pagination.input';
import { PrismaService } from '../prisma/prisma.service';
import CreateComplicationsInput from './dto/create-complications.input';
import ReadComplicationsDataInput from './dto/read-complications.input';

@Injectable()
export class ComplicationsService {
  constructor(private prisma: PrismaService) {}

  async creatComplication(input: CreateComplicationsInput) {
    const { Data } = input;

    const complications = this.prisma.complications.create({
      data: {
        complications_disease_name: Data.complications_disese_name,
        complications_duration: Data.complications_duration,
      },
    });
    return complications;
  }

  async readComplications(input: ReadComplicationsDataInput) {
    const rawWhere = input.data || {};

    const whereClause: Prisma.complicationsWhereInput = {
      id_complications: rawWhere.id_complications,
      id_pharmaceuticalcompany: rawWhere.id_pharmaceuticalcompany,
      complications_disease_name: rawWhere.complications_disese_name,
      complications_duration: rawWhere.complications_duration,
    };
    const count = this.prisma.complications.count({ where: whereClause });
    const entity = this.prisma.complications.findMany({
      where: whereClause,
      ...input?.sortBy?.convertToPrismaFilter(),
      ...input?.pagination?.convertToPrismaFilter(),
    });
    return createPaginationResult({ count, entity });
  }
}
