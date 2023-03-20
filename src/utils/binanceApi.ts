import configcFunc from "../config/configuration";

const CONFIG = configcFunc();
const api_key=CONFIG.api_key;
const Binance = require('node-binance-api');

export  function binance() {
    return new Binance().options({
        APIKEY: api_key.API,
        APISECRET: api_key.Secret
      });
  };