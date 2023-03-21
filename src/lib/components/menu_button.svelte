<script lang="ts">
	import { isNavbarOpen } from '../../store'

	const onClick = () => {
		isNavbarOpen.update((isOpen) => !isOpen)
	}
	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			isNavbarOpen.set(false)
		}
	}
</script>

<div on:click={onClick} on:keydown={handleKeyDown} class="button">
	<span class="top {$isNavbarOpen && 'active'}" />
	<span class="center {$isNavbarOpen && 'active'}" />
	<span class="bottom {$isNavbarOpen && 'active'}" />
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
		z-index: 3;
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
