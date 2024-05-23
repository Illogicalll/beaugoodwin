<script lang="ts">
	import ThemeSwitch from '$lib/ThemeSwitch.svelte';
	import PageToggle from '$lib/components/ui/page-toggle/PageToggle.svelte';
</script>

<ThemeSwitch />

<div class="flex flex-col justify-center items-center h-svh space-y-4">
	<h1 class="scroll-m-20 font-extrabold tracking-tight text-9xl text-center">
		Opinion
	</h1>
	<p class="text-center">section coming soon...</p>
</div>
<div class="absolute bottom-6 left-0 right-0 flex justify-center">
	<PageToggle />
</div>