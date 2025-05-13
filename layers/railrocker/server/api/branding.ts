import type {Branding} from "~/layers/base/types/branding";
import { branding as base } from "~/layers/base/server/api/branding";

export const branding: Branding = {
  ...base,
  id: 'railrocker',
  name: 'Rail Rocker',
  logo: {
    srcUrl: 'https://cdn.prod.website-files.com/670cd8acc144834f4a339f7f/670e56822aeb7b6bc12409ba_RailRocker-logo.png',
    alt: 'Rail Rocker logo',
    url: 'https://www.railrocker.com/'
  },
}

export default defineEventHandler(async (event) => {
  return branding;
});