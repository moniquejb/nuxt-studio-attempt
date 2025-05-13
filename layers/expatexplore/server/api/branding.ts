import type {Branding} from "~/layers/base/types/branding";
import { branding as base } from "~/layers/base/server/api/branding";

export const branding: Branding = {
  ...base,
  id: 'expatexplore',
  name: 'Expat Explore',
  logo: {
    srcUrl: 'https://images.ctfassets.net/zggpk8714k6l/59Kv5bV2pPNNPjWBrJ6nhD/f175d6514276859b3d42167f4093ed8d/Logo_2.svg',
    alt: 'Expat Explore logo',
    url: 'https://expatexplore.com/'
  },
}

export default defineEventHandler(async (event) => {
  return branding;
});