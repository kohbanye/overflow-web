<script lang="ts">
	import Section from '$lib/components/section.svelte'
	import discographyList from '$content/discography.json'
</script>

<Section title="DISCOGRAPHY">
	{#each discographyList as discography, i}
		<div class="container">
			{#if i % 2 === 0}
				<a href={discography.url} target="_blank" rel="noreferrer">
					<img src={`/content/images/${discography.image}`} alt="cover" class="image" />
				</a>
				<div class="description even">
					<div class="label">{discography.label}</div>
					<div class="title">{discography.title}</div>
				</div>
			{:else}
				<div class="description odd">
					<div class="label">{discography.label}</div>
					<div class="title">{discography.title}</div>
				</div>
				<a href={discography.url} target="_blank" rel="noreferrer">
					<img src={`/content/images/${discography.image}`} alt="cover" class="image" />
				</a>
			{/if}
		</div>
	{/each}
</Section>

<style lang="scss">
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 3rem 0;
	}
	.image {
		width: 100%;
		max-width: 30rem;
		min-width: 17.5rem;
	}
	.description {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: white;
		width: fit-content;
	}
	.even {
		margin-left: 10%;
	}
	.odd {
		margin-right: 10%;
	}
	.label {
		white-space: nowrap;
	}
	.title {
		font-size: larger;
		font-weight: 600;
	}
</style>
