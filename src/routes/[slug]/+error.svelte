<script>
	import { page } from "$app/stores";
</script>

<div>
	<p><span class="highlight">{$page.status}</span></p>
	<p>{$page.error.message}</p>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
