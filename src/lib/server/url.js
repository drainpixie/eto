import { redis, URL_KEY } from "./redis";
import { randomUUID } from "node:crypto";

export async function shorten(url) {
  const slug = randomUUID();
  const key = `${URL_KEY}:${slug}`;

  const data = { url, slug, visits: 0, createdAt: Date.now() };

  try {
    await redis.hset(key, data);
    return { data, success: true };
  } catch (error) {
    return { error, success: false };
  }
}

export async function find(slug) {
  const key = `${URL_KEY}:${slug}`;

  try {
    const data = await redis.hgetall(key);
    data.visits = Number(data.visits);

    return { data, success: true };
  } catch (error) {
    return { error, success: false };
  }
}
