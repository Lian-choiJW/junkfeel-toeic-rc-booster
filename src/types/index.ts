export type ChoiceKey = "A" | "B" | "C" | "D";

export type VocabItem = {
  id: string;
  topic: string;
  level: "basic" | "killer";
  word: string;
  meaningKo: string;
  pos: string;
  exampleEn: string;
  exampleKo: string;
  collocation?: string;
  businessContext?: string;
  chunk?: string;
  relatedChunks?: string[];
  tags: string[];
  status: "active" | "hidden";
};

export type AnchorType =
  | "verb"
  | "to-v"
  | "ing"
  | "determiner"
  | "preposition"
  | "conjunction"
  | "verb-count"
  | "collocation"
  | "meaning";

export type SvtLogic = {
  step1Number: string;
  step2Voice: string;
  step3Tense: string;
};

export type Part5Question = {
  id: string;
  type: string;
  difficulty: "easy" | "medium" | "hard" | "killer";
  question: string;
  choices: Record<ChoiceKey, string>;
  answer: ChoiceKey;
  explanationCorrect: string;
  explanationWrong: Record<ChoiceKey, string>;
  grammarPoint: string;
  anchorType?: AnchorType;
  anchorChecklist?: string[];
  svtLogic?: SvtLogic;
  fastRule?: string;
  paraphrasing?: string;
  collocation?: string;
  timeTargetSeconds?: number;
  tags: string[];
  status: "active" | "hidden";
};

export type Part67Question = {
  id: string;
  part: "6" | "7";
  passageType: "email" | "notice" | "memo" | "advertisement" | "article" | "chat" | "invoice" | "schedule" | "letter" | "review";
  difficulty: "easy" | "medium" | "hard" | "killer";
  passage: {
    en: string[];
    ko: string[];
  };
  question: string;
  choices: Record<ChoiceKey, string>;
  answer: ChoiceKey;
  evidenceSentence: string;
  explanationCorrect: string;
  explanationWrong: Record<ChoiceKey, string>;
  scanStrategy?: {
    who?: string;
    why?: string;
    what?: string;
    trigger: string;
  };
  linkageClues?: string[];
  questionFocus?: "purpose" | "detail" | "inference" | "not-true" | "sentence-insertion" | "paraphrase";
  paraphrase: {
    passageExpression: string;
    answerExpression: string;
    meaningKo: string;
  }[];
  tags: string[];
  status: "active" | "hidden";
};

export type WrongAnswerItem = {
  id: string;
  date: string;
  part: "vocab" | "part5" | "part67";
  itemId: string;
  question: string;
  userAnswer: string;
  correctAnswer: string;
  errorType: string;
  reviewDueDate: string;
};

export type StudyResult = {
  id: string;
  date: string;
  part: "vocab" | "part5" | "part67";
  itemId: string;
  isCorrect: boolean;
  tags: string[];
};

export type DiagnosisInput = {
  totalScore: number;
  lcScore: number;
  rcScore: number;
  targetScore: number;
  targetRcScore: number;
  dailyMinutes: number;
};

export type DiagnosisResult = {
  level: string;
  summary: string;
  priorities: string[];
  routine: string[];
};
