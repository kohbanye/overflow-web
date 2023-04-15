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
	import { isNavbarOpen, isInitialLoad } from '../store'
	import { beforeNavigate } from '$app/navigation'
	import { onMount } from 'svelte'

	const closeNavbar = () => {
		isNavbarOpen.set(false)
	}
	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			closeNavbar()
		}
	}

	let logoImgRef: HTMLImageElement
	const fadeKeyframes = [
		{ opacity: 0, visibility: 'hidden' },
		{ opacity: 1, visibility: 'visible' }
	]
	const fadeOptions: KeyframeAnimationOptions = {
		duration: 2000,
		fill: 'forwards',
		easing: 'ease-in-out'
	}
	const rotateKeyframes = [
		{ transform: 'rotate(0deg)' },
		{ transform: 'rotate(5deg)' },
		{ transform: 'rotate(-5deg)' },
		{ transform: 'rotate(5deg)' },
		{ transform: 'rotate(-5deg)' },
		{ transform: 'rotate(0deg)' }
	]
	const rotateOptions: KeyframeAnimationOptions = {
		duration: 250,
		iterations: 4,
		delay: 1500,
		fill: 'forwards',
		easing: 'linear'
	}

	onMount(() => {
		if ($isInitialLoad) {
			window.scrollTo(0, 0)

			document.body.style.overflowY = 'hidden'
			setTimeout(() => {
				document.body.style.overflowY = 'auto'
			}, 2500)
			logoImgRef.animate(fadeKeyframes, fadeOptions)
			logoImgRef.animate(rotateKeyframes, rotateOptions)
		}
		isInitialLoad.set(false)
		logoImgRef.style.visibility = 'visible'
	})
	beforeNavigate(() => {
		isNavbarOpen.set(false)
	})
</script>

<svelte:window on:keydown={handleKeyDown} />
<div class="container">
	{#if $isNavbarOpen}
		<div
			on:click={closeNavbar}
			on:keydown={handleKeyDown}
			transition:fade={{ duration: 400 }}
			class="overlay"
		/>
	{/if}
	{#if $isInitialLoad}
		<div
			transition:fade={{
				duration: 1000,
				delay: 2500
			}}
			class="overlay init"
		/>
	{/if}
	<MenuButton />
	<Navbar />
	<div class="logo">
		<img bind:this={logoImgRef} class="logo-img" src="logo.png" alt="logo" />
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
		background-color: rgba(black, 0.5);
		z-index: 1;
		&.init {
			z-index: -1;
		}
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
		visibility: hidden;
	}
</style>
