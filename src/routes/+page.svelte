<script lang="ts">
	import '@fontsource/fascinate-inline'
	import { fade } from 'svelte/transition'

	import MenuButton from '$lib/components/menu_button.svelte'
	import News from '$lib/news.svelte'
	import Live from '$lib/live.svelte'
	import Discography from '$lib/discography.svelte'
	import Video from '$lib/video.svelte'
	import About from '$lib/about.svelte'
	import Contact from '$lib/contact.svelte'
	import Footer from '$lib/footer.svelte'
	import Navbar from '$lib/components/navbar.svelte'
	import { isNavbarOpen } from '../store'
</script>

<div class="container">
	{#if $isNavbarOpen}
		<div transition:fade={{ duration: 400 }} class="overlay" />
	{/if}
	<MenuButton />
	<Navbar />
	<img class="logo" src="logo.png" alt="logo" />
	<News />
	<Live />
	<Discography />
	<Video />
	<About />
	<Contact />
	<Footer />
</div>

<style lang="scss">
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
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 1;
	}
	.logo {
		width: 75%;
		max-width: 30rem;
		margin: 15rem 0;
	}
</style>
