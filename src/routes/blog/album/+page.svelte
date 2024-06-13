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
  posts = posts.filter(post => post.categories?.includes('Album'));

	let isDesktop = true;
	const handleResize = () => {
    isDesktop = window.innerWidth > 900;
  };

	onMount(() => {
		handleResize();
    window.addEventListener('resize', handleResize);
		ensureCSS();
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
    goto("/");
  }

</script>

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

<div class="flex justify-center items-center h-svh w-svw">
	<swiper-container effect="coverflow" direction={isDesktop ? "horizontal" : "vertical"} coverflow-effect-rotate="50" coverflow-effect-stretch="0" coverflow-effect-depth="100" coverflow-effect-modifier="1" slides-per-view="3" centered-slides="true" navigation={isDesktop ? "true" : "false"}>
		{#each posts as post}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<swiper-slide lazy="true" role="button" tabindex="0" on:click={goto(post.slug)}>
				<img src={post.img} alt={post.title} loading="lazy" class="cursor-pointer"/>
			</swiper-slide>
		{/each}
	</swiper-container>
</div>

<div class="absolute bottom-6 left-0 right-0 flex justify-center">
	<PageToggle />
</div>