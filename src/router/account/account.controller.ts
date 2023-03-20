import { Body, Controller, Get, Post, Query, Request } from "@nestjs/common";
import { ApiHeaders, ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";
import configcFunc from "../../config/configuration";
import { AccountService } from "./account.service";
import { AccountDto } from "./account.dto";

const CONFIG = configcFunc();

@ApiTags("Account")
@Controller("account")
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @ApiOperation({ summary: "translate text" })
  @Post("translateText")
  async translateText(@Body() dto: AccountDto) {
    //return await this.aiService.translateText(dto.text, dto.language);
  }

  @ApiOperation({ summary: "translate postNft" })
  @Post("translatePostNft")
  async translatePostNft(@Query("postNftId") postNftId: string, @Query("language") language: string, @Request() req) {
    
    //return await this.aiService.translatePostNft(postNftId, language);
  }

  @ApiOperation({ summary: "get information" })
  @Get("info")
  async getInfo() {
    
    return await this.accountService.getBalance();
  }
}
