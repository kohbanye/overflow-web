<script lang="ts">
	import { format } from 'date-fns'
	import { ja } from 'date-fns/locale/index.js'

	export let title: string
	export let date: Date
	export let dateSize: string = 'small'
	export let dateFormat: string = 'yyyy/MM/dd'
</script>

<div class="container">
	<div class="header">
		<div class="title">{title}</div>
		<div class="date" style="font-size: {dateSize};">
			{format(date, dateFormat, { locale: ja })}
		</div>
	</div>
	<slot />
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
		word-break: keep-all;
	}
</style>
