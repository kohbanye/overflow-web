<script lang="ts">
	import arrowLeft from '$lib/icons/arrow-left.svg'
	import arrowRight from '$lib/icons/arrow-right.svg'

	import videoList from '$content/video.json'
	import Section from '$lib/components/section.svelte'
	import VideoPlayer from './components/video_player.svelte'

	let videoRef: HTMLDivElement
	let videoIndex = 0

	const animationDuration = 500
	const animateVideo = (direction: 'left' | 'right') => {
		if (direction === 'left') {
			const animation = videoRef.animate(
				[
					{ transform: 'translateX(0)', opacity: 1 },
					{ transform: 'translateX(-100%)', opacity: 0 }
				],
				{
					duration: animationDuration,
					direction: 'alternate',
					easing: 'ease-in'
				}
			)
			animation.onfinish = () => {
				videoIndex = (videoIndex + 1) % videoList.length
			}
		} else {
			const animation = videoRef.animate(
				[
					{ transform: 'translateX(0)', opacity: 1 },
					{ transform: 'translateX(100%)', opacity: 0 }
				],
				{
					duration: animationDuration,
					direction: 'alternate',
					easing: 'ease-in'
				}
			)
			animation.onfinish = () => {
				videoIndex = (videoIndex - 1 + videoList.length) % videoList.length
			}
		}
	}
</script>

<Section title="video">
	<div class="container">
		<button on:click={() => animateVideo('left')} class="arrow-button">
			<img src={arrowLeft} alt="arrow-left" class="icon" />
		</button>
		<div class="video" bind:this={videoRef}>
			<VideoPlayer id={videoList[videoIndex].id} />
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
		padding: 2rem 1.5rem;
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

	@media (max-width: 768px) {
		.video {
			padding: 1rem 0;
		}
		.icon {
			width: 3.5rem;
			height: 3.5rem;
			margin: -1rem;
		}
	}
</style>
