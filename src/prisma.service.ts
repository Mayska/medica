import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {

    async onModuleInit(): Promise<any> {
        return await this.$connect()
    }

    async onModuleDestroy(): Promise<any> {
        return await this.$disconnect()
    }


}