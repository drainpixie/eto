import { error, redirect } from "@sveltejs/kit";
import { find } from "../../lib/server/url";

export const load = async ({ params }) => {
  const url = await find(params.slug);
  if (url) return redirect(307, url);

  error(404, "Page or Resource not found");
};
