// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://aprendefrancesviajando.com",
  base: "/",
  redirects: {
    "/proyecto/": {
      status: 301,
      destination: "/sobre-nosotros/",
    },
    "/autor/": {
      status: 301,
      destination: "/sobre-nosotros/aldo-jara-pisconti/",
    },
    "/autor/aldo-jara-pisconti/": {
      status: 301,
      destination: "/sobre-nosotros/aldo-jara-pisconti/",
    },
  },
});
