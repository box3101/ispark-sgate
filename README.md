<p align="center">
<br>
<a href="https://box3101.github.io/ispark-sgate/guide"><img src="https://img.shields.io/badge/SGATE-Performance_Management-D800BF?style=for-the-badge" /></a>
<br><br>
<strong>조직의 목표 설정부터 평가·확정까지, 하나의 플랫폼에서.</strong>
<br><br>
<a href="https://vuejs.org/"><img src="https://img.shields.io/badge/Vue_3-4FC08D?style=flat-square&logo=vue.js&logoColor=white" /></a>
<a href="https://nuxt.com/"><img src="https://img.shields.io/badge/Nuxt_3-00DC82?style=flat-square&logo=nuxt.js&logoColor=white" /></a>
<a href="https://typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" /></a>
<a href="https://pinia.vuejs.org/"><img src="https://img.shields.io/badge/Pinia-FFD859?style=flat-square" /></a>
<a href="https://www.npmjs.com/package/@leechanyong/ispark-ui"><img src="https://img.shields.io/badge/ispark--ui-6366f1?style=flat-square" /></a>
</p>

---

### What is SGATE?

이즈파크 AX Group 전사에서 사용하는 **엔터프라이즈 성과관리 솔루션**입니다.  
서비스 리뉴얼 기획 단계부터 참여하여, **프론트엔드 메인 설계를 100% 담당**했습니다.

사내 디자인 시스템 [ispark-ui](https://github.com/box3101/ispark-ui)를 직접 설계·배포하고,  
이 시스템 위에 **Atomic Design + Nuxt 3 SSR** 구조로 전체 UI를 구축했습니다.

> [!NOTE]
> **개발 속도 30% 향상** — Pinia 도입으로 Vuex 대비 코드 복잡도 30% 감소  
> **AI 워크플로우** — Cursor.ai 활용으로 개발 효율 40% 향상

### Demo

🔗 **[SGATE 가이드 페이지](https://box3101.github.io/ispark-sgate/guide)**

<img src="public/images/login-thumail.png" alt="SGATE 로그인" width="600" />

### Highlights

```
30+  재사용 컴포넌트       — ispark-ui 기반 일관된 UI
100% 프론트엔드 기여도     — 기획 → 설계 → 구현 전체
30%  코드 복잡도 감소      — Pinia 상태 관리 전환
40%  개발 효율 향상        — AI 워크플로우 도입
```

### Architecture

| Layer | Stack | Role |
|-------|-------|------|
| **View** | Nuxt 3 + Vue 3 | SSR 페이지 렌더링 |
| **State** | Pinia | 전역 상태 + 비즈니스 로직 |
| **UI** | ispark-ui | 30개+ 공통 컴포넌트 |
| **Style** | SCSS | Atomic Design 토큰 시스템 |
| **Chart** | Chart.js | KPI 시각화 대시보드 |

### Core Features

**📊 KPI 대시보드** — 조직·개인 성과 지표를 실시간 시각화하고 목표 대비 달성률을 추적합니다.

**🔀 드래그 앤 드롭** — 평가 항목의 우선순위를 드래그로 직관적으로 조정합니다.

**📝 평가 워크플로우** — 자기평가 → 1차 평가 → 2차 평가 → 확정까지 전체 프로세스를 관리합니다.

**🎨 디자인 시스템** — ispark-ui 컴포넌트를 실전 적용하여 개발·디자인 간 일관성을 확보했습니다.

### Setup

```bash
npm install && npm run dev
```

---

<sub>이찬용 · <a href="https://github.com/box3101">@box3101</a></sub>
