const examples = {
  vocab: `{
  id: "V031",
  topic: "finance",
  level: "basic",
  word: "revenue",
  meaningKo: "수익",
  pos: "noun",
  exampleEn: "Revenue increased during the second quarter.",
  exampleKo: "2분기에 수익이 증가했습니다.",
  tags: ["finance"],
  status: "active"
}`,
  part5: `{
  id: "P5-011",
  type: "svt-verb",
  difficulty: "medium",
  question: "The project manager ______ the final report by next Monday.",
  choices: { A: "submit", B: "will submit", C: "submits", D: "submitted" },
  answer: "B",
  anchorType: "verb",
  anchorChecklist: ["정동사 없음", "단수 주어", "미래 시간 부사구"],
  svtLogic: {
    step1Number: "주어가 단수인지 확인",
    step2Voice: "목적어가 있으므로 능동",
    step3Tense: "next Monday로 미래"
  }
}`,
  part67: `{
  id: "P7-004",
  part: "7",
  passageType: "letter",
  difficulty: "medium",
  passage: { en: ["..."], ko: ["..."] },
  question: "What is suggested about the order?",
  answer: "C",
  scanStrategy: {
    who: "발신자/수신자",
    why: "조건 비교",
    what: "날짜, 거리, 금액",
    trigger: "다중 지문은 숫자 조건과 이름을 교차 매칭"
  },
  linkageClues: ["10 kilometers", "14 kilometers"]
}`
};

export default function AdminPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-black text-ink">콘텐츠 업데이트 관리</h1>
      <p className="mt-2 max-w-3xl leading-7 text-slate-600">
        MVP에서는 실제 DB 저장을 하지 않습니다. NotebookLM에서 정리한 풀이 원칙을 참고해 자체 제작 문제와 해설을 만든 뒤 데이터 파일에 추가합니다.
      </p>
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {Object.entries(examples).map(([title, code]) => (
          <article key={title} className="rounded-md border border-line bg-white p-5 shadow-soft">
            <h2 className="text-xl font-black capitalize text-ink">{title} JSON 예시</h2>
            <pre className="mt-4 overflow-auto rounded-md bg-slate-950 p-4 text-xs leading-6 text-slate-100">{code}</pre>
          </article>
        ))}
      </div>
      <section className="mt-6 rounded-md border border-line bg-white p-5 shadow-soft">
        <h2 className="text-2xl font-black text-ink">NotebookLM 학습 원칙 붙여넣기</h2>
        <textarea className="focus-ring mt-4 min-h-48 w-full rounded-md border border-line p-4 text-base" placeholder="Part 5 풀이 원칙, Part 6 문맥 원칙, Part 7 근거 찾기 규칙을 붙여넣으세요." />
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {[
            "강의 대본과 실제 문제를 그대로 복사하지 않습니다.",
            "문제, 지문, 해설은 자체 제작 콘텐츠로 작성합니다.",
            "Part 5는 anchorType, anchorChecklist, svtLogic을 함께 작성합니다.",
            "Part 6·7은 scanStrategy, linkageClues, paraphrase를 함께 작성합니다.",
            "오답 설명은 왜 틀렸는지 선택지별로 짧게 적습니다.",
            "패러프레이징 표현은 지문 표현과 정답 표현을 연결합니다."
          ].map((item) => (
            <p key={item} className="rounded-md bg-blue-50 px-3 py-2 font-semibold text-blue-900">{item}</p>
          ))}
        </div>
      </section>
    </section>
  );
}
