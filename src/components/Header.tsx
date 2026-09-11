import Link from "next/link";

const nav = [
  { href: "/diagnosis", label: "점수 진단" },
  { href: "/study", label: "학습" },
  { href: "/blog", label: "블로그" },
  { href: "/admin", label: "관리" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="text-lg font-black tracking-normal text-ink">
          TOEIC RC Booster
        </Link>
        <nav className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-600">
          {nav.map((item) => (
            <Link key={item.href} className="rounded-md px-3 py-2 hover:bg-blue-50 hover:text-ocean" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
