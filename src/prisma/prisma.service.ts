import {
    INestApplication,
    Injectable,
    OnModuleInit,
    OnModuleDestroy,
  } from "@nestjs/common";
  import { PrismaClient } from "@prisma/client";
  import { IS_DEV } from "src/config/configuration";
  import StatusFilterMiddleware from "./status-fillter.middleware";
  
  @Injectable()
  export class PrismaService extends PrismaClient implements OnModuleInit {
    constructor() {
      super({
        log: IS_DEV ? ["query"] : undefined,
      });
  
      // this.$use(StatusFilterMiddleware());
    }
    async onModuleInit() {
      await this.$connect();
    }
  
    async enableShutdownHooks(app: INestApplication) {
      this.$on("beforeExit", async () => {
        await app.close();
      });
    }
  }