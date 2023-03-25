<script lang="ts">
	import Section from '$lib/components/section.svelte'
	import Card from '$lib/components/card.svelte'
	import liveJson from '$content/live.json'
	import MoreButton from './components/more_button.svelte'

	const liveList = liveJson.slice(0, 3)
	const maxDescriptionLength = 200
</script>

<Section title="live">
	{#each liveList as live}
		<Card title={live.title} date={new Date(live.date)} dateSize="large" dateFormat="M月d日 (E)">
			{live.description.length > maxDescriptionLength
				? live.description.slice(0, maxDescriptionLength) + '...'
				: live.description}
		</Card>
	{/each}
	<MoreButton href="/live" />
</Section>
