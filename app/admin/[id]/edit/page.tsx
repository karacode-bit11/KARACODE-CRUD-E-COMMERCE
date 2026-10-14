import { notFound } from "next/navigation";
import ProductForm from "@/components/ProductForm";
import { updateProduct } from "@/app/actions";
import { getProduct } from "@/lib/products";

export const dynamic = "force-dynamic";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productId = Number(id);
  if (!Number.isInteger(productId)) notFound();

  const product = await getProduct(productId);
  if (!product) notFound();

  return (
    <>
      <h1 className="rise mb-8 text-center text-3xl font-bold">Ubah produk</h1>
      <ProductForm
        action={updateProduct.bind(null, product.id)}
        product={product}
        submitLabel="Simpan perubahan"
      />
    </>
  );
}
