import { StudyTabs } from "@/components/StudyTabs";

export default function StudyPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-6">
        <h1 className="text-3xl font-black text-ink">오늘의 RC 학습</h1>
        <p className="mt-2 leading-7 text-slate-600">단어, Part 5, Part 6·7, 오답노트, 리포트를 한 화면에서 이어서 학습합니다.</p>
      </div>
      <StudyTabs />
    </section>
  );
}
