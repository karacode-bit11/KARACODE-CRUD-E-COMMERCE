"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="btn btn-primary">
      {pending && (
        <span className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
      )}
      {pending ? "Menyimpan…" : children}
    </button>
  );
}
