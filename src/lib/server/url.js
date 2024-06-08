import { redis, URL_KEY } from "./redis";
import { randomUUID, randomBytes } from "node:crypto";

// TODO: Maybe hash, maybe not, I don't think
//			 we really need that much security here.
function generateKey(length = 16) {
  const bytes = randomBytes(Math.ceil(length / 2));
  return bytes.toString("hex").slice(0, length);
}

export async function shorten(url) {
  // TODO: Check for clashes, for now it's fine.
  const slug = randomUUID().slice(0, 6);
  const key = `${URL_KEY}:${slug}`;

  const data = {
    url,
    slug,
    visits: 0,
    createdAt: Date.now(),
    key: generateKey(),
  };

  try {
    await redis.hset(key, data);
    return { data, success: true };
  } catch (error) {
    return { error, success: false };
  }
}

export async function remove(slug, key) {
  const url = await find(slug);

  if (!url.success)
    return { success: false, status: 404, error: "Resource not found" };

  if (url.data.key !== key)
    return { success: false, status: 401, error: "Unauthorized" };

  await redis.del(`${URL_KEY}:${slug}`);
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
