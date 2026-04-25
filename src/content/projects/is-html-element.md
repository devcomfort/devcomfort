---
title: 'is-html-element'
description: 'instanceof보다 100% 정확한 HTML 요소 타입 판별 유틸리티. tagName 기반으로 112개 HTML 요소를 완벽하게 구분합니다.'
publishDate: '2025-09-09'
isFeatured: false
tags: ['typescript', 'javascript', 'library', 'opensource', 'dom', 'type-guard']
sourceUrl: 'https://github.com/devcomfort/is-html-element'
projectUrl: 'https://www.npmjs.com/package/is-html-element'
---

# is-html-element

TypeScript에서 HTML 요소의 타입을 정확하게 판별하는 타입 가드 유틸리티입니다. `instanceof` 대신 `tagName` 기반 검사를 사용해 `<article>`, `<section>`, `<nav>` 등 별도 인터페이스가 없는 39개 요소까지 완벽히 구분합니다.

## 문제: `instanceof`의 한계

```
| 방법            | 정확도                |
|-----------------|----------------------|
| isHTMLElement   | 112/112 (100.00%)    |
| instanceof      | 73/112  (~65.18%)    |
```

`instanceof`는 특정 인터페이스가 없는 요소(예: `<article>`, `<section>`, `<nav>`, `<summary>` 등)를 모두 `HTMLElement`로만 식별합니다. 이 라이브러리는 `tagName`을 통해 이 문제를 해결합니다.

## 설치

```bash
npm install is-html-element
# 또는
pnpm add is-html-element
```

## 사용 예시

```typescript
import { isHTMLElement } from 'is-html-element';

const el = document.querySelector('div');

// 기본 HTMLElement 판별
if (isHTMLElement(el)) {
  // TypeScript: el is HTMLElement
}

// 특정 태그 타입으로 좁히기 (자동완성 지원)
if (isHTMLElement(el, 'div')) {
  // TypeScript: el is HTMLDivElement
}

if (isHTMLElement(el, 'canvas')) {
  el.getContext('2d'); // TypeScript: el is HTMLCanvasElement
}
```

타입 파라미터는 `HTMLElementTagNameMap`의 키를 그대로 사용하므로 IDE 자동완성이 완벽하게 동작합니다.
