import { redis, URL_KEY } from "./redis";

import { randomUUID } from "node:crypto";

export function shorten(url) {
  const slug = randomUUID();
  const key = `${URL_KEY}:${slug}`;

  return redis.set(key, url);
}

export function find(slug) {
  const key = `${URL_KEY}:${slug}`;
  return redis.get(key);
}
