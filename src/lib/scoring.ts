import type { ChoiceKey } from "@/types";

export function isCorrect(userAnswer: ChoiceKey | "", answer: ChoiceKey) {
  return userAnswer === answer;
}

export function nextReviewDate(days = 2) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

export function todayKey() {
  return new Date().toISOString().slice(0, 10);
}
