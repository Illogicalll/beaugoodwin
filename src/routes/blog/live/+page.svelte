<script lang="ts">
	import { onMount } from 'svelte';
	import GlobeComponent from '$lib/components/GlobeComponent.svelte';
	import ThemeSwitch from '$lib/ThemeSwitch.svelte';
	import PageToggle from '$lib/components/ui/page-toggle/PageToggle.svelte';
	import Day from '$lib/assets/earth_day.webp';
	import Night from '$lib/assets/earth_night.webp';
	import Loading from '$lib/assets/loading.gif';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import { type CarouselAPI } from '$lib/components/ui/carousel/context.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { darkMode } from '$lib/ThemeSwitch.svelte';
	import { formatDate } from '$lib/utils';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { goto } from '$app/navigation';

	export let data;
	let posts = data.posts;
	posts = posts.filter((post) => post.categories?.includes('Live'));

	let venues: {
		lat: number | undefined;
		lng: number | undefined;
		altitude: number;
		color: string;
	}[] = [];
	posts.forEach((post) => {
		venues.push({
			lat: post.lat,
			lng: post.long,
			altitude: 0,
			color: '#ff0000'
		});
	});

	let globe: any;
	let api: CarouselAPI;
	let pageContent: HTMLDivElement;
	let loadingContent: HTMLDivElement;

	let contentLoaded = {
		domContentLoaded: false,
		globeReady: false,
		carouselReady: false
	};

	function goHome() {
		goto('/');
	}

	function delay(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	let isDesktop = false;
	let zoomLevel = 0.35;
	const handleResize = () => {
		isDesktop = window.innerWidth > 1100;
		if (isDesktop) {
			zoomLevel = 1.65;
		}
	};

	onMount(() => {
		contentLoaded.domContentLoaded = true;
		checkAllContentLoaded();
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	async function checkAllContentLoaded() {
		if (contentLoaded.domContentLoaded && contentLoaded.carouselReady) {
			if (isDesktop && contentLoaded.globeReady) {
				await delay(2000);
				pageContent.classList.remove('opacity-0');
				loadingContent.classList.add('opacity-0');
				await delay(900);
				globe.pointOfView(
					{ lat: posts[0]['lat'], lng: posts[0]['long'], altitude: zoomLevel },
					1500
				);
			} else {
				await delay(400);
				pageContent.classList.remove('opacity-0');
			}
		}
	}

	async function loadAnim() {
		if (isDesktop) {
			pageContent.classList.add('hidden');
			pageContent.classList.add('opacity-0');
			loadingContent.classList.remove('opacity-0');
			await delay(500);
			pageContent.classList.remove('hidden');
			await delay(1500);
			pageContent.classList.remove('opacity-0');
			loadingContent.classList.add('opacity-0');
		}
	}

	$: if (api) {
		api.on('select', () => {
			try {
				globe.pointOfView(
					{
						lat: posts[api.selectedScrollSnap()]['lat'],
						lng: posts[api.selectedScrollSnap()]['long'],
						altitude: zoomLevel
					},
					900
				);
			} catch (e) {}
		});
		contentLoaded.carouselReady = true;
		checkAllContentLoaded();
	}

	function handleGlobeReady(event: any) {
		globe = event.detail.globe;
		globe.controls().enableZoom = false;
		contentLoaded.globeReady = true;
		checkAllContentLoaded();
	}
</script>

<div
	bind:this={loadingContent}
	class="fixed w-svw h-svh flex items-center justify-center {isDesktop ? '' : 'hidden'}"
	style={'transition: opacity 0.5s ease;'}
>
	<img src={Loading} alt="Loading" class="w-12 h-auto" />
</div>

<div bind:this={pageContent} class="opacity-0" style={'transition: opacity 1s ease;'}>
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

	<button on:click={loadAnim}>
		<ThemeSwitch />
	</button>

	<div class="w-svw h-svh flex flex-row justify-center items-center">
		<div>
			<Carousel.Root
				bind:api
				opts={{
					align: 'start'
				}}
				orientation="vertical"
				class="w-full max-w-md h-full {isDesktop ? '' : '-translate-y-[30px]'}"
			>
				<Carousel.Content class="-mt-1 {isDesktop ? 'h-[600px]' : 'h-[400px]'}">
					{#if isDesktop}
						<Carousel.Item class="pt-1 basis-0">
							<div class="p-5">
								<Card.Root>
									<Card.Content class="flex flex-col justify-center text-center p-6 min-h-[150px]">
										<p class="text-slate-700">latest posts below</p>
									</Card.Content>
								</Card.Root>
							</div>
						</Carousel.Item>
					{/if}
					{#each posts as post}
						<a href={post.slug}>
							<Carousel.Item class="pt-1 basis-0">
								<div class="p-5">
									<Card.Root>
										<Card.Content class="flex flex-col justify-center text-left p-6 min-h-[150px]">
											<p class="bold">{post.title}</p>
											<p class="text-slate-700">{formatDate(post.date)}</p>
										</Card.Content>
									</Card.Root>
								</div>
							</Carousel.Item>
						</a>
					{/each}
					{#if isDesktop}
						<Carousel.Item class="pt-1 basis-0">
							<div class="p-5">
								<Card.Root>
									<Card.Content class="flex flex-col justify-center text-center p-6 min-h-[150px]">
										<p class="text-slate-700">that was the earliest post</p>
									</Card.Content>
								</Card.Root>
							</div>
						</Carousel.Item>
					{/if}
				</Carousel.Content>
				<Carousel.Previous />
				<Carousel.Next />
			</Carousel.Root>
		</div>

		{#if isDesktop}
			<div>
				{#if $darkMode}
					<GlobeComponent
						on:globeReady={handleGlobeReady}
						globeImageUrl={Night}
						pointsData={venues}
						pointAltitude="altitude"
						pointColor="color"
						height={850}
						width={850}
						backgroundColor="rgba(0,0,0,0)"
						pointRadius={0.2}
					/>
				{:else}
					<GlobeComponent
						on:globeReady={handleGlobeReady}
						globeImageUrl={Day}
						pointsData={venues}
						pointAltitude="altitude"
						pointColor="color"
						height={850}
						width={850}
						backgroundColor="rgba(0,0,0,0)"
						pointRadius={0.2}
					/>
				{/if}
			</div>
		{/if}
	</div>

	<div class="absolute bottom-6 left-0 right-0 flex justify-center">
		<PageToggle />
	</div>
</div>

