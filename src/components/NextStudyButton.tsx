"use client";

import { getStudyResults } from "@/lib/localStorage";
import { getRecommendedNext } from "@/lib/studyEngine";

export function NextStudyButton({ onPick }: { onPick: (target: "vocab" | "part5" | "part67", itemId: string) => void }) {
  return (
    <button
      className="focus-ring h-full border border-ocean bg-ocean px-4 py-2 text-sm font-bold text-white hover:bg-green-800"
      onClick={() => {
        const recommendation = getRecommendedNext(getStudyResults());
        onPick(recommendation.target, recommendation.itemId);
      }}
    >
      다음 학습하기
    </button>
  );
}
