<script lang="ts">
	import * as ToggleGroup from '$lib/components/ui/toggle-group/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { darkMode } from '../../../ThemeSwitch.svelte';
	import Bowser from 'bowser';

	let curPage = $page.url.pathname;

	let handlePageChange = (value: string | undefined) => {
		if (value) {
			goto(value);
		}
	};

	let backgroundColor = '';
	let isMobile: boolean;
	let isBottomQuarter: boolean;

	onMount(() => {
		if (typeof window !== 'undefined') {
			isMobile =
				Bowser.getParser(window.navigator.userAgent).getResult().platform.type === 'mobile'
					? true
					: false;
			isBottomQuarter = isMobile ? true : false;
		}
		window.addEventListener('mousemove', checkBottomQuarter);
		const unsubscribe = darkMode.subscribe((value) => {
			backgroundColor = value ? 'rgba(32, 32, 32, 0.3)' : 'rgba(175, 173, 173, 0.2)';
		});

		return () => {
			window.removeEventListener('mousemove', checkBottomQuarter);
			unsubscribe();
		};
	});

	function checkBottomQuarter(event: MouseEvent) {
		if (!isMobile) {
			const windowHeight = window.innerHeight;
			const bottomQuarter = windowHeight * 0.75;

			isBottomQuarter = event.clientY >= bottomQuarter;
		}
	}
</script>

	<div
		class="toggle-bar z-50"
		style="position: fixed; bottom: {isBottomQuarter
			? '3%'
			: '-400px'}; background-color: {backgroundColor}; border-radius: 9px; padding: 5px; opacity: {isBottomQuarter
			? '1'
			: '0.4'};  transition: bottom 0.4s ease, opacity 0.1s ease, background-color 0.3s ease;"
	>
		<ToggleGroup.Root size="lg" type="single" onValueChange={handlePageChange}>
			<Tooltip.Root openDelay={50}>
				<Tooltip.Trigger>
					<ToggleGroup.Item
						value="/"
						aria-label="Home"
						data-state={curPage === '/' ? 'on' : 'off'}
						disabled={curPage === '/'}
					>
						<iconify-icon icon="ic:round-home"></iconify-icon>
					</ToggleGroup.Item>
				</Tooltip.Trigger>
				<Tooltip.Content>Home</Tooltip.Content>
			</Tooltip.Root>
			<Tooltip.Root openDelay={50}>
				<Tooltip.Trigger>
					<ToggleGroup.Item
						value="/blog"
						aria-label="Blog"
						data-state={curPage !== '/' ? 'on' : 'off'}
						disabled={curPage === '/blog/'}
					>
						<iconify-icon icon="bi:book"></iconify-icon>
					</ToggleGroup.Item>
				</Tooltip.Trigger>
				<Tooltip.Content>Blog</Tooltip.Content>
			</Tooltip.Root>
		</ToggleGroup.Root>
	</div>