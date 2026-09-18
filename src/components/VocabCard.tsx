"use client";

import { useEffect, useMemo, useState } from "react";
import { vocabBank } from "@/data/vocabBank";
import { saveStudyResult, saveWrongAnswer } from "@/lib/localStorage";
import { isCorrect, nextReviewDate } from "@/lib/scoring";
import type { ChoiceKey, VocabItem } from "@/types";
import { HiddenTranslation } from "./HiddenTranslation";

export function VocabCard({ item, onNext, onAnswered }: { item: VocabItem; onNext: () => void; onAnswered: () => void }) {
  const [showMeaning, setShowMeaning] = useState(false);
  const [quizMode, setQuizMode] = useState(false);
  const [selected, setSelected] = useState<ChoiceKey | "">("");
  const [checked, setChecked] = useState(false);
  const choices = useMemo(() => buildVocabChoices(item), [item]);

  useEffect(() => {
    setShowMeaning(false);
    setQuizMode(false);
    setSelected("");
    setChecked(false);
  }, [item.id]);

  const check = () => {
    if (!selected) return;

    const correct = isCorrect(selected, choices.answer);
    saveStudyResult({
      id: `${item.id}-${Date.now()}`,
      date: new Date().toISOString(),
      part: "vocab",
      itemId: item.id,
      isCorrect: correct,
      tags: item.tags
    });

    if (!correct) {
      saveWrongAnswer({
        id: `wrong-${item.id}-${Date.now()}`,
        date: new Date().toISOString(),
        part: "vocab",
        itemId: item.id,
        question: `${item.word} 뜻 고르기`,
        userAnswer: `${selected}. ${choices.options[selected]}`,
        correctAnswer: `${choices.answer}. ${item.meaningKo}`,
        errorType: item.topic,
        reviewDueDate: nextReviewDate()
      });
    }

    setChecked(true);
    onAnswered();
  };

  return (
    <section className="sheet-panel">
      <div className="sheet-heading">Vocab Record</div>
      <div className="flex flex-wrap items-start justify-between gap-3 p-3">
        <div>
          <p className="text-xs font-bold text-slate-500">{item.topic} · {item.level}</p>
          <h2 className="mt-1 text-2xl font-semibold text-ink">{item.word}</h2>
          <p className="mt-1 text-xs font-semibold text-slate-500">{item.pos}</p>
        </div>
        <button className="focus-ring border border-line px-3 py-1.5 text-xs font-bold hover:bg-slate-50" onClick={() => setShowMeaning((current) => !current)}>
          {showMeaning ? "뜻 숨기기" : "뜻 보기"}
        </button>
      </div>
      {showMeaning ? <p className="border-y border-line bg-green-50 px-3 py-2 text-base font-bold text-green-900">{item.meaningKo}</p> : null}
      <div className="border-b border-line bg-slate-50 p-3">
        <p className="font-semibold leading-7 text-slate-800">{item.exampleEn}</p>
        <HiddenTranslation text={item.exampleKo} />
      </div>
      <div className="p-3">
      {item.collocation ? <p className="text-sm font-bold text-mint">덩어리 표현: {item.collocation}</p> : null}
      {item.businessContext ? <p className="mt-2 border border-line bg-slate-50 px-3 py-2 text-sm font-semibold leading-6 text-slate-600">{item.businessContext}</p> : null}
      {item.relatedChunks?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {item.relatedChunks.map((chunk) => (
            <span key={chunk} className="border border-line bg-white px-2 py-1 text-xs font-bold text-slate-600">
              {chunk}
            </span>
          ))}
        </div>
      ) : null}
      {quizMode ? (
        <div className="mt-4 border border-line bg-white">
          <div className="border-b border-line bg-slate-50 px-3 py-2">
            <p className="text-xs font-bold text-slate-500">Vocab Quiz</p>
            <h3 className="mt-1 text-base font-bold text-ink">"{item.word}"의 가장 알맞은 뜻은?</h3>
          </div>
          <div className="grid gap-0 p-3">
            {(Object.keys(choices.options) as ChoiceKey[]).map((key) => (
              <button
                key={key}
                className={`focus-ring border border-line px-3 py-2 text-left text-sm font-semibold ${selected === key ? "bg-green-50 text-green-900" : "bg-white text-slate-700 hover:bg-slate-50"}`}
                onClick={() => {
                  setSelected(key);
                  setChecked(false);
                }}
              >
                {key}. {choices.options[key]}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 border-t border-line p-3">
            <button className="focus-ring border border-ocean bg-ocean px-3 py-1.5 text-sm font-bold text-white disabled:opacity-50" disabled={!selected} onClick={check}>정답 확인</button>
            <button className="focus-ring border border-line px-3 py-1.5 text-sm font-bold hover:bg-slate-50" onClick={() => {
              setSelected("");
              setChecked(false);
              onNext();
            }}>다음 단어</button>
          </div>
          {checked ? (
            <div className={`border-t border-line px-3 py-3 text-sm font-bold ${selected === choices.answer ? "bg-green-50 text-green-900" : "bg-red-50 text-red-900"}`}>
              {selected === choices.answer ? "정답입니다." : `오답입니다. 정답은 ${choices.answer}. ${item.meaningKo}`}
              <p className="mt-2 font-semibold text-slate-700">예문 덩어리: {item.collocation || item.word}</p>
            </div>
          ) : null}
        </div>
      ) : null}
      <div className="mt-4 flex flex-wrap gap-2">
        <button className="focus-ring border border-ocean bg-ocean px-3 py-1.5 text-sm font-bold text-white hover:bg-green-800" onClick={onNext}>다음 단어</button>
        <button className="focus-ring border border-line px-3 py-1.5 text-sm font-bold text-slate-700 hover:bg-slate-50" onClick={() => {
          setShowMeaning(false);
          setQuizMode((current) => !current);
          setSelected("");
          setChecked(false);
        }}>{quizMode ? "퀴즈 닫기" : "퀴즈 풀기"}</button>
      </div>
      </div>
    </section>
  );
}

function buildVocabChoices(item: VocabItem) {
  const distractors = vocabBank
    .filter((candidate) => candidate.id !== item.id && candidate.meaningKo !== item.meaningKo)
    .sort((a, b) => scoreCandidate(item, b) - scoreCandidate(item, a) || a.id.localeCompare(b.id))
    .slice(0, 3)
    .map((candidate) => candidate.meaningKo);

  const meanings = [item.meaningKo, ...distractors];
  const start = seedFromId(item.id) % meanings.length;
  const rotated = [...meanings.slice(start), ...meanings.slice(0, start)];
  const answerIndex = rotated.findIndex((meaning) => meaning === item.meaningKo);
  const keys: ChoiceKey[] = ["A", "B", "C", "D"];

  return {
    answer: keys[answerIndex],
    options: keys.reduce((acc, key, index) => {
      acc[key] = rotated[index] || item.meaningKo;
      return acc;
    }, {} as Record<ChoiceKey, string>)
  };
}

function scoreCandidate(item: VocabItem, candidate: VocabItem) {
  let score = 0;
  if (candidate.topic === item.topic) score += 4;
  if (candidate.level === item.level) score += 2;
  if (candidate.pos === item.pos) score += 1;
  return score;
}

function seedFromId(id: string) {
  return id.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
}
