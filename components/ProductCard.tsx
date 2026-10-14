import type { CSSProperties } from "react";
import type { Product } from "@/lib/products";
import { rupiah } from "@/lib/format";

export default function ProductCard({ p, i }: { p: Product; i: number }) {
  const soldOut = p.stock === 0;

  return (
    <article
      className="glass gborder gborder-live lift rise group flex flex-col p-2"
      style={{ "--i": i } as CSSProperties}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.1rem]">
        {p.image_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={p.image_url}
            alt={p.name}
            loading="lazy"
            className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="ph transition-transform duration-700 group-hover:scale-110">
            {p.name.charAt(0)}
          </div>
        )}
        <span className="glass absolute left-3 top-3 rounded-full px-3 py-1 text-xs">
          {p.category}
        </span>
        {soldOut && (
          <span className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs text-red-300">
            Stok habis
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-lg font-semibold leading-snug">{p.name}</h3>
        <p className="line-clamp-2 text-sm text-blue-100/60">{p.description}</p>
        <div className="mt-auto flex items-end justify-between pt-3">
          <span className="text-xl font-bold text-white">{rupiah(p.price)}</span>
          <span className="text-xs text-blue-200/60">
            {soldOut ? "Tidak tersedia" : `Sisa ${p.stock}`}
          </span>
        </div>
      </div>
    </article>
  );
}
