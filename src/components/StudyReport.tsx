"use client";

import { useEffect, useState } from "react";
import { getStudyResults, getWrongAnswers } from "@/lib/localStorage";
import { getDashboardStats, mostMissedTag } from "@/lib/studyEngine";
import type { StudyResult } from "@/types";

export function StudyReport() {
  const [results, setResults] = useState<StudyResult[]>([]);

  useEffect(() => {
    setResults(getStudyResults());
  }, []);

  const stats = getDashboardStats(results);
  const total = results.length;
  const part5 = results.filter((result) => result.part === "part5");
  const part67 = results.filter((result) => result.part === "part67");
  const rate = (items: StudyResult[]) => (items.length ? Math.round((items.filter((item) => item.isCorrect).length / items.length) * 100) : 0);

  return (
    <section className="sheet-panel">
      <div className="sheet-heading">Report</div>
      <div className="grid gap-0 md:grid-cols-3">
        <ReportBox label="오늘 푼 문제" value={`${stats.solved}개`} />
        <ReportBox label="오늘 정답률" value={`${stats.accuracy}%`} />
        <ReportBox label="가장 취약한 태그" value={mostMissedTag(results) || "아직 없음"} />
        <ReportBox label="누적 풀이" value={`${total}개`} />
        <ReportBox label="Part 5 정답률" value={`${rate(part5)}%`} />
        <ReportBox label="Part 6, 7 정답률" value={`${rate(part67)}%`} />
      </div>
      <p className="border-t border-line bg-green-50 px-3 py-2 text-sm font-semibold text-green-900">
        다음 추천 학습: {stats.next} · 복습해야 할 항목 {getWrongAnswers().length}개
      </p>
    </section>
  );
}

function ReportBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-r border-line bg-white p-3">
      <p className="text-xs font-bold text-slate-500">{label}</p>
      <p className="mt-1 text-lg font-semibold text-ink">{value}</p>
    </div>
  );
}
