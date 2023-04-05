<script lang="ts">
	import instagram from '$lib/icons/instagram.svg'
	import twitter from '$lib/icons/twitter.svg'
	import youtube from '$lib/icons/youtube.svg'
	import { url } from '$lib/constants'
</script>

<div class="container">
	<a href={url.instagram} title="Instagram">
		<img class="icon" src={instagram} alt="instagram" />
	</a>
	<a href={url.twitter} title="Twitter">
		<img class="icon" src={twitter} alt="twitter" />
	</a>
	<a href={url.youtube} title="YouTube">
		<img class="icon" src={youtube} alt="youtube" />
	</a>
</div>

<style lang="scss">
	.container {
		display: flex;
		width: 100%;
		background-color: white;
		padding: 0 7.5%;
		box-sizing: border-box;
	}
	.icon {
		width: 2rem;
		height: 2rem;
		margin: 1rem;
	}
</style>
