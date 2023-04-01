<script lang="ts">
	import home from '$lib/icons/home.svg'

	export let title: string
</script>

<div class="container">
	<a class="link" href="/" title="home">
		<img class="home" src={home} alt="home" />
	</a>
	<div class="title">{title.toUpperCase()}</div>
	<slot />
</div>

<style lang="scss">
	@use '$styles/variables' as *;

	.container {
		padding: 3rem 6rem;
	}
	.link {
		position: fixed;
		top: 1.5rem;
		right: 1.5rem;
		z-index: 1;
	}
	.home {
		filter: drop-shadow(0 0 0.25rem rgba(0, 0, 0, 0.8));
	}
	.title {
		font-family: $font-section-title;
		font-size: 3rem;
		color: white;
		margin-bottom: 1rem;
	}

	@media (max-width: 600px) {
		.container {
			padding: 3rem 2rem;
		}
		.link {
			top: 1rem;
			right: 1rem;
		}
	}
</style>
