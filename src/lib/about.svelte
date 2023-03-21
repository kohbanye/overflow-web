<script lang="ts">
	import Section from '$lib/components/section.svelte'

	const aboutString = `2022年3月に結成。\nジャンルやスタイルに捉われない音楽性は、多方面で活動してきた細野陸帆(Vo.)、Zacky(Gt.)、ナカツa.k.aツギ(Ba.)、丸山隼矢(Key.)、田嶋悠人(Dr.)それぞれの個性が混ざり合って生み出されたOverflow独自の音楽である。`
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
		color: white;
		white-space: pre-wrap;
		max-width: 17.5rem;
		padding: 0.5rem;
		margin-right: 0.5rem;
	}
	.image {
		width: 75%;
	}

	@media screen and (max-width: 1280px) {
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
