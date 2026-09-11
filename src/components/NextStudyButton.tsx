"use client";

import { getStudyResults } from "@/lib/localStorage";
import { getRecommendedNext } from "@/lib/studyEngine";

export function NextStudyButton({ onPick }: { onPick: (target: "vocab" | "part5" | "part67", itemId: string) => void }) {
  return (
    <button
      className="focus-ring rounded-md bg-mint px-4 py-3 font-black text-white hover:bg-teal-800"
      onClick={() => {
        const recommendation = getRecommendedNext(getStudyResults());
        onPick(recommendation.target, recommendation.itemId);
      }}
    >
      다음 학습하기
    </button>
  );
}
