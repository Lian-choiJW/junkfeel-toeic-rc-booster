import type { DiagnosisInput } from "@/types";

export const previousToeicScore = {
  label: "지난 기준",
  totalScore: 725,
  lcScore: 420,
  rcScore: 305
};

export const latestToeicScore = {
  label: "2026-09-06",
  totalScore: 795,
  lcScore: 465,
  rcScore: 330,
  validUntil: "2028-09-06"
};

export const scoreComparison = {
  totalDelta: latestToeicScore.totalScore - previousToeicScore.totalScore,
  lcDelta: latestToeicScore.lcScore - previousToeicScore.lcScore,
  rcDelta: latestToeicScore.rcScore - previousToeicScore.rcScore,
  previousLcRcGap: previousToeicScore.lcScore - previousToeicScore.rcScore,
  latestLcRcGap: latestToeicScore.lcScore - latestToeicScore.rcScore
};

export const defaultDiagnosisInput: DiagnosisInput = {
  totalScore: latestToeicScore.totalScore,
  lcScore: latestToeicScore.lcScore,
  rcScore: latestToeicScore.rcScore,
  targetScore: 850,
  targetRcScore: 380,
  dailyMinutes: 50
};

export const rcAbilityProfile = [
  {
    label: "추론",
    percent: 81,
    average: 74,
    focus: "유지",
    note: "글의 목적과 세부 추론은 평균보다 좋습니다."
  },
  {
    label: "세부정보",
    percent: 79,
    average: 76,
    focus: "속도",
    note: "정확도는 평균 이상이므로 시간 압박에서 근거를 빨리 찾는 훈련이 필요합니다."
  },
  {
    label: "연결정보",
    percent: 80,
    average: 72,
    focus: "유지",
    note: "문장 간 연결은 강점입니다. Part 6 문맥 문제로 감을 유지하세요."
  },
  {
    label: "어휘",
    percent: 67,
    average: 66,
    focus: "강화",
    note: "고난도 어휘와 collocation을 늘리면 RC 350 이후 구간에 도움이 됩니다."
  },
  {
    label: "문법",
    percent: 75,
    average: 78,
    focus: "최우선",
    note: "평균보다 낮은 항목입니다. Part 5의 수-태-시, 품사, 전치사를 먼저 보강하세요."
  }
];

export const scoreBasedWeakTags = [
  "grammar",
  "verb",
  "part-of-speech",
  "preposition",
  "collocation",
  "vocabulary",
  "meaning"
];
