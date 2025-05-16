export default defineNuxtConfig({
	app: {
		head: {
			title: 'Expat Explore Layer',
		}
	},
	modules: [
		'@nuxthq/studio',
		'@nuxt/content'
	],
	extends: [
		'../base'
	]
})