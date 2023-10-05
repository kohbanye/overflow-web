<script lang="ts">
	import arrowLeft from '$lib/icons/arrow-left.svg'
	import arrowRight from '$lib/icons/arrow-right.svg'

	import { videos } from '../store'
	import Section from '$lib/components/section.svelte'
	import VideoPlayer from './components/video_player.svelte'

	let videoIndex = 0
	const showArrow = $videos.length > 1

	const onClickArrow = (direction: 'left' | 'right') => {
		if (direction === 'left') {
			videoIndex = (videoIndex + 1) % $videos.length
		} else {
			videoIndex = (videoIndex - 1 + $videos.length) % $videos.length
		}
	}
</script>

<Section title="video">
	<div class="container">
		{#if showArrow}
			<button on:click={() => onClickArrow('left')} class="arrow-button">
				<img src={arrowLeft} alt="arrow-left" class="icon" />
			</button>
		{/if}
		<div class="video">
			<VideoPlayer id={$videos[videoIndex].youtube_id ?? ''} />
		</div>
		{#if showArrow}
			<button on:click={() => onClickArrow('right')} class="arrow-button">
				<img src={arrowRight} alt="arrow-right" class="icon" />
			</button>
		{/if}
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
