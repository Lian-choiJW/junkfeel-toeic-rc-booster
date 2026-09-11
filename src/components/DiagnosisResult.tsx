import type { DiagnosisResult as DiagnosisResultType } from "@/types";

export function DiagnosisResult({ result }: { result: DiagnosisResultType }) {
  return (
    <section className="rounded-md border border-blue-200 bg-white p-5 shadow-soft">
      <p className="text-sm font-black text-ocean">{result.level}</p>
      <h2 className="mt-2 text-2xl font-black text-ink">RC 약점 진단 결과</h2>
      <p className="mt-3 leading-7 text-slate-700">{result.summary}</p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div>
          <h3 className="font-black text-ink">우선순위</h3>
          <ol className="mt-3 space-y-2">
            {result.priorities.map((item) => (
              <li key={item} className="rounded-md bg-blue-50 px-3 py-2 font-semibold text-blue-900">
                {item}
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h3 className="font-black text-ink">추천 루틴</h3>
          <ul className="mt-3 space-y-2">
            {result.routine.map((item) => (
              <li key={item} className="rounded-md bg-slate-50 px-3 py-2 text-sm font-semibold leading-6 text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
