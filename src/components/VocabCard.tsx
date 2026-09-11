"use client";

import { useState } from "react";
import type { VocabItem } from "@/types";
import { HiddenTranslation } from "./HiddenTranslation";

export function VocabCard({ item, onNext }: { item: VocabItem; onNext: () => void }) {
  const [showMeaning, setShowMeaning] = useState(false);

  return (
    <section className="rounded-md border border-line bg-white p-5 shadow-soft">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-black text-ocean">{item.topic} · {item.level}</p>
          <h2 className="mt-1 text-4xl font-black text-ink">{item.word}</h2>
          <p className="mt-1 text-sm font-bold text-slate-500">{item.pos}</p>
        </div>
        <button className="focus-ring rounded-md border border-line px-3 py-2 text-sm font-bold hover:bg-slate-50" onClick={() => setShowMeaning((current) => !current)}>
          {showMeaning ? "뜻 숨기기" : "뜻 보기"}
        </button>
      </div>
      {showMeaning ? <p className="mt-4 rounded-md bg-blue-50 px-4 py-3 text-xl font-black text-blue-900">{item.meaningKo}</p> : null}
      <div className="mt-5 rounded-md border border-line bg-slate-50 p-4">
        <p className="font-semibold leading-7 text-slate-800">{item.exampleEn}</p>
        <HiddenTranslation text={item.exampleKo} />
      </div>
      {item.collocation ? <p className="mt-4 text-sm font-bold text-mint">덩어리 표현: {item.collocation}</p> : null}
      {item.businessContext ? <p className="mt-2 rounded-md bg-slate-50 px-3 py-2 text-sm font-semibold leading-6 text-slate-600">{item.businessContext}</p> : null}
      {item.relatedChunks?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {item.relatedChunks.map((chunk) => (
            <span key={chunk} className="rounded-md border border-line bg-white px-2 py-1 text-xs font-bold text-slate-600">
              {chunk}
            </span>
          ))}
        </div>
      ) : null}
      <div className="mt-5 flex flex-wrap gap-3">
        <button className="focus-ring rounded-md bg-ocean px-4 py-2 font-bold text-white hover:bg-blue-700" onClick={onNext}>다음 단어</button>
        <button className="focus-ring rounded-md border border-line px-4 py-2 font-bold text-slate-700 hover:bg-slate-50" onClick={() => setShowMeaning(false)}>퀴즈 풀기</button>
      </div>
    </section>
  );
}
