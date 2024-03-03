import type { Load } from '@sveltejs/kit';
export const load: Load = async ({ fetch }) => {
    const res = await fetch('/api/posts');
    const response = await res.json();
    return { posts: response.data };
};