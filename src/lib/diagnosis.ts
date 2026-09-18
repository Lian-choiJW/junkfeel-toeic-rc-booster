import type { DiagnosisInput, DiagnosisResult } from "@/types";

export function diagnoseScore(input: DiagnosisInput): DiagnosisResult {
  const gap = input.lcScore - input.rcScore;
  const isRcFocused = gap >= 70;
  let level = "실전 보완형";
  let priorities = ["실전 시간관리", "고난도 문제", "패러프레이징 정리"];

  if (input.rcScore < 250) {
    level = "RC 기초 회복형";
    priorities = ["기초 문법", "핵심 단어", "짧은 문장 구조"];
  } else if (input.rcScore <= 330) {
    level = "RC 집중 상승형";
    priorities = ["Part 5 문법 정확도", "고난도 어휘와 collocation", "Part 7 세부정보 속도", "Part 6 문맥 연결", "패러프레이징 표현"];
  } else if (input.rcScore <= 380) {
    level = "RC 속도 개선형";
    priorities = ["Part 5 문법 안정화", "어휘 확장", "Part 7 속도 훈련", "오답 유형 분류"];
  }

  return {
    level,
    summary: isRcFocused
      ? `현재 RC 점수는 ${input.rcScore}점입니다. LC 대비 RC가 ${gap}점 낮기 때문에 총점 상승의 핵심은 RC입니다.`
      : `현재 RC 점수는 ${input.rcScore}점입니다. RC를 더 안정적으로 만들면 목표 점수 ${input.targetScore}점에 가까워질 수 있습니다.`,
    priorities,
    routine: [
      `하루 ${input.dailyMinutes || 40}분 기준으로 Part 5 문법 20분, 어휘 15분, Part 7 근거 찾기 15분으로 나누어 학습하세요.`,
      `목표 RC ${input.targetRcScore || input.rcScore + 50}점까지는 틀린 태그를 중심으로 반복하세요.`,
      "오답은 바로 지우지 말고 문법 포인트, 모르는 단어, 근거 문장을 함께 남기세요."
    ]
  };
}
