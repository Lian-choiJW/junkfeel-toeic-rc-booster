import Link from "next/link";

export function BlogCard({ title, excerpt, body }: { title: string; excerpt: string; body: string }) {
  return (
    <article className="rounded-md border border-line bg-white p-5 shadow-soft">
      <h2 className="text-xl font-black text-ink">{title}</h2>
      <p className="mt-2 font-semibold leading-relaxed text-slate-700">{excerpt}</p>
      <p className="mt-4 leading-7 text-slate-600">{body}</p>
      <Link className="mt-5 inline-flex rounded-md bg-ocean px-4 py-2 font-bold text-white hover:bg-blue-700" href="/study">
        무료 RC 학습 시작하기
      </Link>
    </article>
  );
}
