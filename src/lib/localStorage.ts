import type { StudyResult, WrongAnswerItem } from "@/types";

const WRONG_KEY = "toeic-rc-booster-wrong-answers";
const RESULT_KEY = "toeic-rc-booster-study-results";

function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const value = window.localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function getWrongAnswers() {
  return readJson<WrongAnswerItem[]>(WRONG_KEY, []);
}

export function saveWrongAnswer(item: WrongAnswerItem) {
  const current = getWrongAnswers();
  writeJson(WRONG_KEY, [item, ...current.filter((entry) => entry.id !== item.id)]);
}

export function deleteWrongAnswer(id: string) {
  writeJson(WRONG_KEY, getWrongAnswers().filter((item) => item.id !== id));
}

export function clearWrongAnswers() {
  writeJson(WRONG_KEY, []);
}

export function getStudyResults() {
  return readJson<StudyResult[]>(RESULT_KEY, []);
}

export function saveStudyResult(result: StudyResult) {
  writeJson(RESULT_KEY, [result, ...getStudyResults()]);
}
