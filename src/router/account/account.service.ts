import { Injectable } from "@nestjs/common";

import { InjectRedis, Redis } from "@nestjs-modules/ioredis";

import {binance } from "../../utils/binanceApi"

const binanceClient =  binance();

@Injectable()
export class AccountService {
  constructor() {}

  /**
   * 随机选择一个key
   */
  randomApiKey() {
    //return CONFIG.openai.apikey[Math.floor(Math.random() * CONFIG.openai.apikey.length)];
  }



  /**
   * 随机选择一个key
   */
  async getBalance() {
   const balance=await binanceClient.futuresBalance();
   console.log(balance);
   

   if(balance){
   for( const asset of balance){
    if(asset.asset==="USDT"){
        return asset;
    }
   }
   }

   return null;
    
  }


}