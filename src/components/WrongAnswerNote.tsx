"use client";

import { useEffect, useState } from "react";
import { clearWrongAnswers, deleteWrongAnswer, getWrongAnswers } from "@/lib/localStorage";
import type { WrongAnswerItem } from "@/types";

export function WrongAnswerNote() {
  const [items, setItems] = useState<WrongAnswerItem[]>([]);

  const refresh = () => setItems(getWrongAnswers());

  useEffect(() => {
    refresh();
  }, []);

  return (
    <section className="sheet-panel">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-slate-100 px-3 py-2">
        <div>
          <h2 className="text-base font-bold text-ink">Review Log</h2>
          <p className="mt-1 text-xs font-semibold text-slate-500">틀린 문제는 자동 저장됩니다.</p>
        </div>
        <button className="focus-ring border border-line bg-white px-3 py-1.5 text-xs font-bold hover:bg-slate-50" onClick={() => {
          clearWrongAnswers();
          refresh();
        }}>전체 삭제</button>
      </div>
      <div className="grid gap-0">
        {items.length === 0 ? <p className="bg-slate-50 p-4 font-semibold text-slate-600">아직 저장된 오답이 없습니다.</p> : null}
        {items.map((item) => (
          <article key={item.id} className="border-b border-line bg-white p-3">
            <p className="text-xs font-bold text-ocean">{item.part} · {item.errorType} · 복습일 {item.reviewDueDate}</p>
            <h3 className="mt-2 font-semibold text-ink">{item.question}</h3>
            <p className="mt-2 text-sm text-slate-600">내 답: {item.userAnswer} / 정답: {item.correctAnswer}</p>
            <div className="mt-3 flex gap-2">
              <button className="focus-ring border border-ocean bg-ocean px-3 py-1.5 text-xs font-bold text-white">다시 풀기</button>
              <button className="focus-ring border border-line px-3 py-1.5 text-xs font-bold hover:bg-slate-50" onClick={() => {
                deleteWrongAnswer(item.id);
                refresh();
              }}>삭제</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
