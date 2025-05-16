// import { defineStudioConfig from '@nuxthq/studio'
//
// export default defineStudioConfig({
// 	theme: {
// 		title: 'Brand A Studio',
// 		logo: '/logo-brand-a.svg',
// 		favicon: '/favicon-brand-a.ico',
// 		primaryColor: '#FF6600', // Optional, match Brand A colors
// 	},
// 	project: {
// 		// Optional, this is informational for Studio UI (not enforced)
// 		name: 'Brand A Website',
// 		description: 'Manage Brand A content in Nuxt Studio',
// 	},
// 	// Scope Studio to this layer's content directory (VERY important in multi-layer setup)
// 	content: {
// 		// Use relative to the layer root
// 		source: './content',
// 	},
// 	collections: {
// 		pages: {
// 			label: 'Pages',
// 			icon: 'carbon:document',
// 			path: 'pages',
// 			schema: {
// 				title: { type: 'text', label: 'Page Title', required: true },
// 				description: { type: 'textarea', label: 'Meta Description' },
// 				body: { type: 'markdown', label: 'Content', required: true },
// 			},
// 		},
// 		blog: {
// 			label: 'Blog Posts',
// 			icon: 'carbon:blog',
// 			path: 'blog',
// 			schema: {
// 				title: { type: 'text', label: 'Post Title', required: true },
// 				excerpt: { type: 'textarea', label: 'Excerpt' },
// 				date: { type: 'datetime', label: 'Publish Date', required: true },
// 				author: { type: 'text', label: 'Author' },
// 				body: { type: 'markdown', label: 'Body', required: true },
// 			},
// 		},
// 	},
// })
