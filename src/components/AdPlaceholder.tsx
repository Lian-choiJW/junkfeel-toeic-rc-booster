export function AdPlaceholder({ label = "Ad Placeholder" }: { label?: string }) {
  return (
    <aside className="flex min-h-16 items-center justify-center border border-dashed border-slate-300 bg-slate-50 px-4 py-4 text-center text-xs font-semibold text-slate-500">
      {label}
    </aside>
  );
}
