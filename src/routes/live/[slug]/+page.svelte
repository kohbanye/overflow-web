<script lang="ts">
	import Card from '$lib/components/card.svelte'
	import Page from '$lib/components/page.svelte'

	export let data
</script>

<Page title="live">
	<Card
		title={data.live.title}
		date={new Date(data.live.date)}
		dateSize="medium"
		dateFormat="M月d日 (E)"
		individual
	>
		{data.live.description}
	</Card>
</Page>
