<script lang="ts">
	import '../app.css';
	import 'iconify-icon';
	import { blur } from 'svelte/transition';
	export let data;
	import { Toaster } from '$lib/components/ui/sonner';
	import { onMount } from 'svelte';
	import { darkMode } from '$lib/ThemeSwitch.svelte';

	onMount(() => {
		if (localStorage.getItem('theme') === 'light') {
			document.documentElement.classList.remove('dark');
			darkMode.set(false);
		}
  });
</script>

{#key data.url}
	<div transition:blur={{ amount: 6 }}>
		<Toaster position="bottom-center" />
		<slot />
	</div>
{/key}
