<script lang="ts">
	export let title = 'Video'
	export let videoId: string
</script>

<div class="container">
	<iframe
		{title}
		src={`https://www.youtube.com/embed/${videoId}`}
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
		class="video"
	/>
</div>

<style lang="scss">
	@use 'sass:math';

	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.video {
		$video-width: max(60vw, 22.5rem);
		$ratio: math.div(9, 16);
		width: $video-width;
		height: calc($video-width * $ratio);
	}
</style>
