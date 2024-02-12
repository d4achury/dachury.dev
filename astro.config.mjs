import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

const SERVER_PORT = 4321;
const URL= "https://d4achury.github.io"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: URL,
  base: '/d4achury.dev',
});