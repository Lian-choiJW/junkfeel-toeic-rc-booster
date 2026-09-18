"use client";

import { useEffect, useMemo, useState } from "react";
import { part5Bank } from "@/data/part5Bank";
import { part67Bank } from "@/data/part67Bank";
import { latestToeicScore, rcAbilityProfile, scoreComparison } from "@/data/scoreProfile";
import { vocabBank } from "@/data/vocabBank";
import { getStudyProgress, getStudyResults, saveStudyProgress } from "@/lib/localStorage";
import { getDashboardStats } from "@/lib/studyEngine";
import type { StudyProgress, StudyResult, StudyTab } from "@/types";
import { AdPlaceholder } from "./AdPlaceholder";
import { NextStudyButton } from "./NextStudyButton";
import { Part5QuestionCard } from "./Part5QuestionCard";
import { Part67PassageCard } from "./Part67PassageCard";
import { StudyReport } from "./StudyReport";
import { VocabCard } from "./VocabCard";
import { WrongAnswerNote } from "./WrongAnswerNote";

const tabs: { id: StudyTab; label: string }[] = [
  { id: "vocab", label: "Vocab" },
  { id: "part5", label: "P5" },
  { id: "part67", label: "P6-7" },
  { id: "wrong", label: "Review" },
  { id: "report", label: "Report" }
];

