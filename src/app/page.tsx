import Link from "next/link";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { HeroSection } from "@/components/HeroSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-10">
        <AdPlaceholder label="Home Top Ad Placeholder" />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["약점 진단", "LC와 RC 점수 차이, 목표 점수, 하루 학습 시간을 기준으로 우선순위를 정합니다."],
            ["RC 문제풀이", "Part 5 문법, Part 6 문맥, Part 7 근거 찾기를 자체 제작 샘플로 연습합니다."],
            ["오답 루틴", "틀린 문제와 태그를 로컬 저장소에 남겨 다음 학습 추천에 반영합니다."]
          ].map(([title, text]) => (
            <article key={title} className="rounded-md border border-line bg-white p-5 shadow-soft">
              <h2 className="text-xl font-black text-ink">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
        <section className="rounded-md border border-line bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-black text-ink">네이버 블로그에서 들어온 학습자 흐름</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            블로그 글에서 RC 약점 유형을 설명하고, 하단 링크로 이 웹앱의 진단과 학습 탭으로 연결합니다. 기본 학습 기능은 무료로 제공하고 광고 영역만 자리로 남겨 둡니다.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link className="rounded-md bg-ocean px-4 py-2 font-bold text-white hover:bg-blue-700" href="/diagnosis">현재 점수 입력</Link>
            <Link className="rounded-md border border-line px-4 py-2 font-bold hover:bg-slate-50" href="/blog">샘플 블로그 보기</Link>
          </div>
        </section>
      </section>
    </div>
  );
}
