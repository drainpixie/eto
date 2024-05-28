import Redis from "ioredis";

const redis = new Redis(); // 0.0.0.0:6379
const URL_KEY = "eto_url";

export { redis, URL_KEY };
