import {field, group} from '@nuxt/content/preview'

export default defineNuxtSchema({
	appConfig: {
		seo: group({
			title: 'SEO',
			description: 'SEO configuration',
			icon: 'lucide:search',
			fields: {
				title: field({
					type: 'string',
					title: 'Title',
					description: 'Title of your website (used in the preview of your website).',
					icon: 'lucide:title',
					default: 'My website',
				}),
				description: field({
					type: 'string',
					title: 'Description',
					description: 'Description of your website (used in the preview of your website).',
					icon: 'lucide:description',
					default: 'My website description',
				}),
				url: field({
					type: 'string',
					title: 'URL',
					description: 'Public URL of your website.',
					icon: 'lucide:link',
					default: 'https://mywebsite.com',
				}),
			},
		}),
	}
})