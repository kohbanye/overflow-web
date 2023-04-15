<script lang="ts">
	import '@fontsource/fascinate-inline'
	import '@fontsource/noto-sans-jp'
	import '@fontsource/noto-sans-jp/700.css'

	import { headInfo } from '$lib/constants'
</script>

<svelte:head>
	<title>{headInfo.title}</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content={headInfo.description} />
	<link href={headInfo.backgroundImage} as="image" rel="preload" />
	<style>
		body {
			font-family: 'Noto Sans JP', sans-serif;
			background: linear-gradient(to left, transparent 85%, rgba(0, 0, 0, 0.4)),
				linear-gradient(to right, transparent 85%, rgba(0, 0, 0, 0.4)),
				linear-gradient(to top, transparent 90%, rgba(0, 0, 0, 0.4)),
				linear-gradient(to bottom, transparent 90%, rgba(0, 0, 0, 0.4)), url('/background.jpg'),
				#d33e37;
			background-attachment: fixed;
			background-size: cover;
			overflow-x: hidden;
		}
	</style>
	<link rel="icon" href={headInfo.logoImage} />
  <meta property="og:title" content={headInfo.title} />
  <meta property="og:description" content={headInfo.description} />
  <meta property="og:image" content={headInfo.ogpImage} />
  <meta property="og:site_name" content={headInfo.title} />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@overflow_oflo" />
  <meta name="twitter:creator" content="@overflow_oflo" />
  <meta name="twitter:title" content={headInfo.title} />
  <meta name="twitter:description" content={headInfo.description} />
  <meta name="twitter:image" content={headInfo.ogpImage} />
</svelte:head>
<slot />
