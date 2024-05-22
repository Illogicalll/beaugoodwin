<script lang="ts">
	import ThemeSwitch from '$lib/ThemeSwitch.svelte';
	import PageToggle from '$lib/components/ui/page-toggle/PageToggle.svelte';
	import * as HoverCard from '$lib/components/ui/hover-card';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { toast } from 'svelte-sonner';
	import { onMount } from 'svelte';
	import { darkMode } from '$lib/ThemeSwitch.svelte';
	import Bowser from 'bowser';
	import Typed from 'typed.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import * as Drawer from '$lib/components/ui/drawer/index.js';

	let aboutParagraph: HTMLParagraphElement;
	let aboutButton: HTMLButtonElement;
	let contactButton: HTMLButtonElement;
	let backButton: HTMLButtonElement;
	let title: HTMLHeadingElement;
	let p1: HTMLParagraphElement;
	let p2: HTMLParagraphElement;
	let br: HTMLParagraphElement;
	let buttonRow: HTMLDivElement;
	let page: HTMLDivElement;
	let aboutCard: HTMLDivElement;
	let backCard: HTMLDivElement;

	let isDesktop = true;

	onMount(() => {
		if (typeof window !== 'undefined') {
			new Typed('#hero', { strings: ['^300Beau ^20 Goodwin'], typeSpeed: 50 });
			Bowser.getParser(window.navigator.userAgent).getResult().platform.type === 'mobile'
				? (isDesktop = false)
				: toast.info('Move the cursor down here to navigate!', {
						duration: 1700,
						style: 'position: fixed; width: auto; transform: translateX(5%);'
					});
			buttonRow.classList.remove('opacity-0');
			buttonRow.classList.add('opacity-100');
		}
	});

	function delay(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	let originalTitleText = 'Beau Goodwin';

	async function showAbout() {
		p1.innerHTML = '';
		p2.innerHTML = '';
		aboutParagraph.innerHTML = '';
		aboutParagraph.classList.remove('hidden');
		aboutButton.classList.add('hidden');
		contactButton.classList.add('hidden');
		title.classList.remove('montserrat-hero');
		title.classList.remove('lg:text-9xl');
		title.classList.remove('md:text-5xl');
		title.classList.add('montserrat-text');
		p1.classList.remove('hidden');
		p2.classList.remove('hidden');
		p1.classList.add('text-nowrap');
		if (isDesktop) {
			aboutCard.parentElement?.classList.add('hidden');
			p2.classList.add('text-nowrap');
		} else {
			page.classList.add('hidden');
		}
		title.classList.add('text-nowrap');
		title.innerHTML = '&nbsp;Beau Goodwin&nbsp;';
		new Typed('#p1', { strings: ['^800My name is'], typeSpeed: 0 });
		new Typed('#p2', {
			strings: ['^1000and I am a journalist based in the south-east/london.'],
			typeSpeed: 0
		});
		br.classList.remove('hidden');
		new Typed('#p3', {
			strings: [
				'^1600 `I am a huge fan of indie-rock music, with my favourite artists being Inhaler and Arctic Monkeys.` ^150 `I listen to a wide variety of music though, examples being Clairo, Harry Styles, Jeff Buckley, The Cure, The Smiths, Joy Division, etc…` ^150 `I taught myself how to play the guitar by listening to the Arctic Monkeys and watching their live performances.` ^150 `My dream of being a music journalist is due to my love of music and how I constantly consume music in various forms.` ^150 `I also adore English and reading, prose or poetry, and therefore being a music journalist is a perfect fusion of those interests.`'
			]
		});
		await delay(2300);
		backButton.classList.remove('hidden');
	}

	function showContact() {
		if (isDesktop) {
			openDialog();
		} else {
			openDrawer();
		}
	}

	async function goBack() {
		if (isDesktop) {
			backCard.parentElement?.classList.add('hidden');
		}
		if (p1.innerHTML !== '') {
			new Typed('#p3', {
				strings: [
					'`I am a huge fan of indie-rock music, with my favourite artists being Inhaler and Arctic Monkeys.` ^150 `I listen to a wide variety of music though, examples being Clairo, Harry Styles, Jeff Buckley, The Cure, The Smiths, Joy Division, etc…` ^150 `I taught myself how to play the guitar by listening to the Arctic Monkeys and watching their live performances.` ^150 `My dream of being a music journalist is due to my love of music and how I constantly consume music in various forms.` ^150 `I also adore English and reading, prose or poetry, and therefore being a music journalist is a perfect fusion of those interests.`'
				]
			});
			backButton.classList.add('hidden');
			await delay(2550);
			new Typed('#p1', { strings: ['^800My name is'], typeSpeed: 0 });
			new Typed('#p2', {
				strings: ['^1000and I am a journalist based in the south-east/london.'],
				typeSpeed: 0
			});
			br.classList.add('hidden');
			await delay(200);
		}
		backButton.classList.add('hidden');
		page.classList.remove('hidden');
		aboutParagraph.innerHTML = '';
		aboutParagraph.classList.add('hidden');
		aboutButton.classList.remove('hidden');
		contactButton.classList.remove('hidden');
		title.classList.remove('montserrat-text');
		title.classList.add('montserrat-hero');
		title.classList.add('lg:text-9xl');
		title.classList.add('md:text-5xl');
		p1.classList.add('hidden');
		p2.classList.add('hidden');
		p1.classList.remove('text-nowrap');
		p2.classList.remove('text-nowrap');
		title.classList.remove('text-nowrap');
		title.innerHTML = originalTitleText;
		p1.innerHTML = '';
		p2.innerHTML = '';
	}

	let dialogOpen = false;
	let drawerOpen = false;

	function openDialog() {
		dialogOpen = true;
	}

	function openDrawer() {
		drawerOpen = true;
	}
</script>

<ThemeSwitch />

<div class="flex flex-col justify-center items-center h-svh">
	<div class="flex {isDesktop ? 'flex-row' : 'flex-col'} items-center">
		<p id="p1" class="lg:text-base md:text-xs text-center hidden" bind:this={p1} />
		<!-- svelte-ignore a11y-missing-content -->
		<h1
			id="hero"
			class="scroll-m-20 font-extrabold tracking-tight lg:text-9xl md:text-5xl text-center montserrat-hero {isDesktop
				? ''
				: 'hero'}"
			bind:this={title}
		/>
		<p id="p2" class="lg:text-base md:text-xs text-center hidden w-9/12" bind:this={p2} />
	</div>
	<div class={isDesktop ? 'w-1/2' : 'w-9/12'}>
		<p class="hidden" bind:this={br}><br /></p>
		<p
			id="p3"
			class="lg:text-base md:text-xs text-center hidden {isDesktop ? '' : 'para'}"
			bind:this={aboutParagraph}
		/>
	</div>
	<div
		id="buttonRow"
		class="flex flex-row justify-center items-center space-x-4 opacity-0"
		bind:this={buttonRow}
	>
		<button on:click={showAbout} bind:this={aboutButton}>
			<HoverCard.Root closeDelay={0} openDelay={100}>
				<HoverCard.Trigger
					class="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
				>
					about
				</HoverCard.Trigger>
				<HoverCard.Content class="w-70">
					<div bind:this={aboutCard} class="flex justify-between items-center space-x-4">
						<Avatar.Root>
							<Avatar.Image
								src="https://pbs.twimg.com/profile_images/1693199305325101056/qQbq0OQN_400x400.jpg"
							/>
							<Avatar.Fallback>BG</Avatar.Fallback>
						</Avatar.Root>
						<div class="space-y-1">
							<h4 class="text-sm font-semibold">a passionate journalist</h4>
							<span class="text-xs text-muted-foreground"> get to know me here </span>
						</div>
					</div>
				</HoverCard.Content>
			</HoverCard.Root>
		</button>
		<button on:click={showContact} bind:this={contactButton}>
			<HoverCard.Root closeDelay={0} openDelay={100}>
				<HoverCard.Trigger
					class="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
				>
					contact
				</HoverCard.Trigger>
				<HoverCard.Content class="w-50">
					<div class="flex justify-between items-center space-x-4">
						<iconify-icon icon="vaadin:connect-o"></iconify-icon>
						<div class="space-y-1">
							<h4 class="text-sm font-semibold">reach out</h4>
							<span class="text-xs text-muted-foreground"> find my details here </span>
						</div>
					</div>
				</HoverCard.Content>
			</HoverCard.Root>
		</button>
		<button
			on:click={goBack}
			bind:this={backButton}
			class="hidden pt-4"
			style={'transform: translateX(-10px);'}
		>
			<HoverCard.Root closeDelay={0} openDelay={100}>
				<HoverCard.Trigger
					class="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
				>
					back
				</HoverCard.Trigger>
				<HoverCard.Content class="w-50">
					<div bind:this={backCard} class="flex justify-between items-center space-x-4">
						<iconify-icon icon="lets-icons:back"></iconify-icon>
						<h4 class="text-sm font-semibold">go to home</h4>
					</div>
				</HoverCard.Content>
			</HoverCard.Root>
		</button>
	</div>
	{#if isDesktop}
		<Dialog.Root bind:open={dialogOpen}>
			<Dialog.Trigger asChild let:builder>
				<div></div>
			</Dialog.Trigger>
			<Dialog.Content class="sm:max-w-[425px] {$darkMode === false ? 'bg-white' : ''}">
				<Dialog.Header>
					<Dialog.Title>Get in touch</Dialog.Title>
					<Dialog.Description>
						Follow, subscribe, or send me a message on any of these platforms
					</Dialog.Description>
				</Dialog.Header>
				<div class="grid gap-2">
					<Button href="https://x.com/BGoodwinMusic" target="_blank">
						<iconify-icon icon="hugeicons:twitter" class="pr-1 translate-y-0.45"></iconify-icon>
						@BGoodwinMusic
					</Button>
				</div>
				<div class="grid gap-2">
					<Button href="https://beaugoodwin.substack.com/" target="_blank">
						<iconify-icon icon="simple-icons:substack" class="pr-1 translate-y-0.45"></iconify-icon>
						Subscribe on Substack
					</Button>
				</div>
				<div class="grid gap-2">
					<Button href="mailto:contact@beaugoodwin.com">
						<iconify-icon icon="material-symbols:mail-outline" class="pr-1"></iconify-icon>
						contact@beaugoodwin.com
					</Button>
				</div>
			</Dialog.Content>
		</Dialog.Root>
	{:else}
		<Drawer.Root bind:open={drawerOpen}>
			<Drawer.Trigger asChild let:builder>
				<div></div>
			</Drawer.Trigger>
			<Drawer.Content class={$darkMode === false ? 'bg-white' : ''}>
				<Drawer.Header class="text-left">
					<Drawer.Title>Get in touch</Drawer.Title>
					<Drawer.Description>
						Follow, subscribe, or send me a message on any of these platforms
					</Drawer.Description>
				</Drawer.Header>
				<div class="grid items-start gap-4 px-4">
					<div class="grid gap-2">
						<Button href="https://x.com/BGoodwinMusic" target="_blank">
							<iconify-icon icon="hugeicons:twitter" class="pr-1 translate-y-0.45"></iconify-icon>
							@BGoodwinMusic
						</Button>
					</div>
					<div class="grid gap-2">
						<Button href="https://beaugoodwin.substack.com/" target="_blank">
							<iconify-icon icon="simple-icons:substack" class="pr-1 translate-y-0.45"
							></iconify-icon>
							Subscribe on Substack
						</Button>
					</div>
					<div class="grid gap-2">
						<Button href="mailto:contact@beaugoodwin.com">
							<iconify-icon icon="material-symbols:mail-outline" class="pr-1"></iconify-icon>
							contact@beaugoodwin.com
						</Button>
					</div>
				</div>
				<Drawer.Footer class="pt-2">
					<Drawer.Close asChild let:builder>
						<Button variant="outline" builders={[builder]}>Cancel</Button>
					</Drawer.Close>
				</Drawer.Footer>
			</Drawer.Content>
		</Drawer.Root>
	{/if}
</div>
<div class="absolute bottom-6 left-0 right-0 flex justify-center" bind:this={page}>
	<PageToggle />
</div>

<style>
	#buttonRow {
		transition: opacity 3.5s ease;
	}

	.hero {
		font-size: 40px;
	}

	.para {
		font-size: 12px;
	}
</style>
