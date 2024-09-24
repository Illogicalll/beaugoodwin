import type { Cat } from 'lucide-svelte';

export type Categories = 'sveltekit' | 'svelte';

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	category: Categories[];
	categories?: string[];
	lat?: number;
	long?: number;
	img?: string;
	rating?: number;
};

