import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { createPaginationResult } from 'src/common/input/pagination.input';
import { PrismaService } from '../prisma/prisma.service';
import CreateMedicineInput from './dto/create-medicine.input';
import ReadMedicieInput from './dto/read-medicine.input'


@Injectable()
export class MedicineService {
  constructor(private prisma: PrismaService ) {}


  async createMedicine(input: CreateMedicineInput) {
    console.log(input);
  }

  async creatMidicen(input : CreateMedicineInput ){

    const {Data} = input
    const medicien = await this.prisma.medicine.create({
      data : {
        medicine_name : Data.medicine_name,
        medicine_adminstration : Data.medicine_adminstration,
        medicine_age_limit : Data.medicine_age_limit ,
        
      }
    }
    )

    return medicien

  }


  async readMedicien(input : ReadMedicieInput){
    const rawWhere = input.Data || {};
      
    let whereClause: Prisma.medicineWhereInput = {
      id_medicine : rawWhere.id_medicine,
      medicine_name : rawWhere.medicine_name,
      medicine_adminstration : rawWhere.medicine_adminstration ,
      medicine_age_limit : rawWhere.medicine_age_limit ,
      id_company : rawWhere.id_company

    };
  
    // whereClause = cleanDeep(whereClause);
  
    const count = this.prisma.medicine.count({ where: whereClause });
    const entity = this.prisma.medicine.findMany({
        where: whereClause,
        ...input?.sortBy?.convertToPrismaFilter(),
        ...input?.pagination?.convertToPrismaFilter(),
    });
    return createPaginationResult({ count, entity });

  

  }



  // async createTest(input : any ){

  //  const  medicine_content =  await this.dbConnection.getConnection().qury("SELECT * FROM medicine_content")
  // return medicine_content
  // }

}
