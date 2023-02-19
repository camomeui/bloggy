import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import { generateScopedName, hash } from "@camome/utils";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-paper.pages.dev/",
  integrations: [react(), sitemap()],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    extendDefaultPlugins: true,
  },
  vite: {
    ssr: {
      noExternal: ["@camome/core"],
    },
    css: {
      modules: {
        generateScopedName(name, filename) {
          // @camome/core depends on static class names
          // but your own module classes won't.
          if (!filename.match(/@camome\/core/)) {
            // Whatever.
            return name + "-" + hash(filename);
          }
          return generateScopedName(name, filename);
        },
      },
    },
  },
});
