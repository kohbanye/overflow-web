<script lang="ts">
	import { onMount } from 'svelte'
	import { scrollPosition } from '../../store'

	export let title: string

	let divRef: HTMLDivElement
	const onResize = () => {
		scrollPosition.set({ ...$scrollPosition, [title]: divRef.offsetTop })
	}
	onMount(() => {
		// offsetTop looks a little off when onMount
		scrollPosition.set({ ...$scrollPosition, [title]: divRef.offsetTop - 24 })
	})
</script>

<svelte:window on:resize={onResize} />
<div class="container" bind:this={divRef}>
	<div class="title">{title.toUpperCase()}</div>
	<slot />
</div>

<style lang="scss">
	@use '$styles/variables' as *;

	.container {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		width: 100%;
		padding: 0 15rem;
		margin-bottom: 10rem;
	}
	.title {
		font-family: $font-section-title;
		font-size: 3rem;
		color: white;
		margin-bottom: 1rem;
	}

	@media (max-width: 1024px) {
		.container {
			padding: 0 5rem;
		}
	}
	@media (max-width: 768px) {
		.container {
			padding: 0 2rem;
		}
	}
</style>
