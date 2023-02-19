import { defineConfig } from "@camome/system";

const config = defineConfig({
  themes: {
    common: {
      color: {
        code: {
          block: (get) => get("color.neutral.8"),
          inline: (get) => get("color.surface.2")
        }
      }
    }
  }
});

export default config;