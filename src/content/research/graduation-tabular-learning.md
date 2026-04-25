---
title: 'AI 시대의 범주형 데이터 처리: Entity Embedding과 Cat2Vec의 효과 분석'
description: '학부 졸업 연구 (2025년 2월) — One-hot encoding, Entity Embedding, Cat2Vec 세 가지 범주형 인코딩 기법을 Rossmann 데이터셋에서 비교 평가. ARI 기준 임베딩 기법이 One-hot 대비 완벽한 군집화 성능(1.0) 달성.'
publishDate: '2025-02-01'
isFeatured: true
tags: ['tabular-learning', 'tabular-ml', 'embedding', 'entity-embedding', 'cat2vec', 'categorical-data', 'pytorch']
paperUrl: '/papers/Handling Categorical Data in the AI Era - Analyzing the Effectiveness of Entity Embedding and Cat2Vec.pdf'
---

## 논문 개요

- **제목 (한국어):** AI 시대의 범주형 데이터 처리: Entity Embedding과 Cat2Vec의 효과 분석
- **제목 (영어):** Handling Categorical Data in the AI Era: Analyzing the Effectiveness of Entity Embedding and Cat2Vec
- **저자:** Dong-Hyeon Kim
- **유형:** 학부 졸업 연구논문
- **제출일:** 2025년 2월

---

## 초록

본 연구는 AI 시대에서 범주형 데이터를 효과적으로 처리하는 방법에 대한 통찰을 제공한다. 특히 **Entity Embedding**, **Cat2Vec**, 기존의 **One-hot Encoding** 세 방법의 성능 차이를 비교 분석한다. Rossmann Store Sales 데이터셋을 활용하여 각 방법으로 데이터를 인코딩·임베딩한 후, KMeans 군집화 알고리즘을 통해 성능을 평가한다. 이를 통해 각 임베딩 기법이 정형 데이터의 표현과 이해에 미치는 영향을 분석하고, Tabular Learning 분야의 발전에 기여할 수 있는 기초 연구로서의 의의를 가진다.

**키워드:** 범주형 변수, Tabular Learning, 임베딩, 정형 데이터

---

## 배경과 문제의식

정형 데이터는 금융, 의료, 전자상거래 등 데이터 가치가 높은 분야에서 핵심 역할을 합니다. Tabular Learning은 AI가 이러한 정형 데이터를 얼마나 잘 이해하는지를 평가하는 분야로, 트리 기반·인코더-디코더·신경망·통계 기반 등 다양한 방법론이 제안되고 있습니다.

그러나 정형 데이터에 포함된 **범주형 변수**는 순서·대소 관계가 없는 경우가 많아 Tabular Learning의 난이도를 높입니다. 가장 흔히 쓰이는 One-hot Encoding은 고차원 희소 벡터를 생성하여 **차원의 저주** 문제를 일으킵니다.

2016년에는 신경망으로 범주형 변수를 연속 공간에 임베딩하는 **Entity Embedding**과 **Cat2Vec**이 각각 발표되었지만, 두 방법의 성능을 직접 비교한 연구는 당시까지 존재하지 않았습니다. 본 연구는 이 공백을 채우는 기초 연구입니다.

---

## 관련 연구

### One-hot Encoding

각 범주를 이진 벡터로 표현하는 가장 일반적인 방법. 예: "사과", "바나나", "콜라" → `(1,0,0)`, `(0,1,0)`, `(0,0,1)`. 카테고리 수가 늘어날수록 벡터 차원이 커져 희소성과 차원의 저주 문제가 발생합니다.

### Entity Embedding

