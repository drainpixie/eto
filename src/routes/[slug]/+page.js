import { error, redirect } from "@sveltejs/kit";
import { find, URL_KEY } from "../../lib/server/url";
import { redis } from "../../lib/server/redis";

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ params }) => {
  const hash = await find(params.slug);
  if (!hash.success) return error(404, "Page or resource not found");

  redis.hincrby(`${URL_KEY}:${params.slug}`, "visits", 1);
  return redirect(307, hash.data.url);
};
