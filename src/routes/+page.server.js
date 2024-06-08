import { shorten } from "../lib/server/url";

/** @type {import('@sveltejs/kit').Actions} */
export const actions = {
  shorten: async ({ request }) => {
    const data = await request.formData();
    const url = data.get("url");

    const res = await shorten(url);

    console.log(res);
    return res;
  },
};