신경망을 통해 각 범주에 대한 **저차원 밀집 표현(dense vector)**을 학습하는 방법 ([Guo & Berkhahn, 2016](https://arxiv.org/abs/1604.06737)). One-hot 레이어가 각기 독립적인 dense 레이어로 매핑되며, 범주 간의 의미적 유사성을 잠재 공간에 포착합니다. 원 논문에서는 독일 도시들이 실제 지리적 위치와 유사하게 임베딩되는 결과가 보고되어 있습니다.

### Cat2Vec

ICLR 2017에 발표된 범주형 변수 임베딩 기법 ([Wen et al., 2016](https://arxiv.org/abs/1603.04259)). 임베딩 레이어 이후 SUM·MUL·HIGHWAY 게이트로 구성된 **Neural Gate**가 변수 간 상관관계를 포착하고, Max Pooling Layer로 관련성 높은 표현을 추출합니다.

---

## 실험 방법

### 데이터셋

**Rossmann Store Sales** (Kaggle) — 독일 Rossmann 약국 체인의 판매 데이터.
- `train.csv`, `store.csv`, `state.csv` 병합 후 전처리
- 영업 중이 아니거나 판매량이 없는 행 제거
- 계산 효율을 위해 **200,000개 무작위 샘플** 사용

### 임베딩 차원 설정

Guo & Berkhahn 연구의 권고를 따라 각 특성의 임베딩 차원을 결정했습니다.

| 특성 | 원래 차원 | 임베딩 차원 |
|---|---|---|
| DayOfWeek | 7 | 6 |
| Promo | 2 | 1 |
| Year | 3 | 2 |
| Month | 12 | 6 |
| Day | 31 | 10 |
| Open | 2 | 1 |
| Store | 1115 | 10 |
| State | 12 | 6 |

### 평가 방법

인코딩된 데이터를 **KMeans** (n_clusters=12, scikit-learn 1.5.2)에 입력하여 군집화를 수행하고, `State`를 정답 레이블로 사용해 **Adjusted Rand Index (ARI)** 로 평가합니다.

$$\text{ARI} \in [-1, 1], \quad \text{ARI} = 1 \Leftrightarrow \text{완벽한 군집화}$$

신뢰성 확보를 위해 각 임베딩 방법마다 **5회 독립 실행** 후 평균합니다.

구현: Entity Embedding·Cat2Vec 모두 원논문 기반으로 **PyTorch 2.5.1** 직접 구현 (KMaxPooling도 직접 구현).

---

## 실험 결과

| 방법 | ARI | 군집 수 |
|---|---|---|
| One-hot Encoding | 0.0 | 1,171 |
| Entity Embedding #1~#5 | **1.0** | 12 |
| Cat2Vec #1~#5 | **1.0** | 12 |

**Entity Embedding과 Cat2Vec 모두 5회 전 실행에서 ARI = 1.0 (완벽한 군집화)** 를 달성했습니다.

- **One-hot Encoding**: 1,171개 군집이 생성되어 사실상 군집화 실패. 고차원 희소 벡터의 차원의 저주가 KMeans 성능을 무력화한 것으로 분석됩니다.
- **Entity Embedding / Cat2Vec**: 두 방법 모두 데이터의 복잡한 관계를 저차원 공간에 의미 있게 투영하여 State(12개 독일 주) 기준 군집화를 완벽하게 수행했습니다.

---

## 결론

정형 데이터의 범주형 변수 처리에서 신경망 기반 임베딩 기법(Entity Embedding, Cat2Vec)이 전통적인 One-hot Encoding 대비 **압도적으로 우수한 표현력**을 가짐이 실증되었습니다. 임베딩 기법은 차원을 효과적으로 축소하면서도 중요한 정보를 보존하여 후속 분석 성능을 크게 향상시킬 수 있습니다.

### 한계

- 단일 데이터셋(Rossmann)과 단일 군집화 방법(KMeans)만 사용
- 데이터 불균형·희소·편향 등 다양한 특성에 따른 성능 변화 미탐구
- 임베딩 기법의 해석 가능성(Explainability) 미분석

### 향후 연구 방향

다양한 데이터 특성별 임베딩 성능 비교, 임베딩 기법의 해석 가능성 연구, 실제 비즈니스 문제에 대한 적용 가능성 탐구.

---

## 참고문헌

1. Wen, Y., Wang, J., Chen, T., & Zhang, W. (2016). Cat2Vec: Learning distributed representation of multi-field categorical data.
2. Guo, C., & Berkhahn, F. (2016). Entity embeddings of categorical variables. *arXiv:1604.06737*.
3. Zhao, Z., Kunar, A., Birke, R., & Chen, L. Y. (2021). CTAB-GAN: Effective Table Data Synthesizing. *ACML 2021 (Vol. 157)*.
4. Li, S-C., Tai, B-C., & Huang, Y. (2019). Evaluating Variational Autoencoder as a Private Data Release Mechanism for Tabular Data. *IEEE PRDC 2019*.
