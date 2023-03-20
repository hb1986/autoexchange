import { Body, Controller, Post, Query, Request } from "@nestjs/common";
import { ApiHeaders, ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";
import configcFunc from "../../config/configuration";
import { OrderService } from "./order.service";
import { OrderDto } from "./order.dto";

const CONFIG = configcFunc();

@ApiTags("Order")
@Controller("order")
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @ApiOperation({ summary: "translate text" })
  @Post("translateText")
  async translateText(@Body() dto: OrderDto) {
    //return await this.aiService.translateText(dto.text, dto.language);
  }

  @ApiOperation({ summary: "translate postNft" })
  @Post("translatePostNft")
  async translatePostNft(@Query("postNftId") postNftId: string, @Query("language") language: string, @Request() req) {
    
    //return await this.aiService.translatePostNft(postNftId, language);
  }
}
