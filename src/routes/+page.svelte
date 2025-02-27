<script>
	import { handlers } from "svelte/legacy";
	import Pzero from "./nested-components/page_zero.svelte";
	import Pstart from "./nested-components/page_start.svelte"
	import Page_back from "./nested-components/page_back.svelte"
	import Page_quiz from "./nested-components/page_quiz.svelte"
	import Page_nextX2 from "./nested-components/page_nextX2.svelte"
	import Page_effect from "./nested-components/page_effect.svelte"
	import Page_ENG from "./nested-components/page_ENG.svelte"

	let page = 0;
	let point = [0];
	let contentHeight = 0;
	let contentWidth = 0;

	let history = [1];

	const page_zero = [0];
	const page_start = [1];
	const page_back = [2,3,5,17];
	const page_quiz = [6,8,10,13,15];
	const page_nextX2 = [7,9,11,14,18];
	const page_effect = [4,12,16];
	const page_ENG = [19];

	const images = import.meta.glob('../public/Img/*.webp', { eager: true });
	const imageUrls = Object.keys(images).reduce((acc, path) => {
		const fileName = path.split('/').pop()?.replace('.webp', '');
		if (fileName) {
			acc[fileName] = images[path].default;
		}
		return acc;
	}, {});

	function handleImageLoad(event) {
		const img = event.target;
		contentHeight = img.offsetHeight;
		contentWidth = img.offsetWidth;
		console.log(contentHeight, contentWidth);
	}

	function handleNextPage(event) {
		const { additionalPoint, pageIncrement } = event.detail;

		if (additionalPoint > 0) {
			point.push(additionalPoint);
		}

		let nextPage; // กำหนดตัวแปรก่อน

		switch (page) {
			case 0:
				nextPage = 2;
				break;
			default:
				nextPage = page + pageIncrement;
		}
		history.push(page);
		page = nextPage;
		console.log(page);
		console.log(history);
	}

	function handlePreviousPage() {
		if (history.length > 0) {
			const previousPage = history.pop();
			if (previousPage !== undefined) {
				// If moving back from page 2, go to page 1 instead of 0
				if (page === 2 && previousPage === 0) {
					page = 1;
				} else {
					page = previousPage;
				}
			}
		} else {
			alert('No previous pages in history.');
		}
	}

	function getImageSrc(page) {
		return imageUrls[`${page}`] || '';
	}
</script>

<main>

	{#if page_zero.includes(page)}
		<img src={getImageSrc(page+1)} alt="P{page+1}" on:load={handleImageLoad} />
		<Pzero contentHeight={contentHeight} contentWidth={contentWidth} on:nextPage={handleNextPage}/>
	{/if}

	{#if page_start.includes(page)}
		<img src={getImageSrc(page)} alt="P{page}" on:load={handleImageLoad} />
		<Pstart contentHeight={contentHeight} contentWidth={contentWidth} on:nextPage={handleNextPage}/>
	{/if}

	{#if page_back.includes(page) | page_nextX2.includes(page) | page_effect.includes(page)}
		<img src={getImageSrc(page)} alt="P{page}" on:load={handleImageLoad} />
		<Page_back contentHeight={contentHeight} contentWidth={contentWidth} on:nextPage={handleNextPage} on:previousPage={handlePreviousPage}/>
	{/if}

	{#if page_quiz.includes(page)}
		<img src={getImageSrc(page)} alt="P{page}" on:load={handleImageLoad} />
		<Page_quiz contentHeight={contentHeight} contentWidth={contentWidth} page={page} on:nextPage={handleNextPage}/>
	{/if}

	<!-- {#if page_nextX2.includes(page)}
		<img src={getImageSrc(page)} alt="P{page}" on:load={handleImageLoad} />
		<Page_nextX2 contentHeight={contentHeight} contentWidth={contentWidth} on:nextPage={handleNextPage} on:previousPage={handlePreviousPage}/>
	{/if}

	{#if page_effect.includes(page)}
		<img src={getImageSrc(page)} alt="P{page}" on:load={handleImageLoad} />
		<Page_effect contentHeight={contentHeight} contentWidth={contentWidth} on:nextPage={handleNextPage} on:previousPage={handlePreviousPage}/>
	{/if} -->

	{#if page_ENG.includes(page)}
		<Page_ENG point={point}/>
	{/if}



</main>

<style>
	/* @font-face {
		font-family: 'CloudLoop';
		src: url('./font/CloudLoop-Regular.otf') format('opentype');
		font-weight: normal;
		font-style: normal;
		font-display: swap;
	} */

	main {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100dvh;
		margin: 0;

		background-color: aquamarine;
	}
	img {
		position: absolute;
		z-index: 0;
		max-width: 100dvw;
		max-height: 100dvh;
		width: auto;
		height: auto;
		object-fit: contain;
	}
</style>
