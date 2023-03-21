<script lang="ts">
	import Section from '$lib/components/section.svelte'
	import Card from '$lib/components/card.svelte'
	import liveList from '$content/live.json'
	import MoreButton from './components/more_button.svelte'
</script>

<Section title="live">
	{#each liveList as live}
		<Card title={live.title} date={new Date(live.date)} dateSize="large" dateFormat="M月d日 (E)">
			{live.description}
		</Card>
	{/each}
	<MoreButton href="/live" />
</Section>
