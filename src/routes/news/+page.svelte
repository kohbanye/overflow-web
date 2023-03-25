<script>
	import '@fontsource/fascinate-inline'
	import { format } from 'date-fns'

	import Page from '$lib/components/page.svelte'
	import NewsList from '$content/news.json'
</script>

<Page title="news">
	<div class="container">
		{#each NewsList as news}
			<div class="news">
				<div class="date">{format(new Date(news.date), 'yyyy年M月d日')}</div>
				<div class="title">{news.title}</div>
				<div class="content">{news.content}</div>
			</div>
		{/each}
	</div>
</Page>

<style lang="scss">
	.container {
		padding: 1rem 2rem;
	}
	.news {
		display: flex;
		flex-direction: column;
		color: white;
		margin-bottom: 2rem;
	}
	.title {
		font-size: x-large;
		font-weight: 600;
	}
</style>
