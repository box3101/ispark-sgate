<template>
  <!-- 배분표 관리 테이블 -->
  <UiTable
    v-model="gradeDistributionData"
    title="배분표 관리"
    scrollable
    max-height="calc(100vh - 200px)"
  >
    <template #colgroup>
      <col style="width: 150px" />
      <col style="width: auto" />
      <col style="width: auto" />
      <col style="width: auto" />
    </template>
    <template #header>
      <th v-for="header in gradeDistributionHeaders" :key="header.key">
        {{ header.title }}
      </th>
    </template>
    <template #header-action-right>
      <UiButton variant="primary" size="medium" @click="$emit('download-template')">
        등급배분표 양식다운로드
      </UiButton>
      <UiButton variant="primary" size="medium" @click="$emit('upload-template')">
        등급배분표 양식업로드
      </UiButton>
    </template>
    <template #body="{ rows }">
      <tr v-for="row in rows" :key="row.id">
        <td class="text-center">
          {{ row.name }}
        </td>
        <td class="text-center">
          {{ row.S }}
        </td>
        <td class="text-center">
          {{ row.B }}
        </td>
        <td class="text-center">
          {{ row.C }}
        </td>
        <td class="text-center">
          {{ row.D }}
        </td>
      </tr>
    </template>
  </UiTable>
</template>

<script setup>
  const gradeDistributionHeaders = ref([
    { key: 'name', title: '명수' },
    { key: 'S', title: 'S' },
    { key: 'B', title: 'B' },
    { key: 'C', title: 'C' },
    { key: 'D', title: 'D' }
  ])

  const gradeDistributionData = ref([
    { id: 1, name: 5, S: 5, B: 5, C: 5, D: 5 },
    { id: 2, name: 5, S: 5, B: 5, C: 5, D: 5 },
    { id: 3, name: 5, S: 5, B: 5, C: 5, D: 5 },
    { id: 4, name: 10, S: 1, B: 3, C: 4, D: 2 },
    { id: 5, name: 15, S: 2, B: 5, C: 5, D: 3 },
    { id: 6, name: 20, S: 2, B: 6, C: 8, D: 4 },
    { id: 7, name: 25, S: 3, B: 8, C: 10, D: 4 },
    { id: 8, name: 30, S: 3, B: 9, C: 12, D: 6 },
    { id: 9, name: 35, S: 4, B: 11, C: 14, D: 6 },
    { id: 10, name: 40, S: 4, B: 12, C: 16, D: 8 },
    { id: 11, name: 45, S: 5, B: 14, C: 18, D: 8 },
    { id: 12, name: 50, S: 5, B: 15, C: 20, D: 10 },
    { id: 13, name: 55, S: 6, B: 17, C: 22, D: 10 },
    { id: 14, name: 60, S: 6, B: 18, C: 24, D: 12 },
    { id: 15, name: 65, S: 7, B: 20, C: 26, D: 12 },
    { id: 16, name: 70, S: 7, B: 21, C: 28, D: 14 },
    { id: 17, name: 75, S: 8, B: 23, C: 30, D: 14 },
    { id: 18, name: 80, S: 8, B: 24, C: 32, D: 16 },
    { id: 19, name: 85, S: 9, B: 26, C: 34, D: 16 },
    { id: 20, name: 90, S: 9, B: 27, C: 36, D: 18 },
    { id: 21, name: 95, S: 10, B: 29, C: 38, D: 18 },
    { id: 22, name: 100, S: 10, B: 30, C: 40, D: 20 },
    { id: 23, name: 110, S: 11, B: 33, C: 44, D: 22 },
    { id: 24, name: 120, S: 12, B: 36, C: 48, D: 24 },
    { id: 25, name: 130, S: 13, B: 39, C: 52, D: 26 },
    { id: 26, name: 140, S: 14, B: 42, C: 56, D: 28 },
    { id: 27, name: 150, S: 15, B: 45, C: 60, D: 30 },
    { id: 28, name: 160, S: 16, B: 48, C: 64, D: 32 },
    { id: 29, name: 170, S: 17, B: 51, C: 68, D: 34 },
    { id: 30, name: 180, S: 18, B: 54, C: 72, D: 36 },
    { id: 31, name: 190, S: 19, B: 57, C: 76, D: 38 },
    { id: 32, name: 200, S: 20, B: 60, C: 80, D: 40 },
    { id: 33, name: 250, S: 25, B: 75, C: 100, D: 50 }
  ])
</script>
