import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "London Haze",
      social: {
        github: "https://github.com/lachlanjc/wearable-air-quality",
      },
      tableOfContents: false,
    }),
  ],
});
