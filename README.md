<div align="center">

# SGATE 성과관리 솔루션

**이즈파크 AX Group의 엔터프라이즈 성과관리 플랫폼**

[![Vue3](https://img.shields.io/badge/Vue_3-4FC08D?style=flat-square&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Nuxt3](https://img.shields.io/badge/Nuxt_3-00DC82?style=flat-square&logo=nuxt.js&logoColor=white)](https://nuxt.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org/)
[![Pinia](https://img.shields.io/badge/Pinia-FFD859?style=flat-square&logoColor=black)](https://pinia.vuejs.org/)

</div>

---

## Overview

SGATE는 조직의 KPI 설정부터 평가, 리포팅까지 전 과정을 관리하는 성과관리 솔루션입니다.  
사내 디자인 시스템 [ispark-ui](https://github.com/box3101/ispark-ui)를 기반으로 구축했습니다.

## Tech Stack

| 영역 | 기술 |
|------|------|
| **Framework** | Vue 3 + Nuxt 3 |
| **Language** | TypeScript |
| **State** | Pinia |
| **Style** | SCSS (Atomic Design) |
| **Chart** | Chart.js |
| **Design System** | [@leechanyong/ispark-ui](https://www.npmjs.com/package/@leechanyong/ispark-ui) |

## Key Features

- **KPI 대시보드** — 조직·개인 성과 지표 시각화
- **드래그 앤 드롭** — 직관적인 목표 우선순위 관리
- **평가 워크플로우** — 자기평가 → 상위평가 → 확정 프로세스
- **디자인 시스템** — 30개+ 재사용 컴포넌트로 일관된 UI
- **SSR 최적화** — Nuxt 3 기반 서버사이드 렌더링

## Project Structure

```
src/
├── components/     # UI 컴포넌트 (Atomic Design)
├── composables/    # 비즈니스 로직
├── layouts/        # 페이지 레이아웃
├── pages/          # 라우트 페이지
├── stores/         # Pinia 상태 관리
└── assets/         # 스타일, 이미지
```

## Getting Started

```bash
npm install
npm run dev
```

---

<div align="center">
  <sub>Built by <a href="https://github.com/box3101">@box3101</a></sub>
</div>
