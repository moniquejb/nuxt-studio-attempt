// https://nuxt.com/docs/api/configuration/nuxt-config
// import tailwindcss from "@tailwindcss/vite";
// import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
	compatibilityDate: '2025-05-12',
	devtools: {enabled: true},

	modules: [
		'@nuxt/eslint',
		'@nuxt/fonts',
		'@nuxt/icon',
		'@nuxt/scripts',
		// '@primevue/nuxt-module'
		'@nuxt/test-utils',
		'@nuxthq/studio',
		'@nuxt/content'
	],

	// extends: [
	// 	process.env.BRAND_ID ? './layers/' + process.env.BRAND_ID : '',
	// 	'./layers/base'
	// ],

	runtimeConfig: {
		public: {
			brandId: process.env.BRAND_ID
		}
	},

	// css: ['@/assets/css/main.css'],
	// vite: {
	// 	plugins: [
	// 		tailwindcss(),
	// 	],
	// },
	// primevue: {
	// 	options: {
	// 		theme: {
	// 			preset: Aura
	// 		}
	// 	}
	// },
	// build: {
	// 	transpile: ['primevue']
	// }
})