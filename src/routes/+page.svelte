<script>
	let url = "";
</script>

<main>
	<h1>🍡 えと</h1>

	<div>
		<form action="?/shorten" method="post">
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
</main>
