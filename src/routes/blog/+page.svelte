<script lang="ts">

  import ThemeSwitch from "$lib/ThemeSwitch.svelte";
  import PageToggle from "$lib/components/ui/page-toggle/PageToggle.svelte";
  
</script>

<ThemeSwitch />

<div class="flex flex-col justify-center items-center h-svh space-y-4">
  <h1 class="scroll-m-20 font-extrabold tracking-tight lg:text-9xl md: text-5xl text-center">Blog</h1>
  <p class="text-center">website coming soon..</p>
  
</div>
<div class="absolute bottom-6 left-0 right-0 flex justify-center">
  <PageToggle />
</div>