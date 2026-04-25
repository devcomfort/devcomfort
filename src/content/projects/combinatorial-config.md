---
title: 'combinatorial-config'
description: '실험 설정의 모든 조합을 자동으로 생성하는 Python 라이브러리. 하이퍼파라미터 탐색과 그리드 서치를 간결하게 표현할 수 있습니다.'
publishDate: '2025-11-10'
isFeatured: false
tags: ['research', 'python', 'combinatorial', 'experiment-config']
sourceUrl: 'https://github.com/devcomfort/combinatorial-config'
---

# combinatorial-config

머신러닝 실험에서 여러 하이퍼파라미터의 모든 조합을 체계적으로 탐색해야 할 때, 중첩 반복문이나 복잡한 설정 관리 코드를 직접 작성하는 대신 선언적으로 실험 설정을 정의할 수 있는 Python 라이브러리입니다.

## 배경

Hydra를 이용한 실험 설정 관리 중 여러 하이퍼파라미터 조합을 손쉽게 생성할 방법이 필요했습니다. 이 라이브러리는 설정 딕셔너리(또는 데이터클래스)를 받아 가능한 모든 조합을 자동으로 생성합니다.

## 핵심 기능

- **딕셔너리 기반 설정** — 리스트 값은 자동으로 조합 후보로 처리
- **중첩 구조 지원** — 재귀적으로 처리해 복잡한 설정도 가능
- **범위 표현** — 튜플로 정수 범위를 간결하게 표현
- **Pydantic 데이터클래스 지원**

## 설치

```bash
pip install combinatorial-config
```

## 사용 예시

```python
from combinatorial_config import generate_combinations

config = {
    "learning_rate": [0.1, 0.01],
    "batch_size": [16, 32],
    "epochs": (0, 3),  # → [0, 1, 2]
}

for cfg in generate_combinations(config):
    print(cfg)
# {'learning_rate': 0.1, 'batch_size': 16, 'epochs': 0}
# {'learning_rate': 0.1, 'batch_size': 16, 'epochs': 1}
# ... (총 12가지 조합)
```

중첩 설정도 동일하게 처리됩니다.

```python
config = {
    "model": {
        "layers": [2, 4],
        "activation": ["relu", "tanh"]
    },
    "optimizer": ["adam", "sgd"]
}
# 총 2 × 2 × 2 = 8가지 조합 생성
```
