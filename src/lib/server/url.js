import { redis, URL_KEY } from "./redis";

import { fail, json } from "@sveltejs/kit";
import { randomUUID } from "node:crypto";

export async function shorten(url) {
  const slug = randomUUID();
  const key = `${URL_KEY}:${slug}`;

  return redis.set(key, url);
  /*try {
    await redis.set(key, url);
    return json({ slug, url });
  } catch (error) {
    return fail(500, { error: "Failed to shorten URL" });
  }*/
}

export function find(slug) {
  const key = `${URL_KEY}:${slug}`;
  return redis.get(key);
  /*try {
    const url = await redis.get(key);

    if (url) return json({ slug, url });
    else return fail(404, { error: "URL not found" });
  } catch (error) {
    return fail(500, { error: "Failed to find URL" });
  }*/
}
