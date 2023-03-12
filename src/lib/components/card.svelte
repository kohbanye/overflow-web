<script lang="ts">
	export let title: string
	export let date: string
</script>

<div class="container">
	<div class="header">
		<div class="title">{title}</div>
		<div class="date">{date}</div>
	</div>
	<slot />
</div>

<style lang="scss">
	@use '$styles/variables' as *;

	.container {
		background-color: white;
		border-radius: 0.25rem;
		padding: 1rem 2rem;
		box-shadow: 6px 4px 10px rgba(0, 0, 0, 0.25);
		cursor: pointer;
		transition: transform 0.1s ease-in-out;
		&:hover {
			background-color: $white-hover;
			transform: translate(1px, 1px);
		}
	}
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		word-break: break-all;
		margin-bottom: 0.5rem;
	}
	.title {
		font-weight: bold;
		font-size: large;
		margin-right: 0.5rem;
	}
	.date {
		font-size: small;
		word-break: keep-all;
	}
</style>
