<script lang="ts">
	import instagram from '$lib/icons/instagram.svg'
	import twitter from '$lib/icons/twitter.svg'
	import youtube from '$lib/icons/youtube.svg'
	import { scrollPosition } from '../../store'

	export let isOpen = false

	const scrollTo = (position: number) => {
		window.scrollTo({
			top: position,
			behavior: 'smooth'
		})
	}
</script>

<div class="container {isOpen && 'active'}">
	<div class="section-container">
		<div class="section"><a class="link" href="/news">NEWS</a></div>
		<div class="section"><a class="link" href="/live">LIVE</a></div>
		<div
			class="section"
			on:click={() => scrollTo($scrollPosition.discography)}
			on:keydown={() => {}}
		>
			DISCOGRAPHY
		</div>
		<div class="section" on:click={() => scrollTo($scrollPosition.video)} on:keydown={() => {}}>
			VIDEO
		</div>
		<div class="section" on:click={() => scrollTo($scrollPosition.about)} on:keydown={() => {}}>
			ABOUT
		</div>
		<div class="section" on:click={() => scrollTo($scrollPosition.contact)} on:keydown={() => {}}>
			CONTACT
		</div>
	</div>
	<div class="icon-container">
		<a href="https://www.instagram.com/overflow_oflo">
			<img class="icon" src={instagram} alt="instagram" />
		</a>
		<a href="https://twitter.com/overflow_oflo">
			<img class="icon" src={twitter} alt="twitter" />
		</a>
		<a href="https://youtube.com/channel/UC0gQm9zulhXobN4BcTqvRjw">
			<img class="icon" src={youtube} alt="youtube" />
		</a>
	</div>
</div>

<style lang="scss">
	@use '$styles/variables' as *;

	$navbar-width: max(25%, 15rem);
	.container {
		box-sizing: border-box;
		position: fixed;
		top: 0;
		right: calc(-1 * #{$navbar-width});
		background-color: $navbar-background;
		width: $navbar-width;
		height: 100vh;
		padding: 5rem 1rem;
		z-index: 2;

		transition: right 0.4s;
		&.active {
			right: 0;
		}
	}
	.section-container {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
	.section {
		font-size: x-large;
		font-weight: 600;
		color: white;
		margin-bottom: 0.8rem;
		cursor: pointer;
	}
	.link {
		color: white;
		text-decoration: none;
	}
	.icon-container {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
	.icon {
		width: 2rem;
		height: 2rem;

		// make icons white
		filter: invert(1);
	}

	@media screen and (max-width: 768px) {
		.container {
			width: fit-content;
		}
	}
</style>
