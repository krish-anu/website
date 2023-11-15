import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { defaultLang } from "./src/i18n/ui";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), react()],
	redirects: {
		"/": `/${defaultLang}/`,
	},
});
