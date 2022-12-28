<script lang="ts">
	import Title from './lib/Title.svelte';
	import GithubLink from './lib/GithubLink.svelte';
</script>

<Title />
<GithubLink />

<main>
	<img src="/Reyna_Artwork_Full.webp" alt="Reyna artwork" />
</main>

<style lang="scss">
	main {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;

		img {
			width: auto;
			height: auto;
			max-width: min(500px, 80vh);
			max-height: min(900px, 80vh);
		}
	}
</style>
