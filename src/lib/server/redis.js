import Redis from "ioredis";

const REDIS = new Redis(); // 0.0.0.0:6379
const URL_KEY = "eto_url";

export { REDIS, URL_KEY };
