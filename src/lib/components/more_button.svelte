<script lang="ts">
	import { goto } from '$app/navigation'

	const onClick = () => {
		goto(href)
	}

	export let href: string
</script>

<div class="container">
	<button class="button" on:click={onClick}>
		<div class="link">MORE...</div>
	</button>
</div>

<style lang="scss">
	@use '$styles/variables' as *;

	.container {
		display: flex;
		justify-content: flex-end;
	}
	.button {
		font-weight: 600;
		background-color: white;
		border-radius: 0.25rem;
		padding: 0.75rem 1.5rem;
		border: none;
		box-shadow: 6px 4px 10px rgba(0, 0, 0, 0.25);
		cursor: pointer;
		width: fit-content;
		transition: transform 0.1s ease-in-out;
		&:hover {
			background-color: $white-hover;
			transform: translate(1px, 1px);
		}
	}
	.link {
		text-decoration: none;
		color: black;
	}
</style>
