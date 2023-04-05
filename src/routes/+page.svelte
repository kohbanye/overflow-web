<script lang="ts">
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
	import { beforeNavigate } from '$app/navigation'
	import { onMount } from 'svelte'

	let init = true

	const closeNavbar = () => {
		isNavbarOpen.set(false)
	}
	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			closeNavbar()
		}
	}

	onMount(() => {
		init = false
	})
	beforeNavigate(() => {
		isNavbarOpen.set(false)
	})
</script>

<svelte:window on:keydown={handleKeyDown} />
<div class="container">
	{#if $isNavbarOpen}
		<div on:click={closeNavbar} on:keydown={handleKeyDown} transition:fade={{ duration: 400 }} class="overlay" />
	{/if}
	{#if init}
		<div transition:fade={{ duration: 600 }} class="overlay" />
	{/if}
	<MenuButton />
	<Navbar />
	<div class="logo">
		<img class="logo-img" src="logo.png" alt="logo" />
	</div>
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
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		z-index: 0;
	}
	.logo-img {
		width: 90%;
		max-width: 40rem;
		margin: 15rem 0;

		animation-name: logoAppear, shiver;
		animation-duration: 2s, 0.25s;
		animation-delay: 0s, 1.5s;
		animation-iteration-count: 1, 4;
		animation-timing-function: ease-in-out, ease-in-out;
	}

	@keyframes logoAppear {
		from {
			opacity: 0;
			visibility: hidden;
		}
		to {
			opacity: 1;
			visibility: visible;
		}
	}
	@keyframes shiver {
		0%,
		100% {
			transform: rotate(0);
		}
		20% {
			transform: rotate(-5deg);
		}
		40% {
			transform: rotate(5deg);
		}
		60% {
			transform: rotate(-5deg);
		}
		80% {
			transform: rotate(5deg);
		}
	}
</style>
