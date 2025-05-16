// import { updatePrimaryPalette, palette, definePreset, $dt  } from '@primeuix/themes';
// import Aura from "@primeuix/themes/aura";
// import PrimeVue from 'primevue/config';
// import app from "~/app.vue";
// import type {PaletteDesignToken} from "@primeuix/themes/types";
//
// export function useTheme() {
// 	const primaryPalette: PaletteDesignToken = palette('#2B59C3') as PaletteDesignToken;
//
// 	// const MyPreset = definePreset(Aura, {
// 	// 	semantic: {
// 	// 		primary: primaryPalette
// 	// 	}
// 	// });
//
// 	console.log(primaryPalette)
// 	// updatePrimaryPalette(primaryPalette)
//
// 	const primaryColor = $dt('primary.color');
// 	console.log(primaryColor)
// }
//
//
// // const primaryColor = $dt('primary.color');
// /*
//     primaryColor: {
//         name: '--primary-color',
//         variable: 'var(--p-primary-color)',
//         value: {
//         light: {
//             value: '#10b981',
//             paths: {
//                 name: 'semantic.primary.color',
//                 binding: {
//                     name: 'primitive.emerald.500'
//                 }
//             }
//         },
//         dark: {
//             value: '#34d399',
//             paths: {
//                 name: 'semantic.primary.color',
//                 binding: {
//                     name: 'primitive.emerald.400'
//                 }
//             }
//         }
//     }
// }
// */


import {updatePreset, palette} from '@primeuix/themes';
import type {PaletteDesignToken} from "@primeuix/themes/types";
import Aura from '@primeuix/themes/aura';

const primaryPalette: PaletteDesignToken = palette('#2B59C3') as PaletteDesignToken;
const secondaryPalette: PaletteDesignToken = palette('#BC2224') as PaletteDesignToken;

const MyPreset = updatePreset(Aura, {
	semantic: {
		primary: primaryPalette,
	},
	components: {
		button: {
			colorScheme: {
				light: {
					root: {
						secondary: {
							background: secondaryPalette["500"],
							color: secondaryPalette["100"]
						}
					}
				}
			}
		}
	}
});

export default {
	preset: MyPreset,
	options: {
		// darkModeSelector: '.p-dark'
	}
};
