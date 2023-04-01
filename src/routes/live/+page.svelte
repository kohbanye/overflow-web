<script lang="ts">
	import Page from '$lib/components/page.svelte'
	import Card from '$lib/components/card.svelte'
	import liveJson from '$content/live.json'
	import { pageCount } from '../../store'
	import ArrowButton from '$lib/components/arrow_button.svelte'
	import { writable } from 'svelte/store'

	const maxContentLength = 200
	const pageLength = 10
	const pageEnd = Math.floor(liveJson.length / pageLength)
	$: currentPage = writable<number>($pageCount.news)
	$: liveList = liveJson.slice($currentPage * pageLength, ($currentPage + 1) * pageLength)
</script>

<Page title="live">
	{#each liveList as live}
		<Card title={live.title} date={new Date(live.date)}>
			{live.description.length > maxContentLength
				? live.description.slice(0, maxContentLength) + '...'
				: live.description}
		</Card>
	{/each}
	<ArrowButton {currentPage} {pageEnd} />
</Page>
