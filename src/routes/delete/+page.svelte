<script>
	import { enhance } from "$app/forms";

	/** @type {import("./$types").ActionData} */
	export let form;
</script>

<div class="inputs">
	<form action="?/delete" method="post" use:enhance>
		<input
			type="text"
			name="slug"
			placeholder="slug"
			autocomplete="off"
			required
		/>

		<input
			type="text"
			name="key"
			placeholder="key"
			autocomplete="off"
			required
		/>

		<button type="submit">🗑️</button>
	</form>
</div>

<div class="links">
	<a href="/">Shorten a link</a> &middot;
	<a
		href="https://github.com/drainpixie/eto"
		target="_blank"
		rel="noopener noreferrer">Eto source</a
	>
</div>

{#if form?.success}
	<div class="message">
		<p>URL has been deleted.</p>
	</div>
{:else if form?.error}
	<div class="message">
		<p>
			<span class="highlight">{form.error}<span />. </span>
		</p>
	</div>
{/if}

<style>
	.inputs > form {
		display: flex;
		flex-direction: column;
	}
</style>
