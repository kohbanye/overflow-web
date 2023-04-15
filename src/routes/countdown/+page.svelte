<script lang="ts">
	import { format, intervalToDuration } from 'date-fns'
	import { ja } from 'date-fns/locale/index.js'
	import { onDestroy } from 'svelte'
	import { goto } from '$app/navigation'
	import { releaseDate } from '$lib/constants'
	import { browser } from '$app/environment'

	let now: Date = new Date()
	const interval = setInterval(() => {
		now = new Date()
	}, 100)

	$: remainingTime = intervalToDuration({
		start: now,
		end: releaseDate
	})
	const formatDuration = (duration: Duration) => {
		return (
      duration.days?.toString().padStart(2, '0') +
      ':' +
			duration.hours?.toString().padStart(2, '0') +
			':' +
			duration.minutes?.toString().padStart(2, '0') +
			':' +
			duration.seconds?.toString().padStart(2, '0')
		)
	}

	$: {
		if (releaseDate <= now) {
			clearInterval(interval)
			if (browser) {
				goto('/')
			}
		}
	}

	onDestroy(() => {
		clearInterval(interval)
	})
</script>

<div class="container">
	<div class="message">
		<div>Overflow公式Webサイト</div>
		<div>{format(releaseDate, 'M月dd日', { locale: ja })} 公開</div>
	</div>
	<div class="countdown">
		{formatDuration(remainingTime)}
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
	.message {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		font-size: 2rem;
		font-weight: 600;
		color: white;
		margin-bottom: 1rem;
	}
	.countdown {
		font-family: monospace;
		font-size: 5rem;
		font-weight: 600;
		text-shadow: 0 0 0.5rem white;
		color: white;
	}

	@media screen and (max-width: 768px) {
		.message {
			flex-direction: column;
			gap: 0;
			font-size: 1.5rem;
      margin-bottom: 0;
		}
		.countdown {
			font-size: 3.5rem;
		}
	}
</style>
