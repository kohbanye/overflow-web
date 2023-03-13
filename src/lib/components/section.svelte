<script lang="ts">
	export let title: string
</script>

<div class="container">
	<div class="title">{title}</div>
	<slot />
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 80%;
    margin-bottom: 2rem;
  }
	.title {
		font-family: 'Fascinate Inline', cursive;
		font-size: 3rem;
    color: white;
    margin-bottom: 1rem;
	}
</style>
