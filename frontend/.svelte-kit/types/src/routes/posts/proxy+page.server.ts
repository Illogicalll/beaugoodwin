// @ts-nocheck
import type { Load } from '@sveltejs/kit';
export const load = async ({ fetch }: Parameters<Load>[0]) => {
    const res = await fetch('/api/posts');
    const response = await res.json();
    return { posts: response.data };
};