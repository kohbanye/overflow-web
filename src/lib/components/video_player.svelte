<script lang="ts">
	import YouTube from 'svelte-youtube-embed'

	export let videoId: string
</script>

<div class="container">
	<div class="video">
		<YouTube id={videoId} />
	</div>
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
