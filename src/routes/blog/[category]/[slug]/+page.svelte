<script lang="ts">
	import { formatDate } from '$lib/utils';
	import ThemeSwitch from '$lib/ThemeSwitch.svelte';
	import PageToggle from '$lib/components/ui/page-toggle/PageToggle.svelte';
  import * as Avatar from '$lib/components/ui/avatar/index.js';
  import * as Tooltip from '$lib/components/ui/tooltip';
	import { Button } from "$lib/components/ui/button/index.js";
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { darkMode } from '$lib/ThemeSwitch.svelte';

	export let data;

	let pageContent: HTMLDivElement;

	function delay(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

  function goHome() {
    goto("/");
  }

	function goBack() {
		goto("../../" + data.url.split('/')[2]);
	}

	 function copyToClipboard() {
		const currentUrl = window.location.href;
		navigator.clipboard.writeText(currentUrl).then(() => {
		}).catch(err => {
				console.error('Failed to copy: ', err);
		});
	}

	let isDesktop = false;
  const handleResize = () => {
    isDesktop = window.innerWidth > 1100;
  };

	async function introAnim() {
		await delay(200);
		pageContent.classList.remove('opacity-0');
	}

	onMount(() => {
		handleResize();
    window.addEventListener('resize', handleResize);
		introAnim();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

</script>

<div class="opacity-0" style="transition: opacity 0.7s ease" bind:this={pageContent}>
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
	<div class="w-full min-h-screen flex flex-col justify-start items-center text-center pt-28 pb-28">
			<h1 class="font-extrabold text-4xl">{data.meta.title}</h1>
			<p class="text-gray-700">{formatDate(data.meta.date)}</p>
			<div class="{isDesktop ? 'max-w-[50%]' : 'max-w-[90%]'} text-left pt-14">
					<svelte:component this={data.content} />
			</div>
	</div>
	<div class="fixed bottom-6 left-4">
		<Tooltip.Root openDelay={50}>
			<Tooltip.Trigger>
				<Button on:click={goBack} variant="outline" size="icon" style="background-color:  {$darkMode ? "" : "rgba(175, 173, 173, 0.2);"}">
					<iconify-icon icon="lets-icons:back"></iconify-icon>
				</Button>
			</Tooltip.Trigger>
			<Tooltip.Content side="right">back to live</Tooltip.Content>
		</Tooltip.Root>
	</div>
	<div class="fixed bottom-6 left-0 right-0 flex justify-center">
		<PageToggle />
	</div>
	<div class="fixed bottom-6 right-4">
		<Tooltip.Root openDelay={50}>
			<Tooltip.Trigger>
				<Button on:click={copyToClipboard} style="background-color:  {$darkMode ? "" : "rgba(175, 173, 173, 0.2);"}" variant="outline" size="icon">
					<iconify-icon icon="material-symbols:share"></iconify-icon>
				</Button>
			</Tooltip.Trigger>
			<Tooltip.Content side="left">share this post</Tooltip.Content>
		</Tooltip.Root>
	</div>
</div>