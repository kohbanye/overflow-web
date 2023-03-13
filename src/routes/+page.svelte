<script lang="ts">
	import '@fontsource/fascinate-inline'
	import News from '$lib/news.svelte'
	import Live from '$lib/live.svelte'
	import Discography from '$lib/discography.svelte'
</script>

<div class="container">
	<img class="logo" src="logo.png" alt="logo" />
	<News />
	<Live />
	<Discography />
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-image: url('background.jpg');
		background-attachment: fixed;
		background-size: cover;
		padding: 3rem 0;
	}
	.logo {
		width: 75%;
		max-width: 30rem;
		margin: 10rem 0;
	}
</style>
