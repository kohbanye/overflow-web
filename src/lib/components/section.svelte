<script lang="ts">
	import { onMount } from 'svelte'
	import { scrollPosition } from '../../store'

	export let title: string

	let divRef: HTMLDivElement
	onMount(() => {
		scrollPosition.set({ ...$scrollPosition, [title]: divRef.offsetTop })
	})
</script>

<div class="container" bind:this={divRef}>
	<div class="title">{title.toUpperCase()}</div>
	<slot />
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		width: 80%;
		margin-bottom: 10rem;
	}
	.title {
		font-family: 'Fascinate Inline', cursive;
		font-size: 3rem;
		color: white;
		margin-bottom: 1rem;
	}
</style>
