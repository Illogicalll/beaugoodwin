<script lang="ts">
  import { goto } from '$app/navigation';
  export let data: any;
</script>
{#if !data}
  <p>Loading...</p>
{:else}
  <div class="my-4">
    <h1 class="text-center text-3xl font-bold">Posts</h1>
  </div>

  <div class="container mx-auto mt-4">
    {#each data.posts as post}
      <button
          class="hover:bg-gray-200 px-6 py-2 border-b border-gray-500"
          on:click={() => goto(`/posts/${post.id}`)}
          aria-label="Go to post"
      >
          <h4 class="font-bold">{post.attributes.title}</h4>
          <p class="mt-2 text-gray-800">{post.attributes.description}</p>
          <p class="mt-2 text-gray-800">{post.attributes.date}</p>
          {#if post.attributes.author && post.attributes.author.data && post.attributes.author.data.attributes.username}
            <p class="text-gray-500">By: {post.attributes.author.data.attributes.username}</p>
          {:else}
            <p class="text-gray-500">By: Unknown</p>
          {/if}
      </button>
    {/each}
  </div>
{/if}
