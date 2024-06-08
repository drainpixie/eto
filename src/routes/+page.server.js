import { fail } from "@sveltejs/kit";
import { shorten } from "../lib/server/url";

/** @type {import('@sveltejs/kit').Actions} */
export const actions = {
  shorten: async ({ request }) => {
    const data = await request.formData();
    const url = data.get("url");

    const res = await shorten(url);

    if (res.success) return res;
    return fail(500, "Internal Server Error");
  },
};
