

import { randomUUID, randomBytes } from "node:crypto";
import { REDIS, URL_KEY } from "./redis";


/**
 * Generate a random key. Not cryptographically secure.
 * @param {number} length The desired length of the key.
 * @returns {string} The generated key.
 */
function generateKey(length = 16) {
  return randomBytes(Math.ceil(length / 2))
    .toString("hex")
    .slice(0, length);
}
/**
 * Shorten a URL
 * @param {string} url The URL to shorten
 * @returns {Promise<object>} The result of the operation
 */
async function shorten(url) {
  let retries = 0;
  const MAX_RETRIES = 5; // Maximum attempts to generate a unique slug

  while (retries < MAX_RETRIES) {
    const slug = randomUUID().slice(0, 6);
    const redisKey = `${URL_KEY}:${slug}`;

    const exists = await REDIS.exists(redisKey);
    if (exists) {
      retries++;
      continue; // Try again with a new slug
    }

    const data = {
      url,
      slug,
      visits: 0,
      key: generateKey(),
      createdAt: Date.now(),
    };

    try {
      await REDIS.hmset(redisKey, data);
      return { data, status: StatusCodes.OK, success: true };
    } catch (error) {
      return { error: error.message, status: StatusCodes.INTERNAL_SERVER_ERROR, success: false };
    }
  }

  return { error: "Failed to generate a unique slug", status: StatusCodes.INTERNAL_SERVER_ERROR, success: false };
}

/**
 * Remove a shortened URL
 * @param {string} slug The slug of the URL to remove
 * @param {string} key The key to authorize the removal
 * @returns {Promise<object>} The result of the operation
 */
async function remove(slug, key) {
  const url = await find(slug);

  if (!url.success)
    return { success: false, status: StatusCodes.NOT_FOUND, error: ERROR_MESSAGES.NOT_FOUND };
  

  if (url.data.key !== key) 
    return { success: false, status: StatusCodes.UNAUTHORIZED, error: ERROR_MESSAGES.UNAUTHORIZED };
  

  try {
    await REDIS.del(`${URL_KEY}:${slug}`);
    return { success: true, status: StatusCodes.OK };
  } catch (error) {
    return { success: false, status: StatusCodes.INTERNAL_SERVER_ERROR, error: error.message };
  }
}


/**
 * Find a shortened URL
 * @param {string} slug The slug of the URL to find
 * @returns {Promise<object>} The result of the operation
 */
async function find(slug) {
  try {
    const match = await REDIS.hgetall(`${URL_KEY}:${slug}`);

    if (!match.url) 
      return { success: false, status: StatusCodes.NOT_FOUND, error: ERROR_MESSAGES.NOT_FOUND };

    return { data: match, status: StatusCodes.OK, success: true };
  } catch (error) {
    return { error: error.message, status: StatusCodes.INTERNAL_SERVER_ERROR, success: false };
  }
}

export { shorten, find, remove };
