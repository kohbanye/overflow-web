<script lang="ts">
	import Section from '$lib/components/section.svelte'
	import { email } from '$lib/constants'
</script>

<Section title="contact">
	<div class="contact">
		<span class="mail">mail: </span>
		<a class="link" href="mailto:{email}"><span class="address">{email}</span></a>
	</div>
</Section>

<style lang="scss">
	.contact {
		color: white;
		font-size: x-large;
		margin-left: 8rem;
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

	@media screen and (max-width: 768px) {
		.contact {
			margin-left: 0.5rem;
		}
	}
	@media screen and (max-width: 480px) {
		.contact {
			font-size: larger;
		}
	}
</style>
