import { defineConfig } from "drizzle-kit"
import dotenv from 'dotenv';

export default defineConfig({
    dialect: "postgresql", // "postgresql" | "mysql"
    schema: './src/lib/db/schema.ts',
    dbCredentials: {
        url: 'postgresql://neondb_owner:cs6Yh8TjarDb@ep-cool-mountain-a6roqdc9.us-west-2.aws.neon.tech/neondb?sslmode=require',
    }
})