import { error, redirect } from "@sveltejs/kit";
import { find } from "../../lib/server/url";

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ params }) => {
  const hash = await find(params.slug);
  if (hash.url) return redirect(307, hash.url);

  error(404, "Page or Resource not found");
};
