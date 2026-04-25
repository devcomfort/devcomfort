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

### ✅ arXiv 논문 정보 확인 방법 (필수)

**arXiv에 등재된 논문의 저자, 기여도, 소속 등 모든 메타데이터는 반드시 TeX 소스를 직접 파싱하여 확인하세요.**

```bash
# TeX 소스 다운로드 (arXiv ID 예: 2503.12358)
curl -L "https://arxiv.org/e-print/{ARXIV_ID}" -o /tmp/paper-tex.tar.gz
mkdir -p /tmp/paper-tex && tar xzf /tmp/paper-tex.tar.gz -C /tmp/paper-tex

# 저자 정보 확인
grep -n "author\|thanks\|IEEEauthorrefmark\|Equal contribution\|Corresponding" /tmp/paper-tex/main.tex
```

**왜 TeX 소스인가:**
- arXiv HTML·웹 페이지의 저자 목록 순서는 실제 기여도와 다를 수 있음
- HTML 버전과 PDF 버전의 저자 표기(†, ‡ 기호 위치)가 서로 다를 수 있음
- TeX 소스의 `\author{}`, `\thanks{}` 블록이 유일한 ground truth

### ⚠️ Anti-Pattern: 저자 순서 추정 금지

**외부 링크(arXiv 웹페이지, Google Scholar 등)만 보고 저자 순서나 기여도를 추정하지 마세요.**

- **반드시 TeX 소스**를 다운로드하여 직접 확인하세요 (위 방법 참조).
- 예: IPCGRL의 경우 arXiv 웹페이지의 저자 목록 순서와 실제 기여도(공동 1저자/2저자/교신)가 다릅니다.

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
- `paperUrl`: 상대 경로(`/papers/...`) 또는 절대 URL(`https://arxiv.org/...`) 허용

### 7. Tags 레이어 규칙

`tags` 배열은 **대분류 | 언어 | 그 외** 순서로 정렬한다. 각 레이어 내에서는 알파벳순.

#### 레이어 정의

| 레이어 | 태그 | 설명 |
|---|---|---|
| **대분류** | `data-collection`, `data-preprocessing`, `research` | 프로젝트의 속하는 분야 |
| **언어** | `python`, `typescript` | 주 구현 언어 |
| **그 외** | 그 외 모든 태그 | 도메인·목적·기술 관련 태그 |

#### 규칙

1. **대분류 태그는 해당 프로젝트가 속하는 분야에만 부여** — 모든 프로젝트에 공통으로 들어가는 태그(`library`, `opensource` 등)는 금지
2. **언어 태그는 주 구현 언어만** — TS 프로젝트에 `javascript`를 중복 부여하지 않음
3. **도구명·프레임워크명 금지** — `magika`, `llama-index`, `bert`, `claude-code` 등 구현 디테일은 태그로 쓰지 않음
4. **의미 중복 금지** — `PCG`/`pcg`/`procedural-content-generation` 중 하나만, `tabular-learning`/`tabular-ml` 중 하나만
5. **정렬 순서**: 대분류 → 언어 → 그 외, 각 레이어 내 알파벳순

#### 예시

```yaml
# ✅ 올바름: 대분류 → 언어 → 그 외
tags: ['data-preprocessing', 'python', 'document-conversion', 'hwp']
tags: ['research', 'python', 'combinatorial', 'experiment-config']

# ❌ 잘못됨: 순서 무시
tags: ['hwp', 'document-conversion', 'python', 'data-preprocessing']

# ❌ 잘못됨: 공통 태그 중복
tags: ['python', 'library', 'opensource', 'filetype']
```
