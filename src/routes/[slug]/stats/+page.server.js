import { error } from "@sveltejs/kit";
import { find } from "$lib/server/url";

/** @type {import('@sveltejs/kit').ServerLoad} */
export async function load({ params }) {
  const hash = await find(params.slug);
  if (!hash.success) return error(hash.status, hash.error);

  return hash;
};
