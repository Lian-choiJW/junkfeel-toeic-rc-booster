"use client";

import { useState } from "react";
import { saveStudyResult, saveWrongAnswer } from "@/lib/localStorage";
import { isCorrect, nextReviewDate } from "@/lib/scoring";
import type { ChoiceKey, Part67Question } from "@/types";
import { AnswerExplanation } from "./AnswerExplanation";
import { HiddenTranslation } from "./HiddenTranslation";

export function Part67PassageCard({ item, onNext, onAnswered }: { item: Part67Question; onNext: () => void; onAnswered: () => void }) {
  const [selected, setSelected] = useState<ChoiceKey | "">("");
  const [checked, setChecked] = useState(false);

  const check = () => {
    if (!selected) return;
    const correct = isCorrect(selected, item.answer);
    const learningTags = [...item.tags, item.questionFocus].filter(Boolean) as string[];
    saveStudyResult({ id: `${item.id}-${Date.now()}`, date: new Date().toISOString(), part: "part67", itemId: item.id, isCorrect: correct, tags: learningTags });
    if (!correct) {
      saveWrongAnswer({
        id: `wrong-${item.id}-${Date.now()}`,
        date: new Date().toISOString(),
        part: "part67",
        itemId: item.id,
        question: item.question,
        userAnswer: selected,
        correctAnswer: item.answer,
        errorType: item.questionFocus || item.tags[0] || "패러프레이징 실패",
        reviewDueDate: nextReviewDate()
      });
    }
    setChecked(true);
    onAnswered();
  };

  return (
    <section className="sheet-panel">
      <div className="sheet-heading">Part {item.part} · {item.passageType} · {item.difficulty}</div>
      {item.scanStrategy ? (
        <div className="m-3 border border-line bg-slate-50 p-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="border border-line bg-white px-2 py-1 text-xs font-bold text-slate-700">Scan</span>
            <span className="text-sm font-bold text-slate-900">{item.questionFocus || "근거 찾기"}</span>
          </div>
          <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">{item.scanStrategy.trigger}</p>
          <div className="mt-3 grid gap-0 text-sm font-semibold text-slate-700 md:grid-cols-3">
            {item.scanStrategy.who ? <p className="border border-line bg-white px-3 py-2">Who: {item.scanStrategy.who}</p> : null}
            {item.scanStrategy.why ? <p className="border border-line bg-white px-3 py-2">Why: {item.scanStrategy.why}</p> : null}
            {item.scanStrategy.what ? <p className="border border-line bg-white px-3 py-2">What: {item.scanStrategy.what}</p> : null}
          </div>
        </div>
      ) : null}
      <div className="grid gap-3 border-y border-line bg-slate-50 p-3">
        {item.passage.en.map((line, index) => (
          <div key={line}>
            <p className="font-semibold leading-7 text-slate-800">{line}</p>
            <HiddenTranslation text={item.passage.ko[index]} />
          </div>
        ))}
      </div>
      <h2 className="border-b border-line bg-white px-3 py-3 text-base font-semibold text-ink">{item.question}</h2>
      <div className="grid gap-0 p-3">
        {(Object.keys(item.choices) as ChoiceKey[]).map((key) => (
          <button
            key={key}
            className={`focus-ring border border-line px-3 py-2 text-left text-sm font-semibold ${selected === key ? "bg-green-50 text-green-900" : "bg-white text-slate-700 hover:bg-slate-50"}`}
            onClick={() => {
              setSelected(key);
              setChecked(false);
            }}
          >
            {key}. {item.choices[key]}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 border-t border-line p-3">
        <button className="focus-ring border border-ocean bg-ocean px-3 py-1.5 text-sm font-bold text-white disabled:opacity-50" disabled={!selected} onClick={check}>정답 확인</button>
        <button className="focus-ring border border-line px-3 py-1.5 text-sm font-bold hover:bg-slate-50" onClick={() => {
          setSelected("");
          setChecked(false);
          onNext();
        }}>다음 문제</button>
      </div>
      {checked ? (
        <div>
          <AnswerExplanation selected={selected} answer={item.answer} correct={item.explanationCorrect} wrong={item.explanationWrong} point={`정답 근거: ${item.evidenceSentence}`} />
          <div className="mt-3 border border-line bg-white p-3">
            <h3 className="font-black text-ink">패러프레이징</h3>
            <div className="mt-3 grid gap-2">
              {item.paraphrase.map((row) => (
                <p key={row.passageExpression} className="border border-line bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700">
                  {row.passageExpression} = {row.answerExpression} · {row.meaningKo}
                </p>
              ))}
            </div>
          </div>
          {item.linkageClues?.length ? (
            <div className="mt-3 border border-line bg-white p-3">
              <h3 className="font-black text-ink">Linkage 추적</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.linkageClues.map((clue) => (
                  <span key={clue} className="border border-line bg-green-50 px-3 py-2 text-sm font-bold text-green-900">
                    {clue}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