export function StudyTabs() {
  const [active, setActive] = useState<StudyTab>("part5");
  const [vocabIndex, setVocabIndex] = useState(0);
  const [part5Index, setPart5Index] = useState(0);
  const [part67Index, setPart67Index] = useState(0);
  const [topic, setTopic] = useState("all");
  const [level, setLevel] = useState("all");
  const [part5Type, setPart5Type] = useState("all");
  const [difficulty, setDifficulty] = useState("all");
  const [part67Part, setPart67Part] = useState("all");
  const [results, setResults] = useState<StudyResult[]>([]);
  const [isProgressLoaded, setIsProgressLoaded] = useState(false);
  const [progress, setProgress] = useState<StudyProgress | null>(null);

  const refresh = () => setResults(getStudyResults());

  const stats = getDashboardStats(results);
  const vocabItems = useMemo(() => vocabBank.filter((item) => item.status === "active" && (topic === "all" || item.topic === topic) && (level === "all" || item.level === level)), [topic, level]);
  const part5Items = useMemo(() => part5Bank.filter((item) => item.status === "active" && (part5Type === "all" || item.type === part5Type) && (difficulty === "all" || item.difficulty === difficulty)), [part5Type, difficulty]);
  const part67Items = useMemo(() => part67Bank.filter((item) => item.status === "active" && (part67Part === "all" || item.part === part67Part) && (difficulty === "all" || item.difficulty === difficulty)), [part67Part, difficulty]);

  const vocab = vocabItems[vocabIndex % Math.max(vocabItems.length, 1)] || vocabBank[0];
  const part5 = part5Items[part5Index % Math.max(part5Items.length, 1)] || part5Bank[0];
  const part67 = part67Items[part67Index % Math.max(part67Items.length, 1)] || part67Bank[0];

  useEffect(() => {
    refresh();

    const saved = getStudyProgress();
    if (saved) {
      const savedTopic = saved.filters.topic || "all";
      const savedLevel = saved.filters.level || "all";
      const savedPart5Type = saved.filters.part5Type || "all";
      const savedDifficulty = saved.filters.difficulty || "all";
      const savedPart67Part = saved.filters.part67Part || "all";

      const savedVocabItems = vocabBank.filter((item) => item.status === "active" && (savedTopic === "all" || item.topic === savedTopic) && (savedLevel === "all" || item.level === savedLevel));
      const savedPart5Items = part5Bank.filter((item) => item.status === "active" && (savedPart5Type === "all" || item.type === savedPart5Type) && (savedDifficulty === "all" || item.difficulty === savedDifficulty));
      const savedPart67Items = part67Bank.filter((item) => item.status === "active" && (savedPart67Part === "all" || item.part === savedPart67Part) && (savedDifficulty === "all" || item.difficulty === savedDifficulty));

      setTopic(savedTopic);
      setLevel(savedLevel);
      setPart5Type(savedPart5Type);
      setDifficulty(savedDifficulty);
      setPart67Part(savedPart67Part);
      setVocabIndex(Math.max(0, savedVocabItems.findIndex((item) => item.id === saved.vocabItemId)));
      setPart5Index(Math.max(0, savedPart5Items.findIndex((item) => item.id === saved.part5ItemId)));
      setPart67Index(Math.max(0, savedPart67Items.findIndex((item) => item.id === saved.part67ItemId)));
      setActive(saved.activeTab);
      setProgress(saved);
    }

    setIsProgressLoaded(true);
  }, []);

  useEffect(() => {
    if (!isProgressLoaded) return;

    const nextProgress: StudyProgress = {
      activeTab: active,
      vocabItemId: vocab.id,
      part5ItemId: part5.id,
      part67ItemId: part67.id,
      filters: {
        topic,
        level,
        part5Type,
        difficulty,
        part67Part
      },
      updatedAt: new Date().toISOString()
    };

    saveStudyProgress(nextProgress);
    setProgress(nextProgress);
  }, [active, vocab.id, part5.id, part67.id, topic, level, part5Type, difficulty, part67Part, isProgressLoaded]);

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
    <div className="space-y-3">
      <section className="sheet-panel">
        <div className="grid gap-0 border-b border-line bg-white md:grid-cols-[1fr_1fr]">
          <div className="border-b border-line p-3 md:border-b-0 md:border-r">
            <p className="text-xs font-bold text-slate-500">Latest TOEIC</p>
            <h2 className="mt-1 text-base font-bold text-ink">
              Total {latestToeicScore.totalScore} · LC {latestToeicScore.lcScore} · RC {latestToeicScore.rcScore}
            </h2>
            <p className="mt-1 text-sm font-semibold text-slate-600">
              지난 기준 대비 총점 +{scoreComparison.totalDelta}, RC +{scoreComparison.rcDelta}. LC-RC 격차 {scoreComparison.latestLcRcGap}점.
            </p>
          </div>
          <div className="p-3">
            <p className="text-xs font-bold text-slate-500">Priority</p>
            <div className="mt-2 flex flex-wrap gap-1">
              {rcAbilityProfile.filter((item) => item.focus === "최우선" || item.focus === "강화" || item.focus === "속도").map((item) => (
                <span key={item.label} className="border border-line bg-slate-50 px-2 py-1 text-xs font-bold text-slate-700">
                  {item.label} {item.percent}%
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="grid gap-0 md:grid-cols-[1fr_auto] md:items-stretch">
          <div className="grid gap-0 sm:grid-cols-4">
            <Metric label="Rows" value={`${stats.solved}`} />
            <Metric label="Rate" value={`${stats.accuracy}%`} />
            <Metric label="Flag" value={stats.weakTag} />
            <Metric label="Next" value={stats.next} />
          </div>
          <div className="border-t border-line p-2 md:border-l md:border-t-0">
            <NextStudyButton onPick={pickRecommended} />
          </div>
        </div>
        <div className="border-t border-line bg-slate-50 px-3 py-2">
          <p className="text-xs font-bold text-slate-500">Saved Position</p>
          <p className="mt-1 text-sm font-semibold text-ink">
            {progress ? `${progressLabel(active)} · ${currentItemLabel(active, vocab.id, part5.id, part67.id)} · ${currentIndexLabel(active, vocabIndex, vocabItems.length, part5Index, part5Items.length, part67Index, part67Items.length)}` : "아직 저장된 학습 위치가 없습니다."}
          </p>
          {progress ? <p className="mt-1 text-xs font-semibold text-slate-500">마지막 저장: {formatSavedTime(progress.updatedAt)}</p> : null}
        </div>
      </section>

      <section className="sheet-panel grid gap-0 lg:grid-cols-[1fr_1fr]">
        <div className="border-b border-line p-3 lg:border-b-0 lg:border-r">
          <p className="text-xs font-bold text-slate-500">P5 Structure</p>
          <h2 className="mt-1 text-base font-bold text-ink">7-Anchor → S-V-T sequence</h2>
          <div className="mt-3 flex flex-wrap gap-1">
            {["동사", "to-v", "-ing", "한정사", "전치사", "접속사", "동사 개수"].map((anchor) => (
              <span key={anchor} className="border border-line bg-slate-50 px-2 py-1 text-xs font-semibold text-slate-700">{anchor}</span>
            ))}
          </div>
        </div>
        <div className="p-3">
          <p className="text-xs font-bold text-slate-500">P6-7 Evidence</p>
          <h2 className="mt-1 text-base font-bold text-ink">Who / Why / What + Linkage</h2>
          <p className="mt-2 text-sm font-medium leading-6 text-slate-600">
            이메일은 Re:와 발신자 관계, 광고는 숫자 조건, 채팅은 대명사 연결, 다중 지문은 날짜와 인물 이름을 교차 매칭합니다.
          </p>
        </div>
      </section>

      <section className="sheet-panel grid gap-0 md:grid-cols-3">
        {[
          ["P5 Trap", "비교급은 than 신호, 시제는 기간 표현, to는 전치사인지 먼저 확인"],
          ["P6 Link", "문장삽입은 앞 기능 설명과 뒤 예외/결과 문장을 동시에 연결"],
          ["P7 Review", "정답 근거, 오답 이유, 패러프레이징을 한 줄로 표시하며 복습"]
        ].map(([title, text]) => (
          <div key={title} className="border-b border-line p-3 md:border-b-0 md:border-r last:border-r-0">
            <p className="text-xs font-bold text-slate-500">{title}</p>
            <p className="mt-1 text-sm font-semibold leading-6 text-slate-700">{text}</p>
          </div>
        ))}
      </section>

      <div className="flex gap-0 overflow-x-auto border border-line bg-slate-100">
        {tabs.map((tab) => (
          <button key={tab.id} className={`focus-ring shrink-0 border-r border-line px-4 py-2 text-xs font-bold ${active === tab.id ? "bg-white text-ocean" : "text-slate-600 hover:bg-white"}`} onClick={() => setActive(tab.id)}>
            {tab.label}
          </button>
        ))}
      </div>

      {active === "vocab" ? (
        <div className="grid gap-4">
          <div className="sheet-panel flex flex-wrap gap-2 p-2">
            <Select label="주제" value={topic} onChange={setTopic} options={["all", ...Array.from(new Set(vocabBank.map((item) => item.topic)))]} />
            <Select label="난이도" value={level} onChange={setLevel} options={["all", "basic", "killer"]} />
          </div>
          <VocabCard item={vocab} onNext={() => setVocabIndex((index) => index + 1)} />
        </div>
      ) : null}

      {active === "part5" ? (
        <div className="grid gap-4">
          <div className="sheet-panel flex flex-wrap gap-2 p-2">
            <Select label="문법 유형" value={part5Type} onChange={setPart5Type} options={["all", ...Array.from(new Set(part5Bank.map((item) => item.type)))]} />
            <Select label="난이도" value={difficulty} onChange={setDifficulty} options={["all", "easy", "medium", "hard", "killer"]} />
          </div>
          <Part5QuestionCard question={part5} onNext={() => setPart5Index((index) => index + 1)} onAnswered={refresh} />
        </div>
      ) : null}

      {active === "part67" ? (
        <div className="grid gap-4">
          <div className="sheet-panel flex flex-wrap gap-2 p-2">
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

function progressLabel(tab: StudyTab) {
  const labels: Record<StudyTab, string> = {
    vocab: "Vocab",
    part5: "Part 5",
    part67: "Part 6-7",
    wrong: "Review",
    report: "Report"
  };

  return labels[tab];
}

function currentItemLabel(tab: StudyTab, vocabId: string, part5Id: string, part67Id: string) {
  if (tab === "vocab") return vocabId;
  if (tab === "part5") return part5Id;
  if (tab === "part67") return part67Id;
  return "학습 기록";
}

function currentIndexLabel(
  tab: StudyTab,
  vocabIndex: number,
  vocabTotal: number,
  part5Index: number,
  part5Total: number,
  part67Index: number,
  part67Total: number
) {
  if (tab === "vocab") return `${(vocabIndex % Math.max(vocabTotal, 1)) + 1}/${vocabTotal}`;
  if (tab === "part5") return `${(part5Index % Math.max(part5Total, 1)) + 1}/${part5Total}`;
  if (tab === "part67") return `${(part67Index % Math.max(part67Total, 1)) + 1}/${part67Total}`;
  return "자동 복원";
}

function formatSavedTime(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return date.toLocaleString("ko-KR", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-r border-line bg-white p-2 sm:border-b-0">
      <p className="text-[11px] font-bold uppercase text-slate-500">{label}</p>
      <p className="mt-1 truncate text-sm font-semibold text-ink">{value}</p>
    </div>
  );
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (value: string) => void; options: string[] }) {
  return (
    <label className="grid gap-1 text-xs font-bold text-slate-600">
      {label}
      <select className="focus-ring border border-line bg-white px-2 py-1.5 text-sm font-semibold text-ink" value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>{option === "all" ? "전체" : option}</option>
        ))}
      </select>
    </label>
  );
}
