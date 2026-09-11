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
    <section className="mt-4 rounded-md border border-line bg-slate-50 p-4">
      <p className="font-black text-ink">정답: {answer}</p>
      <p className="mt-2 leading-7 text-slate-700">{correct}</p>
      <div className="mt-3 grid gap-2">
        {(Object.keys(wrong) as ChoiceKey[]).map((key) => (
          <p key={key} className={`rounded-md px-3 py-2 text-sm ${key === answer ? "bg-blue-50 text-blue-800" : "bg-white text-slate-600"}`}>
            {key}. {wrong[key]}
          </p>
        ))}
      </div>
      {point ? <p className="mt-3 rounded-md bg-amber-50 px-3 py-2 text-sm font-semibold text-amber">{point}</p> : null}
    </section>
  );
}
