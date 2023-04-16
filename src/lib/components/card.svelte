<script lang="ts">
	import { goto } from '$app/navigation'
	import { format } from 'date-fns'
	import { ja } from 'date-fns/locale/index.js'

	export let title: string
	export let date: Date
	export let dateSize: string = 'small'
	export let dateFormat: string = 'yyyy/MM/dd'
	export let href: string | null = null
	export let individual: boolean = false

	const handleClick = () => {
		if (href === null || individual) return
		goto(href)
	}
</script>

<div on:click={handleClick} on:keydown={() => {}} class="container {individual && 'individual'}">
	<div class="header">
		<div class="title">{title}</div>
		<div class="date" style="font-size: {dateSize};">
			{format(date, dateFormat, { locale: ja })}
		</div>
	</div>
	<div class="content {individual && 'indivisual-conntent'}">
		<slot />
	</div>
</div>

<style lang="scss">
	@use '$styles/variables' as *;

	.container {
		background-color: white;
		border-radius: 0.25rem;
		padding: 0.75rem 1.5rem;
		box-shadow: 6px 4px 10px rgba(0, 0, 0, 0.25);
		margin-bottom: 1rem;
		cursor: pointer;
		transition: transform 0.1s ease-in-out;
		&:hover {
			background-color: $white-hover;
			transform: translate(1px, 1px);
		}
	}
	.individual {
		cursor: default;
		&:hover {
			background-color: white;
			transform: none;
		}
	}
	.header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		word-break: break-all;
		margin-bottom: 0.5rem;
	}
	.title {
		font-weight: bold;
		font-size: large;
		margin-right: 0.5rem;
	}
	.date {
		word-break: keep-all;
	}
	.content {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
	}
	.indivisual-conntent {
		white-space: pre-wrap;
		-webkit-line-clamp: unset;
	}

	@media (max-width: 768px) {
		.container {
			padding: 0.5rem 1rem;
		}
		.header {
			flex-direction: column-reverse;
			align-items: flex-start;
			margin-bottom: 0;
		}
		.title {
			font-size: medium;
		}
		.content {
			font-size: small;
		}
		.indivisual-conntent {
			font-size: medium;
		}
	}
</style>
