<script>
	import { enhance } from "$app/forms";
	import { page } from "$app/stores";

	/** @type {import("./$types").ActionData} */
	export let form;

	let url = "";
	$: baseURL = `${$page.url.protocol}//${$page.url.host}`;
</script>

<div>
	<form action="?/shorten" method="post" use:enhance>
		<input
			type="url"
			name="url"
			placeholder="https://example.com"
			autocomplete="off"
			required
			bind:value={url}
		/>
		<button type="submit">🍡</button>
	</form>
</div>

<div class="links">
	<a href="/delete">Delete a link</a> &middot;
	<a
		href="https://github.com/drainpixie/eto"
		target="_blank"
		rel="noopener noreferrer">Eto source</a
	>
</div>

{#if form?.success}
	<div class="message">
		<p>
			Your URL
			<span class="highlight"
				><a
					href="{baseURL}/{form.data.slug}"
					target="_blank"
					rel="noopener noreferrer"
				>
					{baseURL}/{form.data.slug}
				</a></span
			>
		</p>
		<p>
			Management key (delete) <span class="highlight">{form.data.key}</span>.
		</p>
	</div>
{/if}
