<script lang="ts">
	import '../app.css';
	import 'iconify-icon';
	import { blur } from 'svelte/transition';
	export let data;
	import { Toaster } from '$lib/components/ui/sonner';
</script>

{#key data.url}
	<div transition:blur={{ amount: 6 }}>
		<Toaster position="bottom-center" />
		<slot />
	</div>
{/key}
