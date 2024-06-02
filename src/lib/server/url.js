import { redis, URL_KEY } from "./redis";
import { randomUUID } from "node:crypto";

export function shorten(url) {
  const slug = randomUUID();
  const key = `${URL_KEY}:${slug}`;

  return redis.hset(key, { url, slug, visits: 0, createdAt: Date.now() });
}

export function find(slug) {
  const key = `${URL_KEY}:${slug}`;
  return redis.hgetall(key);
}
