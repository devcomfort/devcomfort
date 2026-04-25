---
title: 'IPCGRL: Language-Instructed Reinforcement Learning for Procedural Level Generation'
description: 'IEEE CoG 2025 Accept — 자연어 지시 기반 강화학습으로 게임 레벨을 절차적으로 생성하는 방법론.'
publishDate: '2025-03-15'
isFeatured: false
tags: ['reinforcement-learning', 'procedural-content-generation', 'nlp', 'game-ai', 'bert']
paperUrl: 'https://arxiv.org/abs/2503.12358'
---

## 연구 개요

자연어 지시를 강화학습 에이전트의 조건 입력으로 활용하여 게임 레벨을 절차적으로 생성하는 연구입니다. BERT 임베딩을 태스크 특화 인코더로 변환해 조건 제어력과 일반화 성능을 동시에 향상시켰습니다.

- **학회:** IEEE CoG (Conference on Games) 2025 — Accept
- **저자:** In-Chang Baek, Sung-Hyun Kim, Seo-Young Lee, **Dong-Hyeon Kim**, Kyung-Joong Kim

---

## Contribution

GIST CILab 인턴십(2025년 1~2월) 중 참여했습니다.

- **훈련 데이터 편향 발견 및 보고** — 데이터 분포 분석 중 특정 레벨 패턴의 과대표현을 식별, 데이터 수집 전략 개선에 기여
- **데이터 파이프라인 최적화** — RAM 502GB+ → 150GB, 처리 시간 2시간 → 1시간으로 최적화. 실험 반복 속도 2배 향상

---

## 핵심 결과

- 태스크 특화 인코더가 범용 BERT 임베딩 대비 **조건 제어력 21.4% 향상**
- 미확인 지시에 대한 일반화 성능 **17.2% 향상**

자세한 과정은 [인턴십 회고 포스트](/blog/ipcgrl-internship)에서 확인할 수 있습니다.
