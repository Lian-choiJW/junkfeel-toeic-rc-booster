"use client";

import { useState } from "react";

export function HiddenTranslation({ text }: { text: string }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="mt-2">
      <p className={`rounded-md px-3 py-2 text-sm leading-6 ${visible ? "translation-reveal" : "hidden-korean"}`}>{text}</p>
      <button className="focus-ring mt-2 rounded-md border border-line bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50" onClick={() => setVisible((current) => !current)}>
        {visible ? "해석 숨기기" : "해석 보기"}
      </button>
    </div>
  );
}
