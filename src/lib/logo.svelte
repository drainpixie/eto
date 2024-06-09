<script>
	let extra = "";

	// 🍝 Best code ever
	const typewrite = () =>
		extra.length < 3
			? (extra += ".")
			: !extra.endsWith("?")
				? (extra += "?")
				: clearInterval(typewriteInterval);

	const typewriteInterval = setInterval(typewrite, 500);
</script>

<h1 class="highlight">Eto{extra}</h1>
