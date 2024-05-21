<script lang="ts">

  import "../app.css";
  import 'iconify-icon';
  import { blur } from "svelte/transition";
  export let data;

</script>

{#key data.url}
  <div transition:blur={{ amount: 6 }}>
    <slot />
  </div>
{/key}