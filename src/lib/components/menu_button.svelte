<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	export let isOpen = false

	interface EventTypes {
		open: void
		close: void
	}
	const dispatch = createEventDispatcher<EventTypes>()

	const onClick = () => {
		isOpen = !isOpen
		if (isOpen) {
			dispatch('open')
		} else {
			dispatch('close')
		}
	}
	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			isOpen = false
		}
	}
</script>

<div on:click={onClick} on:keydown={handleKeyDown} class="button">
	<span class="top {isOpen && 'active'}" />
	<span class="center {isOpen && 'active'}" />
	<span class="bottom {isOpen && 'active'}" />
</div>

<style lang="scss">
	$button-height: 3rem;
	$translate: calc($button-height / 3);

	.button {
    position: fixed;
    top: 1rem;
    right: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		height: $button-height;
		cursor: pointer;
	}
	.top,
	.center,
	.bottom {
		display: block;
		width: 2.5rem;
		height: 0.5rem;
		transition: all 0.3s;
		background-color: white;
		border-radius: 0.15rem;
	}
  .active {
    box-shadow: none;
  }
	.top.active {
		transform: translateY($translate) rotate(45deg);
	}
	.center.active {
		opacity: 0;
	}
	.bottom.active {
		transform: translateY(calc(-1 * $translate)) rotate(-45deg);
	}
</style>
