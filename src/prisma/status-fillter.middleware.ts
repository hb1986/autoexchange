// An example of such a middleware.
import { Prisma } from "@prisma/client";


export default function StatusFilterMiddleware<
  T extends Prisma.BatchPayload = Prisma.BatchPayload
>(): Prisma.Middleware {
  return async (
    params: Prisma.MiddlewareParams,
    next: (params: Prisma.MiddlewareParams) => Promise<T>
  ): Promise<T> => {


    const result = await next(params);

    return result;
  };
}
