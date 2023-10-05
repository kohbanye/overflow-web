<script lang="ts">
	import Section from '$lib/components/section.svelte'
	import Card from '$lib/components/card.svelte'
	import MoreButton from './components/more_button.svelte'
	import { live } from '../store'

	const liveList = $live.slice(0, 3)
	const maxDescriptionLength = 200
</script>

<Section title="live">
	{#each liveList as live, index}
		<Card
			title={live.title ?? ''}
			date={new Date(live.date ?? '')}
			dateSize="medium"
			dateFormat="M月d日 (E)"
			href={`/live/${index}`}
		>
			{live.description !== null && live.description.length > maxDescriptionLength
				? live.description.slice(0, maxDescriptionLength) + '...'
				: live.description}
		</Card>
	{/each}
	<MoreButton href="/live" />
</Section>
