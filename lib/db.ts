import { Pool } from "pg";

// Satu pool dipakai ulang agar koneksi tidak menumpuk saat hot reload.
const g = globalThis as unknown as { __pgPool?: Pool };

export const pool =
  g.__pgPool ?? new Pool({ connectionString: process.env.DATABASE_URL });

if (process.env.NODE_ENV !== "production") g.__pgPool = pool;
