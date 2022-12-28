<div class="background-container">
	<img class="background" src="/purple-rays.webp" alt="background" />
</div>

<style lang="scss">
	.background-container {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;

		.background {
			width: max(150vw, 150vh);
			height: max(150vw, 150vh);
			background-image: url('/purple-rays.webp');
			background-position: center;
			background-size: cover;
			filter: blur(5px) brightness(0.8);
			z-index: 0;
			animation-name: rotate;
			animation-duration: 60s;
			animation-iteration-count: infinite;
			animation-timing-function: linear;
		}
	}

	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
