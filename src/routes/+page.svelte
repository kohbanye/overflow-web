<script lang="ts">
	import '@fontsource/fascinate-inline'
	import MenuButton from '$lib/components/menu_button.svelte'
	import News from '$lib/news.svelte'
	import Live from '$lib/live.svelte'
	import Discography from '$lib/discography.svelte'
	import Video from '$lib/video.svelte'
	import About from '$lib/about.svelte'
	import Contact from '$lib/contact.svelte'
	import Footer from '$lib/footer.svelte'
</script>

<div class="container">
	<MenuButton />
	<img class="logo" src="logo.png" alt="logo" />
	<News />
	<Live />
	<Discography />
	<Video />
	<About />
	<Contact />
	<Footer />
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: linear-gradient(to left, transparent 85%, rgba(0, 0, 0, 0.4)),
			linear-gradient(to right, transparent 85%, rgba(0, 0, 0, 0.4)),
			linear-gradient(to top, transparent 90%, rgba(0, 0, 0, 0.4)),
			linear-gradient(to bottom, transparent 90%, rgba(0, 0, 0, 0.4)), url('/static/background.jpg');
		background-attachment: fixed;
		background-size: cover;
		overflow-x: hidden;
	}
	.logo {
		width: 75%;
		max-width: 30rem;
		margin: 15rem 0;
	}
</style>
