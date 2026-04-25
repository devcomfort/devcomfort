---
title: 'filetype-detector'
description: '경로 기반, magic number, AI(Magika) 추론 전략을 조합해 파일 타입을 탐지하는 Python 라이브러리.'
publishDate: '2026-04-10'
isFeatured: false
tags: ['data-preprocessing', 'python', 'filetype']
sourceUrl: 'https://github.com/devcomfort-labs/filetype_detector'
---

# filetype-detector

파일 확장자(Lexical), magic number(Magic), Google AI 기반(Magika) 세 가지 추론 전략을 유연하게 조합할 수 있는 Python 파일 타입 탐지 라이브러리입니다.

## 해결하는 문제

파일 타입 탐지는 단순히 확장자를 읽는 것(빠르지만 신뢰하기 어려움)부터 AI 모델로 내용을 분석하는 것(정확하지만 느림)까지 다양한 전략이 존재합니다. `filetype-detector`는 이 전략들을 통일된 API로 묶고, 상황에 맞게 선택하거나 조합할 수 있게 합니다.

## 추론 전략 비교

| Inferencer | 평균 처리 시간 | 처리량 | 적합한 용도 |
|---|---|---|---|
| **LexicalInferencer** | < 0.001ms | 50,000+ 파일/초 | 신뢰할 수 있는 확장자 환경 |
| **MagicInferencer** | ~1–5ms | 200–500 파일/초 | 바이너리 파일 내용 기반 탐지 |
| **MagikaInferencer** | ~5–10ms | 100–200 파일/초 | 텍스트 파일 고정밀 탐지 |
| **HybridInferencer** | ~1–6ms | 150–400 파일/초 | **⭐ 기본 권장** |

`HybridInferencer`는 바이너리 파일엔 Magic을, 텍스트 파일엔 Magika를 자동으로 선택해 속도와 정확도를 균형 있게 유지합니다.

## 설치

```bash
pip install filetype-detector
```

> **시스템 의존성**: `MagicInferencer`, `HybridInferencer`는 `libmagic` 라이브러리가 필요합니다.
> Ubuntu: `sudo apt-get install libmagic1` / macOS: `brew install libmagic`

## 사용 예시

```python
from filetype_detector.auto_inferencer import AutoInferencer

inferencer = AutoInferencer(backend="hybrid")
extension = inferencer.infer("document.pdf")  # → '.pdf'
extension = inferencer.infer("script.py")     # → '.py'
```

## 확장

`BaseInferencer`를 상속해 커스텀 추론기를 구현할 수 있습니다.

```python
from filetype_detector.base_inferencer import BaseInferencer

class CustomInferencer(BaseInferencer):
    def infer(self, file_path) -> str:
        # 커스텀 로직
        return ".custom"
```
