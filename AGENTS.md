# Project Harness — devcomfort.me

## Paper File Naming Convention

`public/papers/` 디렉토리의 논문 PDF 파일은 **원본 논문 제목을 인간이 읽을 수 있는 형태**로 저장한다.

### 규칙

1. **원본 제목을 최대한 유지** — 논문 영문 제목 그대로 사용
2. **대소문자 보존** — Title Case 또는 원문 대소문자 따름 (예: `IPCGRL`, `Cat2Vec`)
3. **공백 허용** — 개발 컨벤션(kebab-case 등) 적용 금지. 원래 띄어쓰기 그대로
4. **파일 시스템 제약 문자만 대체** — `:` → `-`, `/` → `-`, `\` → `-`, `?` → `-`, `*` → `-`, `"` → `'`, `<` `>` `|` → `-`
5. **약어·고유명사 원형 유지** — `BERT`, `PPO`, `AI`, `LLM` 등 소문자로 변경 금지

### 예시

| ✅ 올바름 | ❌ 잘못됨 |
|---|---|
| `IPCGRL - Language-Instructed Reinforcement Learning for Procedural Level Generation.pdf` | `ipcgrl-language-instructed-rl.pdf` |
| `Handling Categorical Data in the AI Era - Analyzing the Effectiveness of Entity Embedding and Cat2Vec.pdf` | `handling-categorical-data-in-the-ai-era.pdf` |

### 연동

- `src/content/research/*.md` frontmatter의 `paperUrl`은 파일명과 정확히 일치해야 함
- 예: `paperUrl: '/papers/IPCGRL - Language-Instructed Reinforcement Learning for Procedural Level Generation.pdf'`

---

## Content Collection Authoring Guide

### 개요

이 사이트는 Astro Content Collection을 사용하며, 콘텐츠는 `src/content/` 아래 세 가지 컬렉션으로 관리된다.

| 컬렉션 | 경로 | 목적 |
|---|---|---|
| `blog` | `src/content/blog/*.md` | 기술 블로그, 회고, 경험담 |
| `research` | `src/content/research/*.md` | 연구 프로젝트 요약 |
| `projects` | `src/content/projects/*.md` | 오픈소스/포트폴리오 프로젝트 |

---

### 1. Research (`src/content/research/`)

**목적:** "이 연구는 무엇을 하는가" — 객관적 요약

**독자:** 채용 담당자, 논문 리뷰어, 협력 제안자

**책임 범위:**

- 연구가 푸는 문제를 2~3문장으로 요약
- 본인 기여를 bullet point로 간결히 명시
- 핵심 결과(수치)만 제시
- 상세 과정, 기술적 난관, 회고는 **블로그 포스트로 연결**

**금지:**

- 인턴십 지원 동기, 개인적 성찰
- 문제 해결 과정의 상세 서술
- "느낀 점", "배운 점" 등 회고적 문장

**구조:**

```markdown
## 연구 개요
(2~3문장 요약)

- **학회/venue:**
- **저자:** (본인 이름은 **볼드**)

## Contribution
(bullet 2~4개)

## 핵심 결과
(수치 위주, 2~3줄)

자세한 과정은 [블로그 포스트](/blog/...)에서 확인할 수 있습니다.
```

**필수 frontmatter:**

```yaml
---
title: '논문 제목'
description: '한 줄 요약'
publishDate: 'YYYY-MM-DD'
isFeatured: true / false
tags: ['tag1', 'tag2']
paperUrl: 'https://arxiv.org/abs/...'  # 또는 '/papers/...pdf'
---
```

---

### 2. Blog (`src/content/blog/`)

**목적:** "내가 이 일을 하며 겪은 것" — 주관적 서술

**독자:** 기술 블로그 독자, 동료 연구자, 미래의 나

**책임 범위:**

- 왜 이 프로젝트/연구에 참여했는지 (동기)
- 구체적인 기술적 문제와 해결 과정
- 시행착오, 덫, 깨달음
- 연구 페이지에는 없는 **맥락과 스토리**

