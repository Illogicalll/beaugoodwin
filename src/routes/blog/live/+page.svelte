<script lang="ts">
  import { onMount } from 'svelte';
  import GlobeComponent from '$lib/components/GlobeComponent.svelte';
  import ThemeSwitch from '$lib/ThemeSwitch.svelte';
  import PageToggle from '$lib/components/ui/page-toggle/PageToggle.svelte';
  import Day from '$lib/assets/earth_day.webp';
  import Night from '$lib/assets/earth_night.webp';
	import Loading from '$lib/assets/loading.gif';
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import { type CarouselAPI } from "$lib/components/ui/carousel/context.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { darkMode } from '$lib/ThemeSwitch.svelte';
	import { formatDate } from '$lib/utils';

  export let data;
  let posts = data.posts;
  posts = posts.filter(post => post.categories?.includes('Live'));

  let venues: { lat: number | undefined; lng: number | undefined; altitude: number; color: string; }[] = [];
  posts.forEach(post => {
      venues.push({
          lat: post.lat,
          lng: post.long,
          altitude: 0,
          color: '#ff0000',
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
    if (contentLoaded.domContentLoaded && contentLoaded.globeReady && contentLoaded.carouselReady) {
			await delay(2000);
      pageContent.classList.remove('opacity-0');
			loadingContent.classList.add('opacity-0');
			await delay(900);
			globe.pointOfView({ lat: posts[0]['lat'], lng: posts[0]['long'], altitude: zoomLevel }, 1500);
    }
  }

	async function loadAnim() {
		pageContent.classList.add('hidden');
		pageContent.classList.add('opacity-0');
		loadingContent.classList.remove('opacity-0');
		await delay(500);
		pageContent.classList.remove('hidden');
		await delay(1500);
		pageContent.classList.remove('opacity-0');
		loadingContent.classList.add('opacity-0');
	}

  $: if (api) {
    api.on("select", () => {
      globe.pointOfView({ lat: posts[api.selectedScrollSnap()]['lat'], lng: posts[api.selectedScrollSnap()]['long'], altitude: zoomLevel }, 900);
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

<style lang="postcss">
  .grad {
    width: 400px;
    height: 101%;
  }

  .grad-container {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    pointer-events: none;
    z-index: 40;
  }

  .left, .right {
    flex-grow: 1;
    height: 101%;
    width: calc((100vw - 400px)/2);
    background-color: rgb(226,232,240);
  }

  :global(.dark) .left,
  :global(.dark) .right {
    background-color: rgb(2,6,23);
  }
	
	.smallphone {
		transform: translateY(-10%);
	}

	@media screen and (min-height: 700px) {
		.w-svw {
			@apply pl-16;
			@apply pr-16;
			transform: translateY(0);
		}

		.smallphone {
			transform: translateY(-2%);
		}
	}
</style>

<div bind:this={loadingContent} class="fixed w-svw h-svh flex items-center justify-center" style={"transition: opacity 0.5s ease;"}>
	<img src={Loading} alt="Loading" class="w-12 h-auto"/>
</div>

<div bind:this={pageContent} class="opacity-0" style={"transition: opacity 1s ease;"}>

	<button on:click={loadAnim}>
		<ThemeSwitch />
	</button>

	{#if !isDesktop}

		<div class="flex flex-col h-svh w-svw justify-center items-center gap-y-5">
			<div class="smallphone">
				<div class="grad-container">
					<div class="left"></div>
					<div class="grad" style={$darkMode ? "background: radial-gradient(circle, rgba(2,0,36,0) 40%, rgba(2,6,23,1) 60%, rgba(2,6,23,1) 100%);" : "background: radial-gradient(circle, rgba(0,0,0,0) 40%, rgba(226,232,240,1) 60%, rgba(226,232,240,1) 100%);"}></div>
					<div class="right"></div>
				</div>
				{#if $darkMode}
					<GlobeComponent
						on:globeReady={handleGlobeReady}
						globeImageUrl={Night}
						pointsData={venues}
						pointAltitude='altitude'
						pointColor='color'
						height={350}
						width={350}
						backgroundColor="rgba(0,0,0,0)"
						pointRadius={0.2}
					/>
				{:else}
					<GlobeComponent
						on:globeReady={handleGlobeReady}
						globeImageUrl={Day}
						pointsData={venues}
						pointAltitude='altitude'
						pointColor='color'
						height={350}
						width={350}
						backgroundColor="rgba(0,0,0,0)"
						pointRadius={0.2}
					/>
				{/if}
			</div>

			<div class="w-svw pl-20 pr-20 -translate-y-16 max-w-96">
				<Carousel.Root bind:api>
					<Carousel.Content>
						{#each posts as post}
							<a href={post.slug}>
								<Carousel.Item>
									<div class="p-1">
										<Card.Root>
											<Card.Content
												class="flex flex-col min-w-48 aspect-square text-center items-center justify-center p-6"
											>
												<p>{post.title}</p>
												<p class="text-slate-700">{formatDate(post.date)}</p>
											</Card.Content>
										</Card.Root>
									</div>
								</Carousel.Item>
							</a>
						{/each}
					</Carousel.Content>
					<Carousel.Previous />
					<Carousel.Next />
				</Carousel.Root>
			</div>
		</div>

	{:else}

		<div class="w-svw h-svh flex flex-row justify-center items-center">
			
			<div>
				<Carousel.Root
					bind:api
					opts={{
						align: "start"
					}}
					orientation="vertical"
					class="w-full max-w-md h-full"
				>
					<Carousel.Content class="-mt-1 h-[600px]">
						<Carousel.Item class="pt-1 basis-0">
							<div class="p-5">
								<Card.Root>
									<Card.Content class="flex flex-col justify-center text-center p-6 min-h-[150px]">
										<p class="text-slate-700">latest posts below</p>
									</Card.Content>
								</Card.Root>
							</div>
						</Carousel.Item>
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
						<Carousel.Item class="pt-1 basis-0">
							<div class="p-5">
								<Card.Root>
									<Card.Content class="flex flex-col justify-center text-center p-6 min-h-[150px]">
										<p class="text-slate-700">that was the earliest post</p>
									</Card.Content>
								</Card.Root>
							</div>
						</Carousel.Item>
					</Carousel.Content>
					<Carousel.Previous />
					<Carousel.Next />
				</Carousel.Root>
			</div>

			<div>
				{#if $darkMode}
					<GlobeComponent
						on:globeReady={handleGlobeReady}
						globeImageUrl={Night}
						pointsData={venues}
						pointAltitude='altitude'
						pointColor='color'
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
						pointAltitude='altitude'
						pointColor='color'
						height={850}
						width={850}
						backgroundColor="rgba(0,0,0,0)"
						pointRadius={0.2}
					/>
				{/if}
			</div>

		</div>

	{/if}

	<div class="absolute bottom-6 left-0 right-0 flex justify-center">
		<PageToggle />
	</div>
</div>