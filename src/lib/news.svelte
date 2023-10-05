<script lang="ts">
	import Section from '$lib/components/section.svelte'
	import Card from '$lib/components/card.svelte'
	import MoreButton from './components/more_button.svelte'
	import { news } from '../store'

	const newsList = $news.slice(0, 3)
	const maxContentLength = 200
</script>

<Section title="news">
	{#each newsList as news, index}
		<Card title={news.title ?? ''} date={new Date(news.date ?? '')} href={`/news/${index}`}>
			{(news.content ?? '').length > maxContentLength
				? news.content?.slice(0, maxContentLength) + '...'
				: news.content}
		</Card>
	{/each}
	<MoreButton href="/news" />
</Section>
