---
title: 'parallel-compress'
description: 'asyncio 기반 병렬 파일 압축/해제 Python 라이브러리. ZIP, TAR, gz, bz2, xz 등 11개 포맷을 지원합니다.'
publishDate: '2026-03-10'
isFeatured: false
tags: ['python', 'library', 'opensource', 'async', 'compression']
sourceUrl: 'https://github.com/devcomfort-labs/parallel_compress'
---

# parallel-compress

`asyncio.Semaphore` 기반의 동시성 제어로 다수의 파일을 병렬로 압축하고 해제하는 Python 라이브러리입니다. ZIP, TAR 계열 아카이브부터 단일 파일 압축(gz, bz2, xz)까지 11개 포맷을 지원합니다.

## 핵심 기능

- **병렬 처리** — `asyncio.Semaphore`로 동시 작업 수를 제어하면서 빠른 처리
- **11개 포맷** — `.zip`, `.tar`, `.tar.gz`, `.tar.bz2`, `.tar.xz`, `.gz`, `.bz2`, `.xz` 등
- **MIME 검증** — `python-magic`으로 압축 해제 전 아카이브 무결성 사전 검증
- **구조화된 결과** — `CompressSuccess` / `CompressFailure` 판별 유니온으로 명확한 결과 처리
- **계층적 에러** — `UnsupportedFormatError`, `BulkValidationError` 등 목적별 예외 클래스
- **플러그인 확장** — `@register_handler` 데코레이터 또는 `entry_points`로 커스텀 포맷 추가

## 설치

```bash
rye add parallel-compress --git https://github.com/devcomfort-labs/parallel_compress.git
rye sync
```

## 사용 예시

```python
import asyncio
from parallel_compress import AutoCompress, AutoDecompress

async def main():
    # 압축
    compressor = AutoCompress(max_concurrent=5)
    results = await compressor.run(
        files=["data.csv", "model.pkl", "config.json"],
        output="archive.tar.gz",
        format=".tar.gz",
    )
    for r in results:
        print(f"✓ {r.filename} ({r.size_bytes} bytes)" if r.status == "success" else f"✗ {r.error}")

    # 해제
    decompressor = AutoDecompress(max_concurrent=5)
    results = await decompressor.run(
        archives=["archive.tar.gz"],
        out_dir="./extracted",
    )

asyncio.run(main())
```

여러 그룹을 각각 별도 아카이브로 병렬 압축하는 것도 가능합니다.

```python
results = await compressor.run(
    files=[["src/main.py", "src/utils.py"], ["docs/api.md"]],
    output=["src.tar.gz", "docs.tar.gz"],
    format=".tar.gz",
)
```
