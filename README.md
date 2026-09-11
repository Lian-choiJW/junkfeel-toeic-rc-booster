# TOEIC RC Booster

TOEIC RC Booster는 LC보다 RC가 약한 학습자를 위한 무료 RC 집중 학습 웹앱입니다. 점수 진단, 단어 학습, RC Part 5, Part 6·7 문제풀이, 오답노트, 학습 리포트, 블로그형 유입 페이지를 포함합니다.

## 설치 방법

```bash
npm install
```

## 실행 방법

```bash
npm run dev
```

브라우저에서 `http://localhost:3000`으로 접속합니다.

## GitHub Pages로 배포하기

이 프로젝트는 GitHub에 올리면 GitHub Actions가 자동으로 정적 사이트를 빌드하고 GitHub Pages에 배포하도록 설정되어 있습니다.

1. GitHub에서 새 저장소를 만듭니다.
   - 추천 저장소 이름: `toeic-rc-booster`
   - 공개 저장소로 만들면 휴대폰에서도 바로 접속하기 쉽습니다.
2. 이 프로젝트 폴더에서 원격 저장소를 연결합니다.

```bash
git remote add origin https://github.com/YOUR_GITHUB_ID/toeic-rc-booster.git
git branch -M main
git push -u origin main
```

3. GitHub 저장소의 `Settings > Pages`에서 `Build and deployment` 소스가 `GitHub Actions`인지 확인합니다.
4. 저장소의 `Actions` 탭에서 `Deploy to GitHub Pages` 작업이 끝나면 사이트 주소가 표시됩니다.

일반 저장소로 배포하면 주소는 보통 아래 형태입니다.

```txt
https://YOUR_GITHUB_ID.github.io/toeic-rc-booster/
```

저장소 이름을 `YOUR_GITHUB_ID.github.io`로 만들면 아래처럼 루트 주소로 배포할 수도 있습니다.

```txt
https://YOUR_GITHUB_ID.github.io/
```

## 폴더 구조

```txt
src/
  app/
    page.tsx
    diagnosis/page.tsx
    study/page.tsx
    admin/page.tsx
    blog/page.tsx
  components/
  data/
    vocabBank.ts
    part5Bank.ts
    part67Bank.ts
    blogPosts.ts
  lib/
    diagnosis.ts
    studyEngine.ts
    localStorage.ts
    scoring.ts
  types/
    index.ts
```

## 데이터 추가 방법

- 단어는 `src/data/vocabBank.ts`에 `VocabItem` 구조로 추가합니다.
  - `chunk`, `businessContext`, `relatedChunks`를 함께 넣으면 덩어리 표현 학습에 표시됩니다.
- Part 5 문제는 `src/data/part5Bank.ts`에 `Part5Question` 구조로 추가합니다.
  - `anchorType`: `verb`, `to-v`, `ing`, `determiner`, `preposition`, `conjunction`, `verb-count`, `collocation`, `meaning` 중 하나를 사용합니다.
  - `anchorChecklist`: 보기 먼저 확인 후 0.5초 안에 볼 구조 단서를 순서대로 적습니다.
  - 동사 문제는 `svtLogic.step1Number`, `step2Voice`, `step3Tense`를 채워 수-태-시 소거 흐름을 보여줍니다.
- Part 6·7 지문 문제는 `src/data/part67Bank.ts`에 `Part67Question` 구조로 추가합니다.
  - `scanStrategy`에는 Who, Why, What, trigger를 적어 지문 유형별 스캔 포인트를 제공합니다.
  - `linkageClues`에는 다중 지문의 날짜, 인물, 숫자 조건, Re: 같은 연결 단서를 넣습니다.
- `status: "hidden"`으로 바꾸면 화면에서 제외할 수 있습니다.

## 추천 로직

`src/lib/studyEngine.ts`는 LocalStorage에 쌓인 오답 태그를 기준으로 가장 많이 틀린 태그를 찾습니다. 같은 태그나 앵커 유형을 가진 Part 5, Part 6·7, 단어 항목 중 아직 풀지 않은 콘텐츠를 우선 추천하고, 기록이 부족하면 단어 학습부터 시작합니다.

## 향후 Google Sheets 연동 계획

현재는 로컬 TypeScript 데이터 파일을 직접 불러옵니다. 이후에는 `src/lib/studyEngine.ts` 앞단에 데이터 접근 함수를 추가해 Google Sheets 또는 Supabase에서 같은 타입의 데이터를 받아오도록 교체할 수 있습니다.

## NotebookLM 결과물 반영 방법

NotebookLM은 YouTube 강의의 학습 방식과 풀이 원칙을 요약하는 용도로만 사용합니다. 강의 대본, 실제 문제, 실제 해설을 그대로 복사하지 않고, 요약된 원칙을 참고해 자체 제작 문장, 문제, 해설을 작성합니다. 관리자 페이지의 붙여넣기 영역은 이 원칙을 정리해 문제 생성 가이드로 활용하기 위한 MVP 화면입니다.

반영할 때는 다음 순서를 지킵니다.

1. Part 5 원칙은 7-Anchor와 S-V-T 필드로 변환합니다.
2. Part 6·7 원칙은 scanStrategy, linkageClues, paraphrase 필드로 변환합니다.
3. 단어 원칙은 chunk, collocation, businessContext 필드로 변환합니다.
4. 모든 문제와 해설 문장은 새롭게 자체 제작합니다.
