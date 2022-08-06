import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from './prisma.service';


const prisma = new PrismaService();
@Injectable()
export class AppService {

  async getHello(): Promise<string> {
    
    const newLocal = await prisma.user.findMany();
    console.log(newLocal)
    return 'Hello World!';
  }

}
