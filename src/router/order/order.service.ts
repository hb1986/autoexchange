import { Injectable } from "@nestjs/common";
import configcFunc from "../../config/configuration";
import { InjectRedis, Redis } from "@nestjs-modules/ioredis";


@Injectable()
export class OrderService {
  constructor() {}

  /**
   * 随机选择一个key
   */
  randomApiKey() {
    //return CONFIG.openai.apikey[Math.floor(Math.random() * CONFIG.openai.apikey.length)];
  }



}