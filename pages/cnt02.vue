<template>
  <div>
    <h1>PMS 내용입니다</h1>
    <p>이곳은 CNT2 페이지입니다</p>
  </div>
</template>

<script setup>
import { inject } from 'vue';

// 로고 텍스트 접근
const logoText = inject('logoText');

// 원하는 시점에 로고 텍스트 변경
logoText.value = '대시보드';
</script>