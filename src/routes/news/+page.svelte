<script lang="ts">
	import Page from '$lib/components/page.svelte'
	import Card from '$lib/components/card.svelte'
	import newsJson from '$content/news.json'
	import { pageCount } from '../../store'
	import ArrowButton from '$lib/components/arrow_button.svelte'
	import { writable } from 'svelte/store'

	const maxContentLength = 200
	const pageLength = 10
	const pageEnd = Math.floor(newsJson.length / pageLength)
	$: currentPage = writable<number>($pageCount.news)
	$: newsList = newsJson.slice($currentPage * pageLength, ($currentPage + 1) * pageLength)
</script>

<Page title="news">
	{#each newsList as news}
		<Card title={news.title} date={new Date(news.date)}>
			{news.content.length > maxContentLength
				? news.content.slice(0, maxContentLength) + '...'
				: news.content}
		</Card>
	{/each}
	<ArrowButton {currentPage} {pageEnd} />
</Page>
