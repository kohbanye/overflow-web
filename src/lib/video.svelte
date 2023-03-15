<script lang="ts">
	import arrowLeft from '$lib/icons/arrow-left.svg'
	import arrowRight from '$lib/icons/arrow-right.svg'

	import videoList from '$content/video.json'
	import Section from '$lib/components/section.svelte'
	import VideoPlayer from './components/video_player.svelte'

	let videoRef: HTMLDivElement
	let videoIndex = 0

	const animateVideo = (direction: 'left' | 'right') => {
		if (direction === 'left') {
			videoRef.animate(
				[
					{ transform: 'translateX(0)', opacity: 1 },
					{ transform: 'translateX(-100%)', opacity: 0 }
				],
				{
					duration: 500,
					direction: 'alternate',
					easing: 'ease-in'
				}
			)
			setTimeout(() => {
				videoIndex = (videoIndex + 1) % videoList.length
			}, 100)
		} else {
			videoRef.animate(
				[
					{ transform: 'translateX(0)', opacity: 1 },
					{ transform: 'translateX(100%)', opacity: 0 }
				],
				{
					duration: 500,
					direction: 'alternate',
					easing: 'ease-in'
				}
			)
			setTimeout(() => {
				videoIndex = (videoIndex - 1 + videoList.length) % videoList.length
			}, 100)
		}
	}
</script>

<Section title="VIDEO">
	<div class="container">
		<button on:click={() => animateVideo('left')} class="arrow-button">
			<img src={arrowLeft} alt="arrow-left" class="icon" />
		</button>
		<div class="video" bind:this={videoRef}>
			<VideoPlayer title={videoList[videoIndex].title} videoId={videoList[videoIndex].id} />
		</div>
		<button on:click={() => animateVideo('right')} class="arrow-button">
			<img src={arrowRight} alt="arrow-right" class="icon" />
		</button>
	</div>
</Section>

<style lang="scss">
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.video {
		//TODO: make this responsive
		padding: 2rem 4%;
	}
	.arrow-button {
		background: none;
		border: none;
		cursor: pointer;
		transition: transform 0.2s ease-in-out;
		&:hover {
			transform: scale(1.1);
		}
	}
	.icon {
		width: 5rem;
		height: 5rem;
		margin: -1.5rem;
	}
</style>
