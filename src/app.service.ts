import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { User } from './dto/user.dto';
import { PrismaService } from './prisma.service';


const prisma = new PrismaService();
@Injectable()
export class AppService {

  async getHello(): Promise<User[]> {
    const users: User[] = []
    const res = await prisma.user.findMany();
    res.map((element) =>{
      return users.push(new User(element))
    })
    return users;
  }

}
