

export const IS_DEV = process.env.NODE_ENV === "development";
export const IS_TEST = process.env.NODE_ENV === "test";
export const IS_PROD = !IS_DEV && !IS_TEST;


export function getEnvFilePath() {
    const arr = [".env"];
    if (IS_DEV) {
      arr.push(".env.development");
    }
    if (IS_TEST) {
      arr.push(".env.test");
    }
    if (IS_PROD) {
      arr.push(".env.production");
    }
    return arr;
  }


export default () => ({
    port: parseInt(process.env.PORT, 10) || 3030,
    database: {
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    },
    corsOrigin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(",") : [],
    prisma: {},
   
    session: {
      secret: "freefrom",
      maxAge: 24 * 3600 * 1000, // 24 hours
    },
   
  });
  