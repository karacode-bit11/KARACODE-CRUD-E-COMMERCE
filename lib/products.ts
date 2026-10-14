import { pool } from "./db";

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  image_url: string | null;
  created_at: Date;
};

export type ProductInput = Omit<Product, "id" | "created_at">;

export async function getProducts(
  filter: { q?: string; category?: string } = {},
): Promise<Product[]> {
  const where: string[] = [];
  const params: string[] = [];

  if (filter.q) {
    params.push(`%${filter.q}%`);
    where.push(
      `(name ILIKE $${params.length} OR description ILIKE $${params.length})`,
    );
  }
  if (filter.category) {
    params.push(filter.category);
    where.push(`category = $${params.length}`);
  }

  const sql = `SELECT * FROM products ${
    where.length ? "WHERE " + where.join(" AND ") : ""
  } ORDER BY created_at DESC, id DESC`;

  const { rows } = await pool.query<Product>(sql, params);
  return rows;
}

export async function getProduct(id: number): Promise<Product | null> {
  const { rows } = await pool.query<Product>(
    "SELECT * FROM products WHERE id = $1",
    [id],
  );
  return rows[0] ?? null;
}

export async function getCategories(): Promise<string[]> {
  const { rows } = await pool.query<{ category: string }>(
    "SELECT DISTINCT category FROM products ORDER BY category",
  );
  return rows.map((r) => r.category);
}

export async function insertProduct(p: ProductInput) {
  await pool.query(
    `INSERT INTO products (name, description, price, stock, category, image_url)
     VALUES ($1,$2,$3,$4,$5,$6)`,
    [p.name, p.description, p.price, p.stock, p.category, p.image_url],
  );
}

export async function editProduct(id: number, p: ProductInput) {
  await pool.query(
    `UPDATE products
     SET name=$2, description=$3, price=$4, stock=$5, category=$6, image_url=$7
     WHERE id=$1`,
    [id, p.name, p.description, p.price, p.stock, p.category, p.image_url],
  );
}

export async function removeProduct(id: number) {
  await pool.query("DELETE FROM products WHERE id = $1", [id]);
}
