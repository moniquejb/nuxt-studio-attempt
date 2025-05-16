import tailwindcss from "@tailwindcss/vite";
import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
	css: ['~/layers/ui/assets/css/main.css'],
	vite: {
		plugins: [
			tailwindcss(),
		],
	},
	modules: [
		'@primevue/nuxt-module'
	],
	primevue: {
		importTheme: { from: '~/layers/ui/composables/useTheme.ts' },
		// options: {
		// 	theme: {
		// 		preset: Aura
		// 	}
		// }
	},
	// build: {
	// 	transpile: ['primevue']
	// }
})