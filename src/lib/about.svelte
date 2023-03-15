<script lang="ts">
	import Section from '$lib/components/section.svelte'

	const aboutString = `2022年3月に結成。\nジャンルやスタイルに捉われない音楽性は、多方面で活動してきた細野陸帆(Vo.)、Zacky(Gt.)、ナカツa.k.aツギ(Ba.)、丸山隼矢(Key.)、田嶋悠人(Dr.)それぞれの個性が混ざり合って生み出されたOverflow独自の音楽である。`
</script>

<Section title="ABOUT">
	<div class="container">
		<div class="description">{aboutString}</div>
		<img class="image" src="artist.jpg" alt="artist" />
	</div>
</Section>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.description {
		font-size: large;
		color: white;
		padding: 0.5rem 2rem;
		margin-bottom: 2rem;
		max-width: 60rem;
	}
	.image {
		width: 100vw;
	}

	@media screen and (min-width: 1024px) {
		.container {
			flex-direction: row;
			align-items: flex-start;
		}
		.description {
      white-space: pre-wrap;
			max-width: 17.5rem;
			padding: 0.5rem;
			margin-right: 0.5rem;
		}
		.image {
			width: 75%;
		}
	}
</style>
