import { Controller, Get, Headers, Param, Query, Request } from "@nestjs/common";
import { AppService } from "./app.service";
import { ApiHeaders, ApiOperation, ApiParam, ApiQuery, ApiTags } from "@nestjs/swagger";

@ApiTags("app")
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


}
