<script lang="ts">
  import ThemeSwitch from '$lib/ThemeSwitch.svelte';
  import PageToggle from '$lib/components/ui/page-toggle/PageToggle.svelte';
  import * as Avatar from '$lib/components/ui/avatar/index.js';
  import * as Tooltip from '$lib/components/ui/tooltip';
	import * as HoverCard from '$lib/components/ui/hover-card';
  import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { hasRefreshed } from '$lib/stores';
	import Typed from 'typed.js';
  export let data;

  function goHome() {
    goto("/");
  }

	let cats: string[] = [];
	let categoryList: HTMLDivElement;
	let cardContent: HTMLDivElement;

	function hideCard(subsec: string) {
		try {
			cardContent.parentElement?.classList.add('hidden');
			} catch (e) {};
		window.location.href = "/blog/"+subsec.toLowerCase();
	}

	let categoryContent: Record<string, { icon: string; description: string; }> = {
    "Album": { icon: "dashicons:album", description: "Thoughts on records in my rotation" },
    "Live": { icon: "fluent:live-20-regular", description: "Latest on the stage" },
    "Opinion": { icon: "system-uicons:speech-typing", description: "Ruminations on my mind" },
  };

	function delay(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	data.posts.forEach((post) => {
		post.categories?.forEach((category: string) => {
			if (!(cats.includes(category))) {
				cats.push(category);
			};
		});
	});
	cats.sort();

	onMount(() => {
		new Typed('#blog', { strings: ['^300Words'], typeSpeed: 50 });
		const reveal = (async () => {
			await delay(1000);
			categoryList.classList.remove('opacity-0');
			categoryList.classList.add('opacity-100');
			hasRefreshed.set(false);
		})
		reveal();
	});

</script>

<ThemeSwitch />
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
<div class="flex flex-col h-svh items-center justify-center text-center space-y-10">
	<h1 id="blog" class="font-extrabold tracking-tight text-8xl first-letter:montserrat-hero">Words</h1>
	<div class="flex flex-col space-y-5 opacity-0 categoryList" bind:this={categoryList}>
		{#each cats as cat, index}
			<button on:click={() => hideCard(cat)}>
				<HoverCard.Root closeDelay={0} openDelay={100}>
					<HoverCard.Trigger
						class="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
					>
						{cat}
					</HoverCard.Trigger>
					<HoverCard.Content class="w-50 -translate-y-3 {index%2 === 0 ? "translate-x-4" : "-translate-x-4"}" side="{index%2 === 0 ? "right" : "left"}" avoidCollisions={false} >
						<div bind:this={cardContent} class="flex justify-between items-center space-x-4">
							<iconify-icon icon={categoryContent[cat]?.icon}></iconify-icon>
							<span class="text-xs text-muted-foreground">{categoryContent[cat]?.description} </span>
						</div>
					</HoverCard.Content>
				</HoverCard.Root>
			</button>
		{/each}
	</div>
</div>
<div class="absolute bottom-6 left-0 right-0 flex justify-center">
  <PageToggle />
</div>

<style>
	
	.categoryList {
		transition: opacity 2.5s ease;
	}

</style>