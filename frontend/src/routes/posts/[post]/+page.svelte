<script lang="ts">
  import { marked } from 'marked';
  export let data: any;
  const post = data.post;
  let content = marked.parse(post.content);
</script>

{#if post}
  <h1 class="text-center text-4xl mt-4">{post.title}</h1>
  <div class="border border-gray-500 my-4 mx-8 p-6 rounded">
    {@html content}
  </div>
{:else}
  <p>Loading...</p>
{/if}
