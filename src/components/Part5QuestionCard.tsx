"use client";

import { useState } from "react";
import { saveStudyResult, saveWrongAnswer } from "@/lib/localStorage";
import { isCorrect, nextReviewDate } from "@/lib/scoring";
import type { ChoiceKey, Part5Question } from "@/types";
import { AnswerExplanation } from "./AnswerExplanation";

export function Part5QuestionCard({ question, onNext, onAnswered }: { question: Part5Question; onNext: () => void; onAnswered: () => void }) {
  const [selected, setSelected] = useState<ChoiceKey | "">("");
  const [checked, setChecked] = useState(false);

  const check = () => {
    if (!selected) return;
    const correct = isCorrect(selected, question.answer);
    const learningTags = [...question.tags, question.anchorType].filter(Boolean) as string[];
    saveStudyResult({ id: `${question.id}-${Date.now()}`, date: new Date().toISOString(), part: "part5", itemId: question.id, isCorrect: correct, tags: learningTags });
    if (!correct) {
      saveWrongAnswer({
        id: `wrong-${question.id}-${Date.now()}`,
        date: new Date().toISOString(),
        part: "part5",
        itemId: question.id,
        question: question.question,
        userAnswer: selected,
        correctAnswer: question.answer,
        errorType: question.anchorType || question.tags[0] || "문장 구조 파악 실패",
        reviewDueDate: nextReviewDate()
      });
    }
    setChecked(true);
    onAnswered();
  };

  return (
    <section className="sheet-panel">
      <div className="sheet-heading">{question.type} · {question.difficulty}</div>
      <div className="m-3 grid gap-3 border border-line bg-slate-50 p-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="border border-line bg-white px-2 py-1 text-xs font-bold text-slate-700">7-Anchor</span>
          <span className="text-sm font-bold text-slate-900">{question.anchorType || "문장 구조"}</span>
          {question.timeTargetSeconds ? <span className="text-xs font-bold text-slate-600">목표 {question.timeTargetSeconds}초</span> : null}
        </div>
        {question.fastRule ? <p className="text-sm font-semibold leading-6 text-slate-700">{question.fastRule}</p> : null}
        {question.anchorChecklist?.length ? (
          <ol className="grid gap-1 text-sm font-semibold text-slate-700">
            {question.anchorChecklist.map((item, index) => (
              <li key={item}>{index + 1}. {item}</li>
            ))}
          </ol>
        ) : null}
      </div>
      <h2 className="border-y border-line bg-white px-3 py-3 text-base font-semibold leading-7 text-ink">{question.question}</h2>
      <div className="grid gap-0 p-3">
        {(Object.keys(question.choices) as ChoiceKey[]).map((key) => (
          <button
            key={key}
            className={`focus-ring border border-line px-3 py-2 text-left text-sm font-semibold ${selected === key ? "bg-green-50 text-green-900" : "bg-white text-slate-700 hover:bg-slate-50"}`}
            onClick={() => {
              setSelected(key);
              setChecked(false);
            }}
          >
            {key}. {question.choices[key]}
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
          <AnswerExplanation selected={selected} answer={question.answer} correct={question.explanationCorrect} wrong={question.explanationWrong} point={question.grammarPoint} />
          {(question.svtLogic || question.paraphrasing || question.collocation) ? (
            <section className="mt-3 border border-line bg-white p-3">
              {question.svtLogic ? (
                <div>
                  <h3 className="font-black text-ink">S-V-T 소거</h3>
                  <div className="mt-3 grid gap-2 text-sm font-semibold text-slate-700">
                    <p className="border border-line bg-slate-50 px-3 py-2">1. 수: {question.svtLogic.step1Number}</p>
                    <p className="border border-line bg-slate-50 px-3 py-2">2. 태: {question.svtLogic.step2Voice}</p>
                    <p className="border border-line bg-slate-50 px-3 py-2">3. 시제: {question.svtLogic.step3Tense}</p>
                  </div>
                </div>
              ) : null}
              <div className="mt-3 flex flex-wrap gap-2">
                {question.paraphrasing ? <span className="border border-line bg-slate-50 px-3 py-2 text-sm font-bold text-slate-700">{question.paraphrasing}</span> : null}
                {question.collocation ? <span className="border border-line bg-green-50 px-3 py-2 text-sm font-bold text-green-900">{question.collocation}</span> : null}
              </div>
            </section>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
