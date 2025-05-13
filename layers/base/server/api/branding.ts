import type {Branding} from "~/layers/base/types/branding";

export const branding: Branding = {
  id: 'base',
  name: 'Base',
  logo: {
    srcUrl: 'https://cdn-icons-png.freepik.com/512/7353/7353541.png',
    alt: 'Base logo',
    url: ''
  },
  description: "This is a description from the base layer"
}

export default defineEventHandler(async (event) => {
  return branding;
});