<script lang="ts">
	import instagram from '$lib/icons/instagram.svg'
	import twitter from '$lib/icons/twitter.svg'
	import youtube from '$lib/icons/youtube.svg'
</script>

<div class="container">
	<a href="https://www.instagram.com/overflow_oflo" title="Instagram">
		<img class="icon" src={instagram} alt="instagram" />
	</a>
	<a href="https://twitter.com/overflow_oflo" title="Twitter">
		<img class="icon" src={twitter} alt="twitter" />
	</a>
	<a href="https://youtube.com/channel/UC0gQm9zulhXobN4BcTqvRjw" title="YouTube">
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
