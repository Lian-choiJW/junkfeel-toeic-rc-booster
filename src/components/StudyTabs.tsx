"use client";

import { useEffect, useMemo, useState } from "react";
import { part5Bank } from "@/data/part5Bank";
import { part67Bank } from "@/data/part67Bank";
import { vocabBank } from "@/data/vocabBank";
import { getStudyResults } from "@/lib/localStorage";
import { getDashboardStats } from "@/lib/studyEngine";
import type { StudyResult } from "@/types";
import { AdPlaceholder } from "./AdPlaceholder";
import { NextStudyButton } from "./NextStudyButton";
import { Part5QuestionCard } from "./Part5QuestionCard";
import { Part67PassageCard } from "./Part67PassageCard";
import { StudyReport } from "./StudyReport";
import { VocabCard } from "./VocabCard";
import { WrongAnswerNote } from "./WrongAnswerNote";

type Tab = "vocab" | "part5" | "part67" | "wrong" | "report";

const tabs: { id: Tab; label: string }[] = [
  { id: "vocab", label: "단어공부" },
  { id: "part5", label: "RC Part 5" },
  { id: "part67", label: "RC Part 6, 7" },
  { id: "wrong", label: "오답노트" },
  { id: "report", label: "학습 리포트" }
];

export function StudyTabs() {
  const [active, setActive] = useState<Tab>("vocab");
  const [vocabIndex, setVocabIndex] = useState(0);
  const [part5Index, setPart5Index] = useState(0);
  const [part67Index, setPart67Index] = useState(0);
  const [topic, setTopic] = useState("all");
  const [level, setLevel] = useState("all");
  const [part5Type, setPart5Type] = useState("all");
  const [difficulty, setDifficulty] = useState("all");
  const [part67Part, setPart67Part] = useState("all");
  const [results, setResults] = useState<StudyResult[]>([]);

  const refresh = () => setResults(getStudyResults());

  useEffect(() => {
    refresh();
  }, []);

  const stats = getDashboardStats(results);
  const vocabItems = useMemo(() => vocabBank.filter((item) => item.status === "active" && (topic === "all" || item.topic === topic) && (level === "all" || item.level === level)), [topic, level]);
  const part5Items = useMemo(() => part5Bank.filter((item) => item.status === "active" && (part5Type === "all" || item.type === part5Type) && (difficulty === "all" || item.difficulty === difficulty)), [part5Type, difficulty]);
  const part67Items = useMemo(() => part67Bank.filter((item) => item.status === "active" && (part67Part === "all" || item.part === part67Part) && (difficulty === "all" || item.difficulty === difficulty)), [part67Part, difficulty]);

  const vocab = vocabItems[vocabIndex % Math.max(vocabItems.length, 1)] || vocabBank[0];
  const part5 = part5Items[part5Index % Math.max(part5Items.length, 1)] || part5Bank[0];
  const part67 = part67Items[part67Index % Math.max(part67Items.length, 1)] || part67Bank[0];
  const pickRecommended = (target: "vocab" | "part5" | "part67", itemId: string) => {
    if (target === "vocab") {
      setTopic("all");
      setLevel("all");
      setVocabIndex(Math.max(0, vocabBank.findIndex((item) => item.id === itemId)));
    }
    if (target === "part5") {
      setPart5Type("all");
      setDifficulty("all");
      setPart5Index(Math.max(0, part5Bank.findIndex((item) => item.id === itemId)));
    }
    if (target === "part67") {
      setPart67Part("all");
      setDifficulty("all");
      setPart67Index(Math.max(0, part67Bank.findIndex((item) => item.id === itemId)));
    }
    setActive(target);
  };

  return (
    <div className="space-y-6">
      <section className="rounded-md border border-line bg-white p-5 shadow-soft">
        <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-center">
          <div className="grid gap-3 sm:grid-cols-4">
            <Metric label="오늘 푼 문제" value={`${stats.solved}개`} />
            <Metric label="정답률" value={`${stats.accuracy}%`} />
            <Metric label="많이 틀린 유형" value={stats.weakTag} />
            <Metric label="추천" value={stats.next} />
          </div>
          <NextStudyButton onPick={pickRecommended} />
        </div>
      </section>

      <section className="grid gap-4 rounded-md border border-blue-100 bg-white p-5 shadow-soft lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-sm font-black text-ocean">Part 5 Booster</p>
          <h2 className="mt-1 text-xl font-black text-ink">7-Anchor → S-V-T 순서로 풉니다</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {["동사", "to-v", "-ing", "한정사", "전치사", "접속사", "동사 개수"].map((anchor) => (
              <span key={anchor} className="rounded-md bg-blue-50 px-2 py-1 text-sm font-bold text-blue-900">{anchor}</span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-black text-mint">Part 6·7 Booster</p>
          <h2 className="mt-1 text-xl font-black text-ink">Who / Why / What과 Linkage를 먼저 잡습니다</h2>
          <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">
            이메일은 Re:와 발신자 관계, 광고는 숫자 조건, 채팅은 대명사 연결, 다중 지문은 날짜와 인물 이름을 교차 매칭합니다.
          </p>
        </div>
      </section>

      <div className="flex gap-2 overflow-x-auto rounded-md border border-line bg-white p-2">
        {tabs.map((tab) => (
          <button key={tab.id} className={`focus-ring shrink-0 rounded-md px-4 py-2 text-sm font-black ${active === tab.id ? "bg-ocean text-white" : "text-slate-600 hover:bg-slate-50"}`} onClick={() => setActive(tab.id)}>
            {tab.label}
          </button>
        ))}
      </div>

      {active === "vocab" ? (
        <div className="grid gap-4">
          <div className="flex flex-wrap gap-3 rounded-md border border-line bg-white p-4">
            <Select label="주제" value={topic} onChange={setTopic} options={["all", ...Array.from(new Set(vocabBank.map((item) => item.topic)))]} />
            <Select label="난이도" value={level} onChange={setLevel} options={["all", "basic", "killer"]} />
          </div>
          <VocabCard item={vocab} onNext={() => setVocabIndex((index) => index + 1)} />
        </div>
      ) : null}

      {active === "part5" ? (
        <div className="grid gap-4">
          <div className="flex flex-wrap gap-3 rounded-md border border-line bg-white p-4">
            <Select label="문법 유형" value={part5Type} onChange={setPart5Type} options={["all", ...Array.from(new Set(part5Bank.map((item) => item.type)))]} />
            <Select label="난이도" value={difficulty} onChange={setDifficulty} options={["all", "easy", "medium", "hard", "killer"]} />
          </div>
          <Part5QuestionCard question={part5} onNext={() => setPart5Index((index) => index + 1)} onAnswered={refresh} />
        </div>
      ) : null}

      {active === "part67" ? (
        <div className="grid gap-4">
          <div className="flex flex-wrap gap-3 rounded-md border border-line bg-white p-4">
            <Select label="파트" value={part67Part} onChange={setPart67Part} options={["all", "6", "7"]} />
            <Select label="난이도" value={difficulty} onChange={setDifficulty} options={["all", "easy", "medium", "hard", "killer"]} />
          </div>
          <Part67PassageCard item={part67} onNext={() => setPart67Index((index) => index + 1)} onAnswered={refresh} />
        </div>
      ) : null}

      {active === "wrong" ? <WrongAnswerNote /> : null}
      {active === "report" ? <StudyReport /> : null}

      <AdPlaceholder label="Study Dashboard Ad Placeholder" />
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-slate-50 p-3">
      <p className="text-xs font-bold text-slate-500">{label}</p>
      <p className="mt-1 font-black text-ink">{value}</p>
    </div>
  );
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (value: string) => void; options: string[] }) {
  return (
    <label className="grid gap-1 text-sm font-bold text-slate-600">
      {label}
      <select className="focus-ring rounded-md border border-line bg-white px-3 py-2 text-base font-semibold text-ink" value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>{option === "all" ? "전체" : option}</option>
        ))}
      </select>
    </label>
  );
}
