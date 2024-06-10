import { fail } from "@sveltejs/kit";
import { shorten } from "$lib/server/url";

/** @type {import('@sveltejs/kit').Actions} */
export const actions = {
  shorten: async ({ request }) => {
    const data = await request.formData();

    const url = data.get("url");
    if (!url) return fail(400, { success: false, error: "URL is required" });

    return shorten(url);
  },
};
