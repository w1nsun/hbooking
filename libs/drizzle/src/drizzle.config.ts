import { defineConfig } from 'drizzle-kit';

export const drizzleConfig = defineConfig({
  dialect: 'postgresql',
  schema: './schema/index.ts',
  out: './migrations',
  verbose: true,
  strict: true,
});
