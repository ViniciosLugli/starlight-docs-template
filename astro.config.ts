import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

// https://astro.build/config
export default defineConfig({
	base: '/docs',
	integrations: [
		starlight({
			title: 'Starlight Template',
			social: {
				github: 'https://github.com/ViniciosLugli/starlight-docs-template',
			},
			editLink: {
				baseUrl: 'https://github.com/ViniciosLugli/starlight-docs-template/tree/main',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [{ label: 'Example Guide', link: '/guides/example/' }],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			pagination: true,
			plugins: [
				starlightLinksValidator({
					errorOnRelativeLinks: false,
				}),
			],
		}),
	],
});
