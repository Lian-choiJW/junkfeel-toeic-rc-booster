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
    <section className="rounded-md border border-line bg-white p-5 shadow-soft">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-black text-ink">오답노트</h2>
          <p className="mt-1 text-sm font-semibold text-slate-500">틀린 문제는 자동 저장됩니다.</p>
        </div>
        <button className="focus-ring rounded-md border border-line px-3 py-2 text-sm font-bold hover:bg-slate-50" onClick={() => {
          clearWrongAnswers();
          refresh();
        }}>전체 삭제</button>
      </div>
      <div className="mt-5 grid gap-3">
        {items.length === 0 ? <p className="rounded-md bg-slate-50 p-4 font-semibold text-slate-600">아직 저장된 오답이 없습니다.</p> : null}
        {items.map((item) => (
          <article key={item.id} className="rounded-md border border-line bg-slate-50 p-4">
            <p className="text-sm font-black text-ocean">{item.part} · {item.errorType} · 복습일 {item.reviewDueDate}</p>
            <h3 className="mt-2 font-black text-ink">{item.question}</h3>
            <p className="mt-2 text-sm text-slate-600">내 답: {item.userAnswer} / 정답: {item.correctAnswer}</p>
            <div className="mt-3 flex gap-2">
              <button className="focus-ring rounded-md bg-ocean px-3 py-2 text-sm font-bold text-white">다시 풀기</button>
              <button className="focus-ring rounded-md border border-line px-3 py-2 text-sm font-bold hover:bg-white" onClick={() => {
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
