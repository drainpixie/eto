import { fail } from "@sveltejs/kit";
import { remove } from "$lib/server/url";

/** @type {import('@sveltejs/kit').Actions} */
export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();

    const slug = data.get("slug");
    if (!slug) return fail(400, { success: false, error: "Unauthorised" });

    const key = data.get("key");
    if (!key) return fail(400, { success: false, error: "Unauthorised" });

    return remove(slug, key);
  },
};
