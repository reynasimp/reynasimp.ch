<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	const audio = new Audio('/valorant-ost-loading-main-theme.mp3');
	audio.volume = 0.1;
	audio.loop = true;

	onMount(() => {
		audio.play();
	});

	onDestroy(() => {
		audio.pause();
	});

	function toggleMute() {
		audio.muted = !audio.muted;
	}
</script>

<button class="mute-button" on:click={toggleMute}>
	{#if audio.muted}
		🔇
	{:else}
		🔊
	{/if}
</button>

<style lang="scss">
	button {
		position: fixed;
		top: 0;
		left: 0;
		background-color: transparent;
		outline: none !important;
		border: none !important;
		color: white;
		padding: 0.5rem;
		font-size: 1.5rem;
		cursor: pointer;
		transition: all 0.5s;
		z-index: 100;
		opacity: 0.2;

		&:hover {
			opacity: 1;
		}
	}
</style>
