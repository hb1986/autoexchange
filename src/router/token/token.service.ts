import { Injectable } from "@nestjs/common";
import configcFunc from "../../config/configuration";
import {binance } from "../../utils/binanceApi"

const binanceClient =  binance();

@Injectable()
export class TokenService {
  constructor() {}

  /**
   * 随机选择一个key
   */
  async  getAll(){
    //return CONFIG.openai.apikey[Math.floor(Math.random() * CONFIG.openai.apikey.length)];

    const prices=await binanceClient.futuresPrices();
    const tokens =[];
   console.log(prices);
   

    return prices;
  }



}