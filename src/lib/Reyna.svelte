<main>
	<div class="container">
		<img class="clone" src="/Reyna_Artwork_Full.webp" alt="Reyna artwork" />
		<img class="image" src="/Reyna_Artwork_Full.webp" alt="Reyna artwork" />
	</div>
</main>

<style lang="scss">
	main {
		position: relative;
		z-index: 10;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
		cursor: crosshair;

		.container {
			display: flex;
			align-items: center;
			justify-content: center;
			transform: scale(1) translateX(-2rem);
			transition: all 2s;
			transition-timing-function: ease-in-out;

			&:hover {
				transform: scale(1.1) translateX(-2rem);
			}
		}

		img {
			position: absolute;
			width: auto;
			height: auto;
			max-width: min(500px, 80vh);
			max-height: min(900px, 80vh);

			&.image {
				filter: drop-shadow(0 0 2rem hsla(300, 100%, 10%, 0.8))
					drop-shadow(0 0 6rem hsla(300, 100%, 20%, 0.8));
			}

			&.clone {
				transform: scaleY(0.1) scaleX(0.8) translateY(490%) rotate(-35deg);
				filter: brightness(0) blur(100px) drop-shadow(0 0 2rem black);
				opacity: 0.4;
			}
		}
	}
</style>
