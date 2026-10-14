import Link from "next/link";
import type { Product } from "@/lib/products";
import SubmitButton from "./SubmitButton";

export default function ProductForm({
  action,
  product,
  submitLabel,
}: {
  action: (fd: FormData) => Promise<void>;
  product?: Product;
  submitLabel: string;
}) {
  return (
    <form action={action} className="glass gborder rise mx-auto grid max-w-2xl gap-5 p-6 sm:p-8">
      <label className="grid gap-2 text-sm">
        Nama produk
        <input name="name" required defaultValue={product?.name} className="field" placeholder="Contoh: Headphone Nocturne" />
      </label>

      <label className="grid gap-2 text-sm">
        Deskripsi
        <textarea name="description" rows={4} defaultValue={product?.description} className="field resize-none" placeholder="Ceritakan keunggulan produk" />
      </label>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          Harga (Rp)
          <input name="price" type="number" min={0} required defaultValue={product?.price} className="field" />
        </label>
        <label className="grid gap-2 text-sm">
          Stok
          <input name="stock" type="number" min={0} required defaultValue={product?.stock ?? 0} className="field" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm">
          Kategori
          <input name="category" defaultValue={product?.category} className="field" placeholder="Audio, Fashion, …" />
        </label>
        <label className="grid gap-2 text-sm">
          URL gambar (opsional)
          <input name="image_url" type="url" defaultValue={product?.image_url ?? ""} className="field" placeholder="https://…" />
        </label>
      </div>

      <div className="flex flex-wrap justify-end gap-3 pt-2">
        <Link href="/admin" className="btn btn-ghost">Batal</Link>
        <SubmitButton>{submitLabel}</SubmitButton>
      </div>
    </form>
  );
}
