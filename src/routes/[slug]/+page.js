import { error, redirect } from "@sveltejs/kit";

import { find } from "$lib/server/url";
import { REDIS, URL_KEY } from "$lib/server/redis";
import { StatusCodes } from "http-status-codes";

/** @type {import('@sveltejs/kit').Load} */
export async function load({ params }) {
  const hash = await find(params.slug);
  if (!hash.success) return error(hash.status, hash.error);

  await REDIS.hincrby(`${URL_KEY}:${params.slug}`, "visits", 1);
  return redirect(StatusCodes.TEMPORARY_REDIRECT, hash.data.url);
}