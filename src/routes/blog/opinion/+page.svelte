<script lang="ts">
  import { onMount } from 'svelte';
  import ThemeSwitch from '$lib/ThemeSwitch.svelte';
  import PageToggle from '$lib/components/ui/page-toggle/PageToggle.svelte';
	import Loading from '$lib/assets/loading.gif';
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
	import { formatDate } from '$lib/utils';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
  import * as Tooltip from '$lib/components/ui/tooltip';
	import { goto } from '$app/navigation';

  export let data;
  let posts = data.posts;
  posts = posts.filter(post => post.categories?.includes('Opinion'));

	let pageContent: HTMLDivElement;


	function goHome() {
    goto("/");
  }

	function delay(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	let isDesktop = false;
  const handleResize = () => {
    isDesktop = window.innerWidth > 1100;
  };

	onMount(() => {
		loadAnim();
		handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

	async function loadAnim() {
		await delay(200);
		pageContent.classList.remove('opacity-0');
	}

</script>

<div bind:this={pageContent} class="opacity-0" style={"transition: opacity 1s ease;"}>

	<div class="absolute top-4 left-4 z-50">
		<Tooltip.Root openDelay={50}>
			<Tooltip.Trigger>
				<button on:click={goHome}>
					<Avatar.Root style={"width: 40px; height: 40px;"}>
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

	<div class="w-svw h-svh flex justify-center items-center">	
		<div>
			<Carousel.Root
				opts={{
					align: "start"
				}}
				orientation="vertical"
				class="w-full max-w-md h-full"
			>
				<Carousel.Content class="-mt-1 {isDesktop ? 'h-[600px]' : 'h-[400px]'}">
					{#each posts as post}
						<a href={post.slug}>
							<Carousel.Item class="pt-1 basis-0 min-w-[400px]">
								<div class="p-5">
									<Card.Root>
										<Card.Content class="flex flex-col justify-center text-center p-6 min-h-[150px]">
											<p class="bold">{post.title}</p>
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

	<div class="absolute bottom-6 left-0 right-0 flex justify-center">
		<PageToggle />
	</div>
</div>