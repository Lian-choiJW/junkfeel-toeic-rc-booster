import type { ChoiceKey } from "@/types";

export function AnswerExplanation({
  selected,
  answer,
  correct,
  wrong,
  point
}: {
  selected: ChoiceKey | "";
  answer: ChoiceKey;
  correct: string;
  wrong: Record<ChoiceKey, string>;
  point?: string;
}) {
  if (!selected) return null;

  return (
    <section className="mt-3 border border-line bg-slate-50 p-3">
      <p className="font-black text-ink">정답: {answer}</p>
      <p className="mt-2 leading-7 text-slate-700">{correct}</p>
      <div className="mt-3 grid gap-2">
        {(Object.keys(wrong) as ChoiceKey[]).map((key) => (
          <p key={key} className={`border border-line px-3 py-2 text-sm ${key === answer ? "bg-green-50 text-green-900" : "bg-white text-slate-600"}`}>
            {key}. {wrong[key]}
          </p>
        ))}
      </div>
      {point ? <p className="mt-3 border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-semibold text-amber">{point}</p> : null}
    </section>
  );
}
