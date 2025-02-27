<script>
	import { createEventDispatcher } from "svelte";
	export let contentHeight;
	export let contentWidth;
	export let page;

	const dispatch = createEventDispatcher();

	/**
     * @param {number | undefined} [additionalPoint]
     * @param {number} [pageIncrement]
     */
	function handleClick(additionalPoint, pageIncrement) {
		dispatch('nextPage', { additionalPoint, pageIncrement });
	}

</script>

<div class="content" style="height: {contentHeight}px; width: {contentWidth}px;">

	<div class="space"></div>
	<!-- const page_quiz = [6,8,10,13,15]; -->
	{#if page == 6}
		<div class="as">
			<button on:click={() => handleClick(0.77, 1)}>1</button>
			<button on:click={() => handleClick(1.25, 1)}>2</button>
			<button on:click={() => handleClick(0.83, 1)}>3</button>
			<button on:click={() => handleClick(0.164, 1)}>4</button>
			<button on:click={() => handleClick(0.164, 1)}>5</button>
		</div>
	{/if}

	{#if page == 8}
		<div class="as">
			<button on:click={() => handleClick(0.467, 1)}>1</button>
			<button on:click={() => handleClick(0.467, 1)}>2</button>
			<button on:click={() => handleClick(0.25, 1)}>3</button>
			<button on:click={() => handleClick(0.77, 1)}>4</button>
			<button on:click={() => handleClick(0.06, 1)}>5</button>
		</div>
	{/if}

	{#if page == 10}
		<div class="as">
			<button on:click={() => handleClick(0.467, 1)}>1</button>
			<button on:click={() => handleClick(0.467, 1)}>2</button>
			<button on:click={() => handleClick(0.25, 1)}>3</button>
			<button on:click={() => handleClick(0.164, 1)}>4</button>
			<button on:click={() => handleClick(0.7, 1)}>5</button>
		</div>
	{/if}

	{#if page == 13}
		<div class="as">
			<button on:click={() => handleClick(0.467, 1)}>1</button>
			<button on:click={() => handleClick(0.164, 1)}>2</button>
			<button on:click={() => handleClick(0.415, 1)}>3</button>
			<button on:click={() => handleClick(0.25, 1)}>4</button>
			<button on:click={() => handleClick(0.06, 1)}>5</button>
		</div>
	{/if}

	{#if page == 15}
		<div class="as">
			<button on:click={() => handleClick(0.415, 1)}>1</button>
			<button on:click={() => handleClick(0.467, 1)}>2</button>
			<button on:click={() => handleClick(0.06, 1)}>3</button>
			<button on:click={() => handleClick(0.467, 1)}>4</button>
			<button on:click={() => handleClick(0.164, 1)}>5</button>
		</div>
	{/if}

	<div class="space"></div>

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
		display: grid;
		z-index: 1;
		justify-items: center;
		align-items: center;
		grid-template-rows: 50% 45% 5%;
		width: 100%;
	}
	.as {
		height: 100%;
		width: 86%;
		display: grid;
		align-items: center;
		grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
		gap: 5%;
		/* background-color: aqua; */
	}
	.as button {
		font-family: 'CloudLoop';
		font-size: 16px;
		color: darkslategrey;
		height: 100%;
		width: 100%;
		border-radius: 20px;
		border: 1px;
		background-color: #f670c3;
		opacity: 0.85;
		color: #f9f9f9;
	}
	.space {
		/* background-color: blue; */
		width: 100%;
		height: 100%;
	}

</style>
