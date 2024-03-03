import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
			routes: {
				include: ['/*'],
				exclude: ['<all>']
			}
		}),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/beaugoodwin' : '',
    }
  },
  preprocess: vitePreprocess()
};
export default config;