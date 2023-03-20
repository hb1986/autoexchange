import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class AccountDto {
  @ApiProperty({
    example: "i am a duck",
    description: "content to translate",
  })
  @IsString()
  text: string;

  @ApiProperty({
    example: "zh_cn",
    description: "language to translate to",
  })
  @IsString()
  language: string;
}