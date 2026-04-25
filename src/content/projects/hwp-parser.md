---
title: 'hwp-parser'
description: 'HWP 파일을 텍스트, HTML, Markdown, ODT로 변환하는 Python 라이브러리. LlamaIndex 통합으로 RAG 파이프라인에서 바로 활용 가능.'
publishDate: '2026-02-17'
isFeatured: false
tags: ['python', 'library', 'opensource', 'hwp', 'rag', 'llama-index']
sourceUrl: 'https://github.com/devcomfort-labs/hwp-parser'
projectUrl: 'https://huggingface.co/spaces/devcomfort/hwp-parser'
---

# hwp-parser

HWP 파일을 텍스트, HTML, Markdown, ODT로 변환하는 Python 라이브러리입니다. CLI 도구, Gradio 기반 Web UI, LlamaIndex 어댑터를 함께 제공해 RAG 파이프라인에서 한글 문서를 바로 활용할 수 있습니다.

## 핵심 기능

| 기능 | 설명 |
|---|---|
| 다중 포맷 변환 | HWP → Text / HTML / Markdown / ODT |
| CLI 도구 | `hwp-parser convert *.hwp` 로 대량 변환 |
| Web UI | Gradio 기반 대화형 변환 데모 |
| LlamaIndex 통합 | RAG 파이프라인에서 HWP 문서 직접 인덱싱 |

## 설치

```bash
# 기본 설치
pip install git+https://github.com/devcomfort-labs/hwp-parser.git

# LlamaIndex 어댑터 포함
pip install "hwp-parser[llama-index] @ git+https://github.com/devcomfort-labs/hwp-parser.git"
```

## 사용 예시

```python
# Python API
from hwp_parser import HWPConverter

result = HWPConverter().to_markdown("document.hwp")
print(result.content)
```

```python
# LlamaIndex RAG 파이프라인
from hwp_parser import HWPReader
from llama_index.core import VectorStoreIndex

documents = HWPReader().load_data("document.hwp")
index = VectorStoreIndex.from_documents(documents)
```

```bash
# CLI
hwp-parser convert *.hwp

# Web UI 실행
hwp-parser web
```

설치 없이 [Hugging Face Spaces](https://huggingface.co/spaces/devcomfort/hwp-parser)에서 바로 체험할 수 있습니다.

> 라이선스: AGPL-3.0 (핵심 의존성 [pyhwp](https://github.com/mete0r/pyhwp) 준수)
