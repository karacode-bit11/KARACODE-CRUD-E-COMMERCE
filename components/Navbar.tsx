import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed inset-x-3 top-3 z-50 mx-auto max-w-6xl sm:inset-x-6 sm:top-4">
      <nav className="glass gborder flex items-center justify-between rounded-full px-5 py-3">
        <Link href="/" className="text-lg font-bold tracking-tight transition-transform hover:scale-105">
          <span className="shine-text">Kara</span> Store
        </Link>
        <div className="flex items-center gap-2">
          <Link href="/" className="chip">Toko</Link>
          <Link href="/admin" className="chip">Kelola</Link>
        </div>
      </nav>
    </header>
  );
}
