<script>
	/** @type {import('./$types').PageData} */
	export let data;
	$: page = data.data;

	const time = (timestamp) =>
		new Date(parseInt(timestamp))
			.toLocaleString("en-US", {
				month: "numeric",
				day: "numeric",
				year: "numeric",
				hour: "numeric",
				minute: "numeric",
				second: "numeric",
				hour12: true,
			})
			.replace(",", " at");
</script>

<svelte:head>
	<title>{page.slug} stats</title>
	<meta
		name="description"
		content="{page.slug} has been visited {page.visits} times and leads to {page.url}"
	/>
</svelte:head>

<p>
	<span class="highlight">{page.slug}</span> has been created the
	<span class="highlight">{time(page.createdAt)}</span>
</p>
<p>
	and has been visited <span class="highlight">{page.visits}</span> time(s).
</p>
