<script>

  import ThemeSwitch from "$lib/ThemeSwitch.svelte";
  import { Button } from "$lib/components/ui/button";
  import TwitterLogo from "svelte-radix/TwitterLogo.svelte";

</script>

<ThemeSwitch/>
<div class="flex flex-col justify-center items-center h-screen">
  <h1 class="scroll-m-20 font-extrabold tracking-tight lg:text-9xl md: text-5xl text-center">Beau Goodwin</h1>
  <p class="text-center">website coming soon...</p>
  
</div>
<div class="absolute bottom-6 left-0 right-0 flex justify-center">
  <Button href="https://twitter.com/BGoodwinMusic" target="_blank"><TwitterLogo class="h-4 w-4 outline-none" /></Button>
</div>