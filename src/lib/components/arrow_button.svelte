<script lang="ts">
	import arrowLeft from '$lib/icons/arrow_circle_left.svg'
	import arrowRight from '$lib/icons/arrow_circle_right.svg'
	import type { Writable } from 'svelte/store'

	export let pageEnd: number
	export let currentPage: Writable<number>

	const changePage = (direction: 'prev' | 'next') => {
		if (direction === 'prev') {
      if ($currentPage === 0) return
			currentPage.update((value) => value - 1)
		} else {
      if ($currentPage === pageEnd) return
			currentPage.update((value) => value + 1)
		}
		window.scrollTo(0, 0)
	}
</script>

<div class="container">
	<button class="button {$currentPage === 0 && 'disabled'}" on:click={() => changePage('prev')}>
		<img class="icon" src={arrowLeft} alt="arrow" />
		<div class="text">Prev</div>
	</button>
	<button
		class="button {$currentPage === pageEnd && 'disabled'}"
		on:click={() => changePage('next')}
	>
		<div class="text">Next</div>
		<img class="icon" src={arrowRight} alt="arrow" />
	</button>
</div>

<style lang="scss">
	.container {
		display: flex;
		justify-content: center;
		gap: 5rem;
		padding: 1rem;
	}
	.text {
		color: white;
		font-weight: 600;
		font-size: large;
	}
	.icon {
		width: 2.5rem;
		height: 2.5rem;
		transition: transform 0.2s;
		&:hover {
			transform: scale(1.1);
			.disabled & {
				transform: scale(1);
			}
		}
	}
	.button {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
	}
	.disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>
