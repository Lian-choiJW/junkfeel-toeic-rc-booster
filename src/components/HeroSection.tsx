import Link from "next/link";

export function HeroSection() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="space-y-6">
          <div className="inline-flex rounded-md border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-bold text-blue-700">
            무료 TOEIC RC 집중 학습
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-black leading-tight text-ink md:text-6xl">TOEIC RC Booster</h1>
            <p className="max-w-2xl text-xl font-semibold leading-relaxed text-slate-700">
              LC는 괜찮은데 RC가 발목 잡는 사람을 위한 무료 RC 집중 학습
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link className="focus-ring rounded-md bg-ocean px-5 py-3 font-bold text-white shadow-soft hover:bg-blue-700" href="/diagnosis">
              점수 진단 시작하기
            </Link>
            <Link className="focus-ring rounded-md border border-line bg-white px-5 py-3 font-bold text-ink hover:bg-slate-50" href="/study">
              바로 학습 시작하기
            </Link>
          </div>
        </div>
        <div className="rounded-md border border-line bg-slate-50 p-5 shadow-soft">
          <div className="grid gap-3">
            {[
              ["RC 305", "Part 7 근거 찾기 우선"],
              ["Part 5", "품사, 수일치, 전치사 집중"],
              ["오답노트", "틀린 태그 기반 다음 학습"]
            ].map(([title, text]) => (
              <div key={title} className="rounded-md border border-line bg-white p-4">
                <p className="text-sm font-bold text-ocean">{title}</p>
                <p className="mt-1 text-lg font-extrabold text-ink">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
