import { redis, URL_KEY } from "./redis";
import { randomUUID, randomBytes } from "node:crypto";

// TODO: Maybe hash, maybe not, I don't think
//			 we really need that much security here.
const generateKey = (length = 16) =>
  randomBytes(Math.ceil(length / 2))
    .toString("hex")
    .slice(0, length);

const shorten = async (url) => {
  const slug = randomUUID().slice(0, 6);
  const key = `${URL_KEY}:${slug}`;
  const data = {
    url,
    slug,
    visits: 0,
    createdAt: Date.now(),
    key: generateKey(),
  };

  const exists = await redis.exists(key);
  if (exists) return shorten(url); // WARNING: Maybe just error out?

  return redis
    .hset(key, data)
    .then(() => ({ data, status: 200, success: true }))
    .catch((error) => ({ error: error.message, status: 500, success: false }));
};

const remove = async (slug, key) => {
  const url = await find(slug);

  if (!url.success)
    return { success: false, status: 404, error: "Resource not found" };

  if (url.data.key !== key)
    return { success: false, status: 401, error: "Unauthorized" };

  return redis
    .del(`${URL_KEY}:${slug}`)
    .then(() => ({ success: true, status: 200 }))
    .catch((error) => ({ success: false, status: 500, error: error.message }));
};

const find = async (slug) => {
  const match = await redis
    .hgetall(`${URL_KEY}:${slug}`)
    .catch((error) => ({ error: error.message, status: 500, success: false }));

  if (!match.url)
    return { success: false, status: 404, error: "Resource not found" };

  if (match.error) return match;

  return { data: match, status: 200, success: true };
};

export { shorten, find, remove };
