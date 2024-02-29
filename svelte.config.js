import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
			pages: 'docs',
			assets: 'docs',
      fallback: undefined,
			precompress: false,
			strict: false
		}),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/beaugoodwin' : '',
    }
  },
  preprocess: vitePreprocess()
};
export default config;