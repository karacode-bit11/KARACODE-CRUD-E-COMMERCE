# Cara pasang

1. Salin semua folder ini ke project `my-app` (timpa `app/layout.tsx`, `app/globals.css`, `app/page.tsx`).
2. Install driver PostgreSQL:
   npm i pg
   npm i -D @types/pg
3. Buat database lalu jalankan schema:
   createdb myapp
   psql myapp -f db/schema.sql
4. Salin `.env.example` menjadi `.env.local` dan sesuaikan `DATABASE_URL`.
5. npm run dev  ->  buka http://localhost:3000 (toko) dan /admin (CRUD)
