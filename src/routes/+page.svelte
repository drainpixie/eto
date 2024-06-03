<script>
	let url = "";
	let extra = "";

	function typewrite() {
		if (extra.length < 3) extra += ".";
		else if (!extra.endsWith("?")) extra += "?";
		else clearInterval(typewriteInterval);
	}

	const typewriteInterval = setInterval(typewrite, 500);
</script>

<main>
	<h1 class="highlight">
		Eto{extra}
	</h1>

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

	<div class="links">
		<!-- a href="?/list">List links</a> &middot; -->
		<a href="?/delete">Delete a link</a> &middot;
		<a
			href="https://github.com/drainpixie/eto"
			target="_blank"
			rel="noopener noreferrer">Eto source</a
		>
	</div>
</main>
