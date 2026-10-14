"use client";

export default function DeleteButton({
  action,
  name,
}: {
  action: () => Promise<void>;
  name: string;
}) {
  return (
    <form
      action={action}
      onSubmit={(e) => {
        if (!confirm(`Hapus "${name}"? Tindakan ini tidak bisa dibatalkan.`)) {
          e.preventDefault();
        }
      }}
    >
      <button className="btn btn-danger !px-4 !py-2">Hapus</button>
    </form>
  );
}
