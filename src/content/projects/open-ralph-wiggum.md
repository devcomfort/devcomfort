---
title: 'open-ralph-wiggum'
description: 'Claude Code, Codex, Copilot CLI, OpenCode를 지원하는 자율 AI 코딩 에이전트 루프 CLI. 에이전트가 태스크를 완료할 때까지 반복 실행합니다.'
publishDate: '2026-03-15'
isFeatured: false
tags: ['agentic-loop', 'cli', 'ralph-wiggum']
sourceUrl: 'https://github.com/devcomfort/open-ralph-wiggum'
---

# open-ralph-wiggum

[Th0rgal/open-ralph-wiggum](https://github.com/Th0rgal/open-ralph-wiggum) 프로젝트의 포크로, [Geoffrey Huntley의 Ralph Wiggum 기법](https://ghuntley.com/ralph/)을 CLI로 구현한 도구입니다. AI 코딩 에이전트(Claude Code, Codex, Copilot CLI, OpenCode)에게 동일한 프롬프트를 반복 전달하며, 에이전트가 `<promise>DONE</promise>` 태그를 출력하면 루프를 종료합니다.

## 기여 내용

이 포크에서는 **스킬(skill) 지원**을 추가했습니다. 에이전트 루프 실행 시 특정 스킬을 함께 전달할 수 있도록 확장했습니다.

## 작동 원리

에이전트는 매 이터레이션마다 동일한 프롬프트를 받지만, 이전 작업 결과가 파일 시스템과 git 히스토리에 누적되어 있습니다. 이를 통해 에이전트가 자신의 이전 작업을 보고 스스로 수정하는 피드백 루프가 형성됩니다.

```bash
# 기본 사용법
ralph "테스트가 모두 통과하도록 코드를 수정해줘" --max-iterations 10

# 에이전트 지정
ralph "REST API를 구현해줘" --agent claude-code --max-iterations 15

# 상태 확인 (별도 터미널에서)
ralph --status
```

## 지원 에이전트

| 에이전트 | 플래그 |
|---|---|
| OpenCode | 기본값 |
| Claude Code | `--agent claude-code` |
| OpenAI Codex | `--agent codex` |
| Copilot CLI | `--agent copilot` |

## 설치

```bash
npm install -g open-ralph-wiggum
```