**금지:**

- 연구 방법론의 전체적인 설명 (Research 페이지에 위임)
- 결과 수치의 나열 (Research 페이지에 위임)
- 저자 목록, 학회 정보 등 메타데이터 나열

**구조:**

```markdown
(오프닝: 언제, 어디서, 무엇을 했는지)

연구의 전체적인 배경과 결과는 [Research — ...](/research/...) 페이지에서 확인할 수 있습니다.
이 글에서는 연구 내용보다는 **...에 집중하려 합니다.

## 왜 이 프로젝트에 갔나 / 왜 이 문제를 풀었나
(동기)

## 첫 번째 문제: ...
(구체적 상황 + 재현 가능한 맥락)

### 해결 과정
(Before → After 구조, 시행착오 포함)

## 두 번째 문제: ...
(반복)

## 정리
(교훈, 다음에 어떻게 할 것인지)

## 참고 링크
- **arXiv:** ...
- **Research 페이지:** ...
```

**필수 frontmatter:**

```yaml
---
title: '제목'
excerpt: '한 줄 요약'
publishDate: 'YYYY-MM-DD'
tags: ['tag1', 'tag2']
---
```

---

### 3. Projects (`src/content/projects/`)

**목적:** "이 프로젝트는 무엇을 만드는가" — 제품/라이브러리 소개

**독자:** 잠재 사용자, 채용 담당자

**책임 범위:**

- 프로젝트가 해결하는 문제
- 핵심 기능과 사용법
- 기술 스택과 설계 결정

**금지:**

- 개발 과정의 회고 (블로그에 위임)
- 전체 문서화 대신 핵심만

**필수 frontmatter:**

```yaml
---
title: '프로젝트명'
description: '한 줄 설명'
publishDate: 'YYYY-MM-DD'
isFeatured: true / false
tags: ['tag1', 'tag2']
projectUrl: 'https://...'      # 데모/서비스 URL
sourceUrl: 'https://github.com/...'  # 소스코드
---
```

---

### 4. Content Deduplication Rule

**Research와 Blog가 동일한 주제를 다룰 때:**

| 항목 | Research | Blog |
|---|---|---|
| 문제 정의 | 2~3문장 요약 | 링크로 대체 |
| 방법론 | 핵심만 | 링크로 대체 |
| 결과 수치 | bullet | 링크로 대체 |
| 기여 내용 | bullet 요약 | **상세 서술** |
| 회고/교훈 | 없음 | **핵심 내용** |
| 맥락/스토리 | 없음 | **핵심 내용** |

**반드시 상호 링크를 제공한다:**

- Research → Blog: `자세한 과정은 [블로그 포스트](/blog/...)에서 확인할 수 있습니다.`
- Blog → Research: `연구의 전체적인 배경과 결과는 [Research — ...](/research/...) 페이지에서 확인할 수 있습니다.`

---

### 5. Tone & Language

- **Research:** 사실 기반, 수동태/객관적 서술, 줄임말 금지
- **Blog:** 1인칭 허용, 구체적 상황 묘사, 전문 용어는 괄호 설명 병기
- **Projects:** 사용자 중심, "이 라이브러리는 ~를 합니다" 형태

- 모든 콘텐츠는 **한국어**로 작성
- 코드, 변수명, 논문 제목은 원문 그대로
- 날짜 형식: `YYYY-MM-DD` (frontmatter), 본문에서는 "2025년 1월" 형태 허용

---

### 6. Frontmatter Common Rules

- `publishDate`: 반드시 실제 작성/배포일. 미래 날짜 금지.
- `isFeatured`: 홈페이지에 표시할 항목만 `true`. 중복 방지를 위해 각 컬렉션당 최대 3개 권장.
- `tags`: 소문자, kebab-case. 예: `reinforcement-learning`, `procedural-content-generation`
- `paperUrl`: 상대 경로(`/papers/...`) 또는 절대 URL(`https://arxiv.org/...`) 허용
