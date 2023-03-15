<script lang="ts">
	import Section from '$lib/components/section.svelte'

	const mailAddress = 'overflow0331@gmail.com'
</script>

<Section title="CONTACT">
	<div class="contact">
		<span class="mail">mail: </span>
		<a class="link" href="mailto:{mailAddress}"><span class="address">{mailAddress}</span></a>
	</div>
</Section>

<style lang="scss">
	.contact {
		color: white;
		font-size: x-large;
		margin-left: 1rem;
	}
	.mail {
		font-weight: 600;
	}
  .link {
    text-decoration: none;
    color: white;
  }
	.address {
		text-decoration: underline;
	}

	@media screen and (min-width: 768px) {
		.contact {
			margin-left: 8rem;
		}
	}
</style>
