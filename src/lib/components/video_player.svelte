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
	$video-width: 60vw;
	$ratio: math.div(9, 16);
	.video {
		width: $video-width;
		height: calc($video-width * $ratio);
	}

	@media (max-width: 768px) {
		$video-width: 75vw;
		.video {
			width: $video-width;
			height: calc($video-width * $ratio);
		}
	}
</style>
