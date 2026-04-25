---
title: 'blob-to-url'
description: 'Blob 객체를 Blob URL 또는 Data URI로 변환하는 경량 유틸리티. ESM, CJS, UMD 모두 지원합니다.'
publishDate: '2025-03-29'
isFeatured: false
tags: ['typescript', 'javascript', 'library', 'opensource', 'browser']
sourceUrl: 'https://github.com/devcomfort/blob-to-url'
---

# blob-to-url

`Blob` 또는 `File` 객체를 Blob URL(`blob:...`) 또는 Base64 Data URI로 변환하는 경량 유틸리티 라이브러리입니다.

## 해결하는 문제

브라우저에서 파일 미리보기, 다운로드 링크 생성, 이미지 인라인 삽입 등을 구현할 때 `Blob` 객체를 URL로 바꿔야 하는 경우가 빈번합니다. `URL.createObjectURL`과 `FileReader`를 직접 다루면 메모리 누수(revoke 누락)나 비동기 처리 오류가 생기기 쉽습니다. `blob-to-url`은 이 두 변환을 간결한 API로 제공하고, Blob URL의 경우 직접 revoke 함수를 함께 반환해 메모리 관리를 명시적으로 만듭니다.

## 핵심 기능

- **`toBlobURL(blob)`** — Blob URL 생성. `{ url, revoke }` 형태로 반환해 리소스 해제를 명시
- **`toDataURI(blob)`** — Blob을 Base64 인코딩 Data URI 문자열로 변환
- 외부 의존성 없음
- TypeScript 타입 정의 포함
- ESM / CJS / UMD 빌드 모두 제공

## 사용 예시

```typescript
import { toBlobURL, toDataURI } from 'blob-to-url';

// Blob URL — 사용 후 반드시 revoke
const { url, revoke } = toBlobURL(myBlob);
imgElement.src = url;
// ... 사용 완료 후
revoke();

// Data URI — 인라인 삽입이나 직렬화에 적합
const dataURI = toDataURI(myBlob);
```
