<script lang="ts">
	import Section from '$lib/components/section.svelte'
	import Card from '$lib/components/card.svelte'
	import MoreButton from './components/more_button.svelte'
	import newsList from '$content/news.json'
</script>

<Section title="News">
	{#each newsList as news}
		<div class="card">
			<Card title={news.title} date={news.date}>
				{news.content}
			</Card>
		</div>
	{/each}
	<MoreButton href="/news" />
</Section>

<style lang="scss">
	.card {
		margin-bottom: 1rem;
	}
</style>
