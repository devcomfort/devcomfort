---
title: 'devcomfort-text-transcoder'
description: 'Node.js와 브라우저 환경에서 텍스트 인코딩 변환을 위한 경량 라이브러리. UTF-8, EUC-KR, EUC-JP 등 다양한 인코딩을 지원합니다.'
publishDate: '2024-01-01'
isFeatured: true
tags: ['data-preprocessing', 'typescript', 'encoding']
sourceUrl: 'https://github.com/devcomfort/devcomfort-text-transcoder'
projectUrl: 'https://www.npmjs.com/package/@devcomfort/text-transcoder'
---

# @devcomfort/text-transcoder

Node.js와 브라우저 환경에서 텍스트 인코딩을 변환하는 경량 라이브러리입니다. UTF-8, EUC-KR, EUC-JP, Windows-1252 등 다양한 인코딩 간 변환을 간결한 API 하나로 처리합니다.

## 해결하는 문제

JavaScript 생태계에는 텍스트 인코딩 변환 라이브러리가 여럿 있지만, ESM/CJS/CDN 세 환경을 모두 지원하면서 TypeScript 타입이 포함된 경우는 드뭅니다. `@devcomfort/text-transcoder`는 이 세 가지를 모두 충족하는 단일 패키지입니다.

## 핵심 기능

- ESM, CJS, UMD(CDN) 빌드 모두 제공
- TypeScript 타입 정의 포함
- `transcode(text, fromEncoding, toEncoding)` 단일 API
- vitest로 테스트됨

## 설치

```bash
npm install @devcomfort/text-transcoder
# 또는
pnpm add @devcomfort/text-transcoder
```

## 사용 예시

```typescript
// ESM
import { transcode } from '@devcomfort/text-transcoder';

// EUC-KR → Windows-1252
transcode('자', 'euc-kr', 'windows-1252'); // → 'ÀÚ'

// Windows-1252 → EUC-KR
transcode('ÀÚ', 'windows-1252', 'euc-kr'); // → '자'
```

```html
<!-- CDN (브라우저) -->
<script src="https://cdn.jsdelivr.net/npm/@devcomfort/text-transcoder/dist/umd/index.js"></script>
<script>
  textTranscoder.transcode('ÀÚ', 'windows-1252', 'euc-kr'); // → '자'
</script>
```

레거시 시스템 연동, EUC-KR 문서 처리, 인코딩이 혼재된 데이터 파이프라인 등에서 활용할 수 있습니다.
