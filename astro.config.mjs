import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { defaultLang } from "./src/i18n/ui";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), react()],
	output: "hybrid",
	redirects: {
		"/": `/${defaultLang}/`,
	},
	adapter: netlify(),
	site: "https://astounding-brigadeiros-506019.netlify.app",
});
