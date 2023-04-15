<script lang="ts">
	import Section from '$lib/components/section.svelte'
	import { aboutString } from '$lib/constants'
</script>

<Section title="about">
	<div class="container">
		<div class="description">{aboutString}</div>
		<img class="image" src="artist.jpg" alt="artist" />
	</div>
</Section>

<style lang="scss">
	.container {
		display: flex;
		justify-content: center;
		align-items: flex-start;
	}
	.description {
		font-size: large;
		font-weight: 600;
		color: white;
		white-space: pre-wrap;
		max-width: 17.5rem;
		padding: 0.5rem;
		margin-right: 0.5rem;
	}
	.image {
		width: 75%;
	}

	@media screen and (max-width: 1320px) {
		.container {
			flex-direction: column;
			align-items: center;
		}
		.description {
			padding: 0;
			margin-bottom: 2rem;
			max-width: 60rem;
		}
		.image {
			width: 100vw;
		}
	}
</style>
