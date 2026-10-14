"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  editProduct,
  insertProduct,
  removeProduct,
  type ProductInput,
} from "@/lib/products";

function parse(fd: FormData): ProductInput {
  const name = String(fd.get("name") ?? "").trim();
  if (!name) throw new Error("Nama produk wajib diisi.");

  const int = (key: string) =>
    Math.max(0, Math.round(Number(fd.get(key)) || 0));

  return {
    name,
    description: String(fd.get("description") ?? "").trim(),
    price: int("price"),
    stock: int("stock"),
    category: String(fd.get("category") ?? "").trim() || "Umum",
    image_url: String(fd.get("image_url") ?? "").trim() || null,
  };
}

function refresh() {
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function createProduct(fd: FormData) {
  await insertProduct(parse(fd));
  refresh();
  redirect("/admin");
}

export async function updateProduct(id: number, fd: FormData) {
  await editProduct(id, parse(fd));
  refresh();
  redirect("/admin");
}

export async function deleteProduct(id: number) {
  await removeProduct(id);
  refresh();
}
