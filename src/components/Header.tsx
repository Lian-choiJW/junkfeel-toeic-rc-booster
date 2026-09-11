import Link from "next/link";

const nav = [
  { href: "/diagnosis", label: "Score" },
  { href: "/study", label: "Workbook" },
  { href: "/blog", label: "Notes" },
  { href: "/admin", label: "Data" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-300 bg-slate-100">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-3 py-2">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-normal text-slate-800">
          <span className="grid h-6 w-6 place-items-center rounded-sm bg-ocean text-xs font-bold text-white">RC</span>
          <span>RC Workbook</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-1 text-xs font-semibold text-slate-600">
          {nav.map((item) => (
            <Link key={item.href} className="rounded-sm border border-transparent px-3 py-1.5 hover:border-slate-300 hover:bg-white hover:text-slate-900" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
