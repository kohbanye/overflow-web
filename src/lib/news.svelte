<script lang="ts">
	import Section from '$lib/components/section.svelte'
	import Card from '$lib/components/card.svelte'
	import MoreButton from './components/more_button.svelte'
	import newsList from '$content/news.json'
</script>

<Section title="NEWS">
	{#each newsList as news}
		<Card title={news.title} date={new Date(news.date)}>
			{news.content}
		</Card>
	{/each}
	<MoreButton href="/news" />
</Section>
