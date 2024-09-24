<script lang="ts">
	import { goto } from '$app/navigation';
	import ThemeSwitch, { darkMode } from '$lib/ThemeSwitch.svelte';
	import PageToggle from '$lib/components/ui/page-toggle/PageToggle.svelte';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	import { hasRefreshed } from '$lib/stores';

	register();
	export let data;
	let posts = data.posts;
	posts = posts.filter((post) => post.categories?.includes('Album'));

	let isDesktop = true;
	let swiperEl: any;
	let activeIndex = 0;

	const handleResize = () => {
		isDesktop = window.innerWidth > 900;
	};

	onMount(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
		ensureCSS();
		swiperEl.swiper.on('slideChange', () => {
			activeIndex = swiperEl.swiper.activeIndex;
			rating = posts[activeIndex].rating;
			animateScore();
		});
		animateScore();

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	function ensureCSS() {
		if (!$hasRefreshed) {
			window.location.reload();
			hasRefreshed.set(true);
		}
	}

	function goHome() {
		goto('/');
	}

	let rating = posts[activeIndex].rating;
	let displayedScore = 0;

	function getScoreColor(score: number) {
		const red = Math.floor(255 * (1 - score / 10));
		const green = Math.floor(255 * (score / 10));
		return `rgb(${red}, ${green}, 0)`;
	}

	const radius = 60;
	const circumference = 2 * Math.PI * radius;

	function getStrokeOffset(score: number) {
		const progress = score / 10;
		return circumference - progress * circumference;
	}

	async function animateScore() {
		const increment = 0.1;
		const stepTime = 15;
		if (rating && rating > displayedScore) {
			for (let i = displayedScore; i <= rating; i = parseFloat((i + increment).toFixed(1))) {
				displayedScore = parseFloat(i.toFixed(1));
				await new Promise((resolve) => setTimeout(resolve, stepTime));
			}
		} else if (rating && rating < displayedScore) {
			for (let i = displayedScore; i >= rating; i = parseFloat((i - increment).toFixed(1))) {
				displayedScore = parseFloat(i.toFixed(1));
				await new Promise((resolve) => setTimeout(resolve, stepTime));
			}
		}
	}
</script>

<div class="absolute top-4 left-4 z-50">
	<Tooltip.Root openDelay={50}>
		<Tooltip.Trigger>
			<button on:click={goHome}>
				<Avatar.Root style={'width: 40px; height: 40px;'}>
					<Avatar.Image
						src="https://pbs.twimg.com/profile_images/1693199305325101056/qQbq0OQN_400x400.jpg"
					/>
					<Avatar.Fallback>BG</Avatar.Fallback>
				</Avatar.Root>
			</button>
		</Tooltip.Trigger>
		<Tooltip.Content side="right" class="-translate-y-1">Home</Tooltip.Content>
	</Tooltip.Root>
</div>

<ThemeSwitch />

<div class="flex justify-center items-center h-svh w-svw flex-col">
	{#if isDesktop}
		<h1 class="font-bold" style="font-size: 40px">
			{posts[activeIndex].title.split('-')[0].trim()}
		</h1>
		<p class="mb-8">{posts[activeIndex].title.split('-')[1].trimStart()}</p>
	{/if}
	<swiper-container
		bind:this={swiperEl}
		effect="coverflow"
		direction={isDesktop ? 'horizontal' : 'vertical'}
		coverflow-effect-rotate="50"
		coverflow-effect-stretch="0"
		coverflow-effect-depth="100"
		coverflow-effect-modifier="1"
		slides-per-view={posts.length}
		centered-slides="true"
		navigation={isDesktop ? 'true' : 'false'}
		style="z-index: 1000"
	>
		{#each posts as post}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<swiper-slide lazy="true" role="button" tabindex="0" on:click={() => goto(post.slug)}>
				<img src={post.img} alt={post.title} loading="lazy" class="cursor-pointer" />
			</swiper-slide>
		{/each}
	</swiper-container>

	{#if isDesktop}
		<div class="ring-container">
			<svg width="150" height="150">
				<circle
					class="progress-ring__circle"
					stroke={getScoreColor(displayedScore)}
					stroke-width="10"
					fill="transparent"
					r={radius}
					cx="75"
					cy="75"
					stroke-dasharray={circumference}
					stroke-dashoffset={getStrokeOffset(displayedScore)}
				/>
			</svg>

			<div class="score-text" style="color: {getScoreColor(displayedScore)}">
				{displayedScore.toFixed(1)}
			</div>
		</div>
	{/if}
</div>

<div class="absolute bottom-6 left-0 right-0 flex justify-center">
	<PageToggle />
</div>

<style>
	.ring-container {
		position: relative;
		display: inline-block;
		width: 150px;
		height: 150px;
		margin-top: 20px;
	}

	.score-text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 50px;
		font-weight: bold;
		text-align: center;
	}

	.progress-ring__circle {
		transition: stroke-dashoffset 0.1s linear;
		transform: rotate(-90deg);
		transform-origin: 50% 50%;
	}
</style>
