<script lang="ts">
	import Section from '$lib/components/section.svelte'
	import discographyList from '$content/discography.json'
</script>

<Section title="discography">
	{#each discographyList as discography, i}
		<div class="container">
			<div class="description {i % 2 == 0 ? 'even' : 'odd'}">
				<div class="label">{discography.label}</div>
				<a class="link" href={discography.url} target="_blank" rel="noreferrer">
					<div class="title">{discography.title}</div>
				</a>
			</div>
			<a href={discography.url} target="_blank" rel="noreferrer">
				<img src={`${discography.image}`} alt="cover" class="image" />
			</a>
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
		transition: opacity 0.2s;
		&:hover {
			opacity: 0.9;
		}
	}
	.description {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: white;
		width: 20%;
		&.even {
			order: 1;
			margin-left: 3rem;
		}
		&.odd {
			margin-right: 3rem;
		}
	}
	.label {
		white-space: nowrap;
	}
	.link {
		color: white;
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
	}
	.title {
		font-size: larger;
		font-weight: 600;
	}

	@media (max-width: 768px) {
		.container {
			flex-direction: column;
			margin: 1rem 0;
		}
		.description {
			display: none;
		}
	}
</style>
