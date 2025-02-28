<script>
	import { createEventDispatcher } from 'svelte';
	import { browser } from "$app/environment";
	import audioFile from '../../public/audio/The Girl on a Space Colony.mp3'

	export let contentHeight;
	export let contentWidth;

	const dispatch = createEventDispatcher();

	let audio;
	let isAudioPlaying = false;

	if (browser) {
		audio = new Audio(audioFile);
	}

	function handleClick(additionalPoint, pageIncrement) {
		if (browser && !isAudioPlaying) {
			audio.loop = true; // Enable loop for the audio
			audio.play(); // Play the audio
			isAudioPlaying = true; // Set the audio state as playing
		}

		dispatch('nextPage', { additionalPoint, pageIncrement });
	}

</script>

<div class="content" style="height: {contentHeight}px; width: {contentWidth}px;">
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<button on:click={() => handleClick(0, 1)}></button>
</div>
<style>
	@font-face {
		font-family: 'CloudLoop';
		src: url('./font/CloudLoop-Regular.otf') format('opentype');
		font-weight: normal;
		font-style: normal;
		font-display: swap;
	}

	.content {
		position: relative;
		display: grid;
		z-index: 1;
		justify-items: center;
		align-items: center;
	}

	button {
		position: absolute;
		width: 100vw;
		height: 100vh;
		background: none;
		border: none;
		object-fit: contain;
		-webkit-tap-highlight-color: transparent;
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		user-select: none;
		outline: none;
		appearance: none;
	}
</style>
