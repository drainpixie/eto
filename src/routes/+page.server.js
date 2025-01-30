import { fail } from "@sveltejs/kit";
import { shorten } from "$lib/server/url";
import { StatusCodes } from "http-status-codes";

/** @type {import('@sveltejs/kit').Actions} */
export const actions = {
  shorten: async ({ request }) => {
    const data = await request.formData();

    const url = data.get("url");
    if (!url) return fail(StatusCodes.BAD_REQUEST, { success: false, error: "URL is required" });

    return shorten(url);
  },
};
