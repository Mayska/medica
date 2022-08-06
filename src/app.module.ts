import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { HomeopathyModule } from './homeopathy/homeopathy.module';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), HomeopathyModule, ],
  controllers: [AppController],
  providers: [PrismaService, AppService],

})
export class AppModule { }
