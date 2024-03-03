<script lang="ts">

  import "../app.css";
  import userStore from '$lib/user';
  import { onMount } from 'svelte';
  let loading = true;
  onMount(async () => {
    if (!localStorage.getItem('token')) {
        loading = false;
        return { props: { user: null } };
    }
    const res = await fetch('http://localhost:1337/api/auth/me', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    const user: any = await res.json();
    loading = false;
    if (res.ok) {
        $userStore = user;
    }
  });

</script>

{#if !loading}
  <slot />
{/if}