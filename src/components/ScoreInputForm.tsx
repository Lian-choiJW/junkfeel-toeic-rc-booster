"use client";

import { useState } from "react";
import { defaultDiagnosisInput, latestToeicScore, rcAbilityProfile, scoreComparison } from "@/data/scoreProfile";
import { diagnoseScore } from "@/lib/diagnosis";
import type { DiagnosisInput, DiagnosisResult as DiagnosisResultType } from "@/types";
import { DiagnosisResult } from "./DiagnosisResult";

export function ScoreInputForm() {
  const [form, setForm] = useState(defaultDiagnosisInput);
  const [fileName, setFileName] = useState("");
  const [result, setResult] = useState<DiagnosisResultType | null>(null);

  const update = (key: keyof DiagnosisInput, value: string) => {
    setForm((current) => ({ ...current, [key]: Number(value) }));
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <section className="rounded-md border border-line bg-white p-5 shadow-soft">
        <h1 className="text-3xl font-black text-ink">점수 진단</h1>
        <p className="mt-2 leading-7 text-slate-600">
          최근 성적은 Total {latestToeicScore.totalScore}, LC {latestToeicScore.lcScore}, RC {latestToeicScore.rcScore}입니다.
          지난 기준보다 총점 +{scoreComparison.totalDelta}, LC +{scoreComparison.lcDelta}, RC +{scoreComparison.rcDelta} 올랐지만 LC-RC 격차는 {scoreComparison.latestLcRcGap}점입니다.
        </p>
        <div className="mt-4 grid gap-2">
          {rcAbilityProfile.map((item) => (
            <div key={item.label} className="grid grid-cols-[5rem_1fr_auto] items-center gap-2 border border-line bg-slate-50 px-3 py-2 text-sm">
              <span className="font-black text-ink">{item.label}</span>
              <div className="h-2 border border-line bg-white">
                <div className="h-full bg-ocean" style={{ width: `${item.percent}%` }} />
              </div>
              <span className="font-bold text-slate-700">{item.percent}%</span>
              <p className="col-span-3 text-xs font-semibold leading-5 text-slate-600">
                {item.focus} · 평균 {item.average}% · {item.note}
              </p>
            </div>
          ))}
        </div>
        <label className="mt-5 flex cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-blue-300 bg-blue-50 px-4 py-8 text-center font-bold text-blue-700">
          <span>{fileName || "PDF 성적표 업로드"}</span>
          <span className="mt-1 text-sm font-semibold text-blue-600">자동 OCR은 추후 지원 예정</span>
          <input
            className="sr-only"
            type="file"
            accept="application/pdf"
            onChange={(event) => setFileName(event.target.files?.[0]?.name || "")}
          />
        </label>
        {fileName ? <p className="mt-3 rounded-md bg-amber-50 px-3 py-2 text-sm font-semibold text-amber">PDF가 선택되었습니다. 지금은 직접 입력으로 분석해 주세요.</p> : null}
      </section>

      <section className="rounded-md border border-line bg-white p-5 shadow-soft">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["totalScore", "Total Score"],
            ["lcScore", "LC Score"],
            ["rcScore", "RC Score"],
            ["targetScore", "목표 점수"],
            ["targetRcScore", "목표 RC 점수"],
            ["dailyMinutes", "하루 공부 가능 시간"]
          ].map(([key, label]) => (
            <label key={key} className="grid gap-2 text-sm font-bold text-slate-700">
              {label}
              <input
                className="focus-ring rounded-md border border-line px-3 py-3 text-base font-semibold text-ink"
                type="number"
                value={form[key as keyof DiagnosisInput]}
                onChange={(event) => update(key as keyof DiagnosisInput, event.target.value)}
              />
            </label>
          ))}
        </div>
        <button className="focus-ring mt-5 w-full rounded-md bg-ocean px-5 py-3 font-black text-white hover:bg-blue-700" onClick={() => setResult(diagnoseScore(form))}>
          분석하기
        </button>
      </section>
      <div className="lg:col-span-2">{result ? <DiagnosisResult result={result} /> : null}</div>
    </div>
  );
}
