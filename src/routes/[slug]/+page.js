import { error, redirect } from "@sveltejs/kit";

import { find } from "$lib/server/url";
import { redis, URL_KEY } from "$lib/server/redis";

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ params }) => {
  const hash = await find(params.slug);
  if (!hash.success) return error(hash.status, hash.error);

  await redis.hincrby(`${URL_KEY}:${params.slug}`, "visits", 1);
  return redirect(307, hash.data.url);
};
