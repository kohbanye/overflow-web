<script lang="ts">
	import Section from '$lib/components/section.svelte'

	const aboutString =
		'2022年3月に結成。 ジャンルやスタイルに捉われない音楽性は、多方面で活動してきた細野陸帆(Vo.)、Zacky(Gt.)、ナカツa.k.aツギ(Ba.)、丸山隼矢(Key.)、田嶋悠人(Dr.)それぞれの個性が混ざり合って生み出されたOverflow独自の音楽である。'
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
		// TODO: make this responsive
		width: 100vw;
	}
</style>
