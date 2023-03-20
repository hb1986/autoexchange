import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";
import { ValidationPipe } from "@nestjs/common";
// api文档插件
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { ValidationPipeMiddleware } from "./middlewares/validator.middleware";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.setGlobalPrefix("api/v1");

  app.useGlobalPipes(new ValidationPipeMiddleware()); //开启一个全局验证管道

  const origin = configService.get("corsOrigin");
  // const allowedHeaders = Object.values(
  //   configService.get<{ [key: string]: string }>("headers")
  // );

  app.enableCors({
    maxAge: 24 * 3600, // 24 hours
    origin,
    credentials: true,
    allowedHeaders: ["content-type", "Authorization"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  });

  const options = new DocumentBuilder()
    .setTitle("daidai 接口文档")
    .setDescription("daidai 系统接口文档") // 文档介绍
    .setVersion("1.0.0") // 文档版本
    .build();
  // 为了创建完整的文档（具有定义的HTTP路由），我们使用类的createDocument()方法SwaggerModule。
  // 此方法带有两个参数，分别是应用程序实例和基本Swagger选项。
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("/docs", app, document);

  const PORT = configService.get("PORT");
  await app.listen(PORT);

  console.log("Application is running on:", PORT);
}

bootstrap();
