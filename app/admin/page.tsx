import Link from "next/link";
import type { CSSProperties } from "react";
import DeleteButton from "@/components/DeleteButton";
import { deleteProduct } from "@/app/actions";
import { rupiah } from "@/lib/format";
import { getProducts } from "@/lib/products";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const products = await getProducts();

  return (
    <>
      <div className="rise flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Kelola produk</h1>
          <p className="text-sm text-blue-100/60">{products.length} produk di toko</p>
        </div>
        <Link href="/admin/new" className="btn btn-primary">+ Tambah produk</Link>
      </div>

      <ul className="mt-8 grid gap-3">
        {products.map((p, i) => (
          <li
            key={p.id}
            style={{ "--i": i } as CSSProperties}
            className="glass gborder gborder-live lift rise flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between sm:px-6"
          >
            <div className="min-w-0">
              <p className="truncate font-semibold">{p.name}</p>
              <p className="text-sm text-blue-100/60">
                {p.category} · {rupiah(p.price)} · stok {p.stock}
              </p>
            </div>
            <div className="flex gap-2">
              <Link href={`/admin/${p.id}/edit`} className="btn btn-ghost !px-4 !py-2">Ubah</Link>
              <DeleteButton action={deleteProduct.bind(null, p.id)} name={p.name} />
            </div>
          </li>
        ))}
      </ul>

      {products.length === 0 && (
        <p className="glass gborder rise mt-10 p-8 text-center text-blue-100/70">
          Belum ada produk. Klik “Tambah produk” untuk memulai.
        </p>
      )}
    </>
  );
}
