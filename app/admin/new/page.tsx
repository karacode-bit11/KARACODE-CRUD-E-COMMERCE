import ProductForm from "@/components/ProductForm";
import { createProduct } from "@/app/actions";

export default function NewProductPage() {
  return (
    <>
      <h1 className="rise mb-8 text-center text-3xl font-bold">Tambah produk</h1>
      <ProductForm action={createProduct} submitLabel="Simpan produk" />
    </>
  );
}
