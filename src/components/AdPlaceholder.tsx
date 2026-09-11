export function AdPlaceholder({ label = "Ad Placeholder" }: { label?: string }) {
  return (
    <aside className="flex min-h-24 items-center justify-center rounded-md border border-dashed border-blue-200 bg-blue-50/70 px-4 py-6 text-center text-sm font-semibold text-blue-700">
      {label}
    </aside>
  );
}
