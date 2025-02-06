import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_xX34lEhskQid@ep-little-tooth-a83mhc98-pooler.eastus2.azure.neon.tech/neondb?sslmode=require",
  },

});

