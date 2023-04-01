<script lang="ts">
	import Card from '$lib/components/card.svelte'
	import Page from '$lib/components/page.svelte'

	export let data
</script>

<Page title="news">
	<Card title={data.news.title} date={new Date(data.news.date)} individual>
		{data.news.content}
	</Card>
</Page>
