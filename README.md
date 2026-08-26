<p align="center">
<br>
<a href="https://box3101.github.io/ispark-sgate/guide"><img src="https://img.shields.io/badge/SGATE-성과관리_솔루션-D800BF?style=for-the-badge" alt="SGATE" /></a>
<br><br>
</p>

# SGATE

> 이즈파크 AX Group의 엔터프라이즈 성과관리 플랫폼

<p>
<a href="https://vuejs.org/"><img src="https://img.shields.io/badge/-Vue_3-4FC08D?style=flat-square&logo=vue.js&logoColor=white" /></a>
<a href="https://nuxt.com/"><img src="https://img.shields.io/badge/-Nuxt_3-00DC82?style=flat-square&logo=nuxt.js&logoColor=white" /></a>
<a href="https://typescriptlang.org/"><img src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" /></a>
<a href="https://pinia.vuejs.org/"><img src="https://img.shields.io/badge/-Pinia-FFD859?style=flat-square&logoColor=black" /></a>
<a href="https://www.npmjs.com/package/@leechanyong/ispark-ui"><img src="https://img.shields.io/badge/-ispark--ui-6366f1?style=flat-square" /></a>
</p>

---

**KPI 설정 → 평가 → 리포팅** 전 과정을 하나의 플랫폼에서 관리합니다.  
사내 디자인 시스템 [ispark-ui](https://github.com/box3101/ispark-ui) 위에 Atomic Design 구조로 설계했습니다.

### Demo

🔗 **[SGATE 가이드 페이지](https://box3101.github.io/ispark-sgate/guide)**

### Features

| | |
|---|---|
| **KPI 대시보드** | 조직·개인 성과 지표를 Chart.js로 시각화 |
| **드래그 앤 드롭** | 목표 우선순위를 직관적으로 관리 |
| **평가 워크플로우** | 자기평가 → 상위평가 → 확정 프로세스 |
| **디자인 시스템** | 30개+ 재사용 컴포넌트로 일관된 UI |
| **SSR** | Nuxt 3 기반 서버사이드 렌더링 |

### Structure

```
src/
├── components/     # Atomic Design 컴포넌트
├── composables/    # 비즈니스 로직
├── pages/          # 라우트 페이지
├── stores/         # Pinia 상태 관리
└── assets/         # SCSS, 이미지
```

### Setup

```bash
npm install && npm run dev
```

---

<sub>Built by <a href="https://github.com/box3101">@box3101</a> · 이찬용</sub>
