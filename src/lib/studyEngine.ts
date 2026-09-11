import { part5Bank } from "@/data/part5Bank";
import { part67Bank } from "@/data/part67Bank";
import { vocabBank } from "@/data/vocabBank";
import type { StudyResult } from "@/types";

export type StudyTarget = "vocab" | "part5" | "part67";

export function getMissedTagCounts(results: StudyResult[]) {
  const missed = results.filter((result) => !result.isCorrect);
  const counts = new Map<string, number>();
  missed.forEach((result) => result.tags.forEach((tag) => counts.set(tag, (counts.get(tag) || 0) + 1)));
  return [...counts.entries()].sort((a, b) => b[1] - a[1]);
}

export function mostMissedTag(results: StudyResult[]) {
  return getMissedTagCounts(results)[0]?.[0] || "";
}

export function getDashboardStats(results: StudyResult[]) {
  const today = new Date().toISOString().slice(0, 10);
  const todayResults = results.filter((result) => result.date.startsWith(today));
  const solved = todayResults.length;
  const correct = todayResults.filter((result) => result.isCorrect).length;
  const recommendation = getRecommendedNext(results);
  const weakTag = recommendation.weakTag || "아직 없음";

  return {
    solved,
    accuracy: solved ? Math.round((correct / solved) * 100) : 0,
    weakTag,
    next: recommendation.reason
  };
}

export function getRecommendedNext(results: StudyResult[]) {
  const weakTags = getMissedTagCounts(results).map(([tag]) => tag);
  const weakTag = weakTags[0] || "";
  const solvedIds = new Set(results.map((result) => result.itemId));
  const matchesWeak = (tags: string[]) => weakTags.some((tag) => tags.includes(tag));
  const part5 = part5Bank.find((item) => matchesWeak([...item.tags, item.anchorType || ""]) && !solvedIds.has(item.id)) || part5Bank.find((item) => !solvedIds.has(item.id)) || part5Bank[0];
  const part67 = part67Bank.find((item) => matchesWeak([...item.tags, item.questionFocus || ""]) && !solvedIds.has(item.id)) || part67Bank.find((item) => !solvedIds.has(item.id)) || part67Bank[0];
  const vocab = vocabBank.find((item) => matchesWeak(item.tags) && !solvedIds.has(item.id)) || vocabBank.find((item) => !solvedIds.has(item.id)) || vocabBank[0];

  let target: StudyTarget = "vocab";
  let itemId = vocab.id;
  let reason = "기록이 아직 적어서 덩어리 단어부터 워밍업";

  if (weakTag) {
    const part5Score = part5.tags.includes(weakTag) || part5.anchorType === weakTag ? 3 : 0;
    const part67Score = part67.tags.includes(weakTag) || part67.questionFocus === weakTag ? 3 : 0;
    const vocabScore = vocab.tags.includes(weakTag) ? 2 : 0;
    if (part67Score > part5Score && part67Score >= vocabScore) {
      target = "part67";
      itemId = part67.id;
      reason = `${weakTag} 약점 때문에 Part 6·7 근거 찾기 추천`;
    } else if (part5Score >= vocabScore) {
      target = "part5";
      itemId = part5.id;
      reason = `${weakTag} 약점 때문에 7-Anchor/S-V-T 문제 추천`;
    } else {
      target = "vocab";
      itemId = vocab.id;
      reason = `${weakTag} 관련 덩어리 표현 복습 추천`;
    }
  }

  return { vocab, part5, part67, weakTag, target, itemId, reason };
}
