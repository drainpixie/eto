<script>
	import "../app.css";
	import Logo from "../lib/logo.svelte";
	import patchouli from "../lib/assets/patchouli.png";
</script>

<svelte:head>
	<title>Eto</title>
	<link
		rel="icon"
		href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍡</text></svg>"
	/>
	<meta name="description" content="a short and sweet, uh, url shortener" />
	<meta name="theme-color" content="#ffc0cb" />
</svelte:head>

<main>
	<Logo />

	<slot />

	<img id="patchouli" src={patchouli} alt="Patchouli Knowledge" />
</main>
