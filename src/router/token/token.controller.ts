import { Body, Controller, Get, Post, Query, Request } from "@nestjs/common";
import { ApiHeaders, ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";
import configcFunc from "../../config/configuration";
import { TokenService } from "./token.service";
import { TokenDto } from "./token.dto";

const CONFIG = configcFunc();

@ApiTags("Token")
@Controller("Token")
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @ApiOperation({ summary: "translate text" })
  @Post("translateText")
  async translateText(@Body() dto: TokenDto) {
    //return await this.aiService.translateText(dto.text, dto.language);
  }

  @ApiOperation({ summary: "translate postNft" })
  @Get("getAll")
  async getAll() {
    
    const tokens = await this.tokenService.getAll();
    return {
        tokenCnt:tokens.length,
        tokens
    }
  }
}
