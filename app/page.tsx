import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getCategories, getProducts } from "@/lib/products";

export const dynamic = "force-dynamic";

type SP = Promise<{ q?: string; category?: string }>;

export default async function Home({ searchParams }: { searchParams: SP }) {
  const { q, category } = await searchParams;
  const [products, categories] = await Promise.all([
    getProducts({ q, category }),
    getCategories(),
  ]);

  const href = (cat?: string) => {
    const sp = new URLSearchParams();
    if (q) sp.set("q", q);
    if (cat) sp.set("category", cat);
    const s = sp.toString();
    return s ? `/?${s}` : "/";
  };

  return (
    <>
      <section className="rise mx-auto max-w-2xl text-center" style={{ "--i": 0 } as React.CSSProperties}>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Belanja gak jelas <span className="shine-text">gabut</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-blue-100/60">
          Pilih produk asal saja, cari dengan asal, dan tanggung jawab masing masing.
        </p>

        <form action="/" className="glass gborder gborder-live mx-auto mt-8 flex gap-2 rounded-full p-2">
          {category && <input type="hidden" name="category" value={category} />}
          <input
            name="q"
            defaultValue={q}
            placeholder="Cari produk…"
            className="min-w-0 flex-1 bg-transparent px-4 text-white outline-none placeholder:text-blue-200/40"
          />
          <button className="btn btn-primary">Cari</button>
        </form>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Link href={href()} className="chip" data-active={!category}>Semua</Link>
          {categories.map((c) => (
            <Link key={c} href={href(c)} className="chip" data-active={category === c}>
              {c}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((p, i) => (
          <ProductCard key={p.id} p={p} i={i} />
        ))}
      </section>

      {products.length === 0 && (
        <p className="glass gborder rise mx-auto mt-10 max-w-md p-8 text-center text-blue-100/70">
          Tidak ada produk yang cocok. Coba kata kunci lain atau pilih kategori Semua.
        </p>
      )}
    </>
  );
}
