---
title: 'parallel-download'
description: 'asyncio와 aiohttp 기반의 고성능 병렬 파일 다운로드 Python 라이브러리. 91개 테스트, 100% 커버리지.'
publishDate: '2026-03-02'
isFeatured: false
tags: ['python', 'library', 'opensource', 'async', 'download']
sourceUrl: 'https://github.com/devcomfort-labs/parallel_download'
---

# parallel-download

`asyncio`와 `aiohttp`를 기반으로 여러 파일을 동시에 다운로드하는 고성능 Python 라이브러리입니다. 91개 테스트 케이스로 100% 커버리지를 유지합니다.

## 핵심 기능

- **병렬 다운로드** — `asyncio.Semaphore`로 동시 요청 수를 제어해 리소스 고갈 없이 빠르게 처리
- **자동 파일명 추출** — URL 경로에서 파일명 자동 추출. 모호한 URL은 명시적 에러로 방지
- **구조화된 결과** — `DownloadSuccess` / `DownloadFailure` 판별 유니온으로 직관적인 결과 처리
- **계층적 에러** — `HTTPError`, `NetworkError`, `DownloadTimeoutError` 등 세분화된 예외 클래스
- **Pydantic v2 모델** — 전체 타입 힌트와 런타임 유효성 검사

## 설치

```bash
pip install git+https://github.com/devcomfort-labs/parallel_download.git
# 또는
uv add git+https://github.com/devcomfort-labs/parallel_download.git
```

## 사용 예시

```python
import asyncio
from pathlib import Path
from parallel_download import Downloader

async def main():
    downloader = Downloader(
        out_dir=Path("./downloads"),
        timeout=60,
        max_concurrent=5,
    )

    results = await downloader.download([
        "https://example.com/file1.pdf",
        "https://example.com/file2.csv",
        {"url": "https://example.com/data", "filename": "data.json"},
    ])

    for r in results:
        if r.status == "success":
            print(f"✓ {r.filename} → {r.file_path}")
        else:
            print(f"✗ {r.filename}: {r.error}")

asyncio.run(main())
```

다운로드 전 URL 유효성을 사전 검증하거나, 실패 건만 필터링해 재시도 로직을 붙이는 것도 가능합니다.
