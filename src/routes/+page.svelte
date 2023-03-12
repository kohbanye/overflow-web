<script lang="ts">
	import '@fontsource/fascinate-inline'
	import News from '$lib/news.svelte'
</script>

<div class="container">
	<img class="logo" src="logo.png" alt="logo" />
	<News />
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background-image: url('background.jpg');
		background-size: cover;
	}
	.logo {
		width: 60%;
		max-width: 25rem;
	}
</style>
