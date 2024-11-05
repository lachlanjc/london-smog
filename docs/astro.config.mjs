import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Wearable Air Quality",
      social: {
        github: "https://github.com/lachlanjc/wearable-air-quality",
      },
      tableOfContents: false,
    }),
  ],
});