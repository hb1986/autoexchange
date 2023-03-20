import { ValidationPipe, ValidationPipeOptions } from "@nestjs/common";
import { registerDecorator, ValidationArguments } from "class-validator";
import { IS_PROD } from "src/config/configuration";
import { isAddress } from "nestjs-ethers";
import configcFunc from "src/config/configuration";
const CONFIG = configcFunc();

export class ValidationPipeMiddleware extends ValidationPipe {
  constructor(options?: ValidationPipeOptions) {
    const defaultOptions = {
      disableErrorMessages: IS_PROD,
      transform: true,
      whitelist: true,
    };
    const opt = options ? { ...defaultOptions, ...options } : defaultOptions;
    super(opt);
  }
}

export function IsAddress(validationOptions?: ValidationPipeOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isAddress",
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return typeof value === "string" && isAddress(value);
        },
        defaultMessage() {
          return `${propertyName} must be a valid ethers address`;
        },
      },
    });
  };
}

