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
    <section className="rounded-md border border-line bg-white p-5 shadow-soft">
      <p className="text-sm font-black text-ocean">{question.type} · {question.difficulty}</p>
      <div className="mt-3 grid gap-3 rounded-md border border-blue-100 bg-blue-50 p-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-md bg-white px-2 py-1 text-xs font-black text-blue-700">7-Anchor</span>
          <span className="text-sm font-black text-blue-950">{question.anchorType || "문장 구조"}</span>
          {question.timeTargetSeconds ? <span className="text-xs font-bold text-blue-700">목표 {question.timeTargetSeconds}초</span> : null}
        </div>
        {question.fastRule ? <p className="text-sm font-semibold leading-6 text-blue-900">{question.fastRule}</p> : null}
        {question.anchorChecklist?.length ? (
          <ol className="grid gap-1 text-sm font-semibold text-blue-900">
            {question.anchorChecklist.map((item, index) => (
              <li key={item}>{index + 1}. {item}</li>
            ))}
          </ol>
        ) : null}
      </div>
      <h2 className="mt-2 text-xl font-black leading-8 text-ink">{question.question}</h2>
      <div className="mt-5 grid gap-3">
        {(Object.keys(question.choices) as ChoiceKey[]).map((key) => (
          <button
            key={key}
            className={`focus-ring rounded-md border px-4 py-3 text-left font-semibold ${selected === key ? "border-ocean bg-blue-50 text-blue-900" : "border-line bg-white text-slate-700 hover:bg-slate-50"}`}
            onClick={() => {
              setSelected(key);
              setChecked(false);
            }}
          >
            {key}. {question.choices[key]}
          </button>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <button className="focus-ring rounded-md bg-ocean px-4 py-2 font-bold text-white disabled:opacity-50" disabled={!selected} onClick={check}>정답 확인</button>
        <button className="focus-ring rounded-md border border-line px-4 py-2 font-bold hover:bg-slate-50" onClick={() => {
          setSelected("");
          setChecked(false);
          onNext();
        }}>다음 문제</button>
      </div>
      {checked ? (
        <div>
          <AnswerExplanation selected={selected} answer={question.answer} correct={question.explanationCorrect} wrong={question.explanationWrong} point={question.grammarPoint} />
          {(question.svtLogic || question.paraphrasing || question.collocation) ? (
            <section className="mt-4 rounded-md border border-line bg-white p-4">
              {question.svtLogic ? (
                <div>
                  <h3 className="font-black text-ink">S-V-T 소거</h3>
                  <div className="mt-3 grid gap-2 text-sm font-semibold text-slate-700">
                    <p className="rounded-md bg-slate-50 px-3 py-2">1. 수: {question.svtLogic.step1Number}</p>
                    <p className="rounded-md bg-slate-50 px-3 py-2">2. 태: {question.svtLogic.step2Voice}</p>
                    <p className="rounded-md bg-slate-50 px-3 py-2">3. 시제: {question.svtLogic.step3Tense}</p>
                  </div>
                </div>
              ) : null}
              <div className="mt-3 flex flex-wrap gap-2">
                {question.paraphrasing ? <span className="rounded-md bg-blue-50 px-3 py-2 text-sm font-bold text-blue-900">{question.paraphrasing}</span> : null}
                {question.collocation ? <span className="rounded-md bg-teal-50 px-3 py-2 text-sm font-bold text-teal-900">{question.collocation}</span> : null}
              </div>
            </section>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
