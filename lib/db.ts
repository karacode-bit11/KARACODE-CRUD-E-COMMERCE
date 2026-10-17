import { Pool } from "pg";

const g = globalThis as unknown as { __pgPool?: Pool };
const url = process.env.DATABASE_URL ?? "";
const isLocal = url.includes("localhost") || url.includes("127.0.0.1");

export const pool =
  g.__pgPool ??
  new Pool({
    connectionString: url,
    ssl: isLocal ? false : { rejectUnauthorized: false },
    max: 5,
  });

if (process.env.NODE_ENV !== "production") g.__pgPool = pool;