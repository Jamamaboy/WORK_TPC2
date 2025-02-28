<script >

	import Star1 from '../../public/Img/GO/star1.png';


	import { onMount } from "svelte";
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	export let point = [];
	let totalPoints = 0;
	let Star = "";

	$: totalPoints = point.reduce((acc, curr) => acc + curr, 0);

	$: determineStar();

	function determineStar() {
		if (totalPoints >= -10 && totalPoints <= 10) {
			Star = Star1;
		} else if (totalPoints > 11 && totalPoints <= 15) {
			Star = Star1;
		} else if (totalPoints > 16 && totalPoints <= 20) {
			Star = Star1;
		} else if (totalPoints > 21 && totalPoints <= 25) {
			Star = Star1;
		} else if (totalPoints > 26 && totalPoints <= 30) {
			Star = Star1;
		} else if (totalPoints > 31 && totalPoints <= 100) {
			Star = Star1;
		}
	}

	function reset() {
		window.location.reload();
	}

	function downloadImage() {
		const link = document.createElement('a');
		link.href = Star;
		link.download = `Star⭐.png`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}

	onMount(() => {
	});


</script>

<div class="container">

	<img src={Star} alt="{Star}" />

	<div class="controls">
		<button on:click={reset}>ReStart Game</button>
		<button on:click={() => downloadImage(Star)}>Download Image</button>
	</div>

</div>

<style>

	@font-face {
		font-family: 'CloudLoop';
		src: url('./font/CloudLoop-Regular.otf') format('opentype');
		font-weight: normal;
		font-style: normal;
		font-display: swap;
	}
	.container {
		display: grid;
		grid-template-rows: 90% 10%;
		align-items: center;
		justify-items: center;
		height: 100%;
		width: auto;
		object-fit: contain;
	}

	img {
		max-width: 100%;
		height: auto;
	}

	.controls {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		padding-top: 5%;
	}

	button {
		font-family: 'CloudLoop';
		font-size: 16px;
		min-width: 60%;
		padding: 5px;
		padding-left: 10%;
		padding-right: 10%;
		color: black;
		border: 1px solid black;
		border-radius: 20px;
		background-color: white;
		transition: background-color 0.3s;
		align-self: center;
		justify-self: center;
		-webkit-tap-highlight-color: transparent;
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		user-select: none;
		outline: none;
		appearance: none;
	}
</style>
