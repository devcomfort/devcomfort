---
title: 'ollama-models'
description: 'Ollama 레지스트리에서 모델 검색 및 태그 목록을 조회할 수 있는 REST API와 TypeScript/Python 클라이언트 라이브러리.'
publishDate: '2026-04-08'
isFeatured: false
tags: ['typescript', 'python', 'library', 'opensource', 'ollama', 'cloudflare-workers']
sourceUrl: 'https://github.com/devcomfort/ollama-models'
projectUrl: 'https://ollama-models-api.devcomfort.workers.dev'
---

# ollama-models

Ollama는 공식 레지스트리 검색 API를 제공하지 않습니다. 이 프로젝트는 Ollama 웹사이트의 SSR HTML을 파싱해 모델 검색 결과와 태그(weights) 목록을 구조화된 JSON으로 반환하는 REST API와 클라이언트 라이브러리입니다.

## 구조

```
api/              # Cloudflare Workers 배포 REST API
packages/
  ts-client/      # @devcomfort/ollama-models — TypeScript/JS 클라이언트
  py-client/      # ollama-models — Python 클라이언트
```

## REST API

**Base URL:** `https://ollama-models-api.devcomfort.workers.dev`

| 엔드포인트 | 설명 |
|---|---|
| `GET /search?q=qwen3` | 모델 검색 결과 페이지 목록 반환 |
| `GET /model?name=qwen3` | 특정 모델의 모든 태그(weights) 반환 |

## 클라이언트 설치

```bash
# TypeScript/JavaScript
npm install @devcomfort/ollama-models

# Python
pip install ollama-models
```

## 사용 예시

```typescript
import { searchModels, getModelTags } from '@devcomfort/ollama-models';

const results = await searchModels('qwen3');
const tags = await getModelTags('qwen3');
// tags.model_list → [{ id: 'qwen3:latest' }, { id: 'qwen3:4b' }, ...]
```
