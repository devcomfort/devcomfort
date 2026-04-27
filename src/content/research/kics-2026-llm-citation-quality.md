---
title: '규정 문서 기반 LLM 응답의 인용 품질 평가 지표'
description: 'LLM Judge 기반 인용 품질 평가 지표(Citation Precision, Recall, Faithfulness)를 제안하고 GIST 학칙 QA 데이터셋으로 검증'
publishDate: '2026-02-01'
isFeatured: true
tags: ['research', 'llm', 'evaluation', 'rag']
paperUrl: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12738814'
---

## 연구 개요

RAG(Retrieval-Augmented Generation) 기반 LLM 응답 평가에서, 기존 지표들은 **인용 오류를 식별하고 적절히 반영하지 못하는 문제**를 해결하기 위해 **Citation Precision**, **Citation Recall**, **Citation Faithfulness** 세 가지 지표를 제안하고, 3개 추론 모델에 대해 37개 대학 규정 Q&A 쌍 데이터셋으로 검증한 연구입니다.

- **학회:** 한국통신학회 2026년도 동계종합학술발표회 (KICS Winter Conference 2026)
- **게재지:** 한국통신학회 학술대회논문집, pp. 1608–1609
- **English Title:** Citation Quality Metrics for LLM Responses on Regulatory Documents
- **저자:** **김동현**, 이수린, 이흥노 (광주과학기술원)

## Contribution

- RAG 응답의 **인용 품질**을 정량적으로 평가하는 세 가지 지표 정의 (Citation Precision, Recall, Faithfulness)
- 대학 규정 문서 기반 Q&A 데이터셋 구축 (37개 질의응답 쌍)
- 3개 추론 모델(DeepSeek-R1, Kimi K2 Thinking, Qwen3-VL-235B)에 대한 실험을 통해 지표의 유효성 검증

예를 들어, '부전공 인정 요건' 질문에서 세 모델 모두 "15학점 이상 이수"라는 동일한 답변을 생성했으나 인용 품질에서 뚜렷한 차이를 보였습니다: DeepSeek-R1은 제4항을 누락했고, Kimi K2 Thinking은 제4항 내용을 제2항에 잘못 귀속시켰으며, Qwen3-VL-235B만 두 조항을 정확히 구분 인용했습니다. 제안한 지표는 기존 평가 방식으로는 구분할 수 없었던 이러한 차이를 정량적으로 포착합니다.

## 핵심 결과

- 인용 충실도(Faithfulness): 모든 모델 0.97~0.99로 양호 (LLM Judge 평가)
- 인용 정밀도(Precision): 0.42~0.46 — 모든 모델이 불필요한 조항을 함께 인용하는 경향
- 인용 재현율(Recall): Kimi K2 Thinking이 0.75로 가장 높아 조항 누락 최소화
- 대표 사례: 세 모델 모두 동일한 답변을 생성했으나, 인용 방식에 따라 충실도 0.00~1.00까지 차이 발생

### 지표별 오류 정의와 예시

아래 예시는 "부전공 인정 요건" 질문을 바탕으로 합니다. 정답 조항은 **제71조의2 제2항**(15학점 이상 이수)과 **제4항**(세부 기준은 총장이 정함)입니다.

**Citation Precision — 과잉 인용 탐지 (규칙 기반)**
인용한 조항 중 실제 필요한 조항의 비율. 불필요한 조항을 함께 인용할수록 낮아집니다.

| 모델 | 인용 조항 | Precision | 해석 |
|---|---|---|---|
| A | 제71조의2 제2항, 제4항 | 1.00 | 필요 조항만 인용 |
| B | 제71조의2 제2항, 제4항, 제5항, 제7조 | 0.50 | 불필요 조항 2건 과잉 인용 |

**Citation Recall — 조항 누락 탐지 (규칙 기반)**
정답 조항 중 실제로 인용한 조항의 비율. 필요한 조항을 빠뜨릴수록 낮아집니다.

| 모델 | 인용 조항 | Recall | 해석 |
|---|---|---|---|
| C | 제71조의2 제2항, 제4항 | 1.00 | 모든 필요 조항 인용 |
| D | 제71조의2 제2항 | 0.50 | 제4항(총장 위임) 누락 |

**Citation Faithfulness — 귀속 오류 탐지 (LLM Judge)**
인용 내용이 명시된 조항에서 실제로 유래했는지를 LLM Judge(Gemini 3 Flash)가 평가합니다. 존재성·내용 타당성·귀속 정확성 세 기준을 모두 충족해야 1.00입니다.

| 모델 | 인용 내용 | 명시 조항 | 실제 근거 | Faithfulness | 해석 |
|---|---|---|---|---|---|
| E | "15학점 이상 이수" | 제2항 | 제2항 | 1.00 | 내용과 귀속 모두 정확 |
| F | "총장이 세부 기준을 정함" | 제2항 | 제4항 | 0.00 | 내용은 맞으나 잘못된 조항에 귀속 |

## 참고 링크

- **DBpia:** [논문 페이지](https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12738814)
- **PDF:** [규정 문서 기반 LLM 응답의 인용 품질 평가 지표](/papers/규정 문서 기반 LLM 응답의 인용 품질 평가 지표.pdf)
