import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://markshust.com',
	integrations: [
		mdx(),
		sitemap(),
	],
	markdown: {
		shikiConfig: {
			theme: 'github-dark',
			wrap: false,
			transformers: [
				{
					name: 'preserve-meta',
					pre(node) {
						// Preserve the meta string as a data attribute
						const meta = this.options.meta?.__raw;
						if (meta) {
							node.properties = node.properties || {};
							node.properties['data-meta'] = meta;
						}
					}
				}
			]
		}
	}
});
