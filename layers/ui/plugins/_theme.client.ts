// // // plugins/theme.client.ts
// import { useTheme } from '@/layers/ui/composables/useTheme'
// //
// export default defineNuxtPlugin(async (nuxtApp) => {
// // 	const { setTheme } = useTheme()
// 	useTheme()
// //
// // 	// Example API call to fetch the theme (adjust for your actual API)
// // 	// const { data } = await useFetch('/api/theme?brand=brand-name', { server: false })
// //
// // 	const fakeFetchTheme = {
// // 		colors: {
// // 			primary: '#2B59C3',
// // 			secondary: '#BC2224'
// // 		},
// // 		font: {
// // 			family: 'Inter, sans-serif',
// // 			size: '16px'
// // 		},
// // 		borderRadius: '0.5rem',
// // 		spacing: {
// // 			padding: '1rem',
// // 			margin: '1rem'
// // 		}
// // 	}
// //
// // 	if (fakeFetchTheme) {
// // 		setTheme(fakeFetchTheme) // Set theme in state and apply it
// // 		// Inject the CSS variables into the head of the page for SSR
// // 		const themeVars = fakeFetchTheme
// // 		const cssVars = `
// //       --color-primary: ${themeVars.colors.primary};
// //       --color-secondary: ${themeVars.colors.secondary};
// //       --primary-color: ${themeVars.colors.primary};
// //       --primary-color-text: #ffffff;
// //       --font-family: ${themeVars.font.family};
// //       --border-radius: ${themeVars.borderRadius};
// //       --spacing-padding: ${themeVars.spacing.padding};
// //       --spacing-margin: ${themeVars.spacing.margin};
// //     `
// // 		const styleTag = document.createElement('style')
// // 		styleTag.innerHTML = `:root { ${cssVars} }`
// // 		document.head.appendChild(styleTag)
// // 	}
// })
