// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-05-12',
	devtools: {enabled: true},

	// future: {
	// 	compatibilityVersion: 4,
	// },

	// To re-enable _all_ Nuxt v3 behavior, set the following options:
	// srcDir: '.',
	// dir: {
	//   app: 'app'
	// },
	// experimental: {
	//   scanPageMeta: 'after-resolve',
	//   sharedPrerenderData: false,
	//   compileTemplate: true,
	//   resetAsyncDataToUndefined: true,
	//   templateUtils: true,
	//   relativeWatchPaths: true,
	//   normalizeComponentNames: false,
	//   spaLoadingTemplateLocation: 'within',
	//   parseErrorData: false,
	//   pendingWhenIdle: true,
	//   alwaysRunFetchOnKeyChange: true,
	//   defaults: {
	//     useAsyncData: {
	//       deep: true
	//     }
	//   }
	// },
	// features: {
	//   inlineStyles: true
	// },
	// unhead: {
	//   renderSSRHeadOptions: {
	//     omitLineBreaks: false
	//   }
	// },

	modules: [
		'@nuxt/eslint',
		'@nuxt/fonts',
		'@nuxt/icon',
		'@nuxt/scripts',
		'@nuxt/test-utils',
	],

	extends: [
		process.env.BRAND_ID ? './layers/' + process.env.BRAND_ID : '',
		'./layers/base'
	],

	runtimeConfig: {
		public: {
			brandId: process.env.BRAND_ID
		}
	}
})