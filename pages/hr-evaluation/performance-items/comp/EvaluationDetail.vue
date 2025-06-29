<template>
  <UiTable
    v-model="evaluationTemplateData"
    @save="handleSave"
    editable
    sortable
    scrollable
    max-height="calc(100vh - 200px)"
  >
    <template #colgroup>
      <col style="width: 40px" />
      <col style="width: auto" />
      <col style="width: 150px" />
    </template>
    <template #header="{ selectAll, isAllSelected }">
      <th>
        <UiCheckbox
          size="large"
          @click.stop
          :modelValue="isAllSelected"
          @update:modelValue="selectAll"
        />
      </th>
      <th v-for="header in evaluationTemplateHeaders" :key="header.key">
        {{ header.title }}
      </th>
    </template>
    <template
      #body="{
        rows,
        toggleRowSelection,
        isRowSelected,
        handleDragStart,
        handleDragOver,
        handleDrop,
        handleDragEnd,
        sortable,
        editable
      }"
    >
      <tr
        v-for="(row, index) in rows"
        :key="row.id"
        :draggable="sortable"
        @dragstart="e => handleDragStart(e, index)"
        @dragover="handleDragOver"
        @drop="e => handleDrop(e, index)"
        @dragend="handleDragEnd"
        :class="{ 'sortable-row': sortable }"
      >
        <td>
          <UiCheckbox
            size="large"
            @click.stop
            :modelValue="isRowSelected(row)"
            @update:modelValue="() => toggleRowSelection(row)"
          />
        </td>
        <td>
          <UiInput v-model="row.name" placeholder="템플릿명" />
        </td>
        <td>
          <UiInput type="number" v-model="row.type" placeholder="배점" />
        </td>
        <td class="text-center color-primary">
          <UiButton variant="ghost" size="medium" @click="handleEdit(row)">
            {{ row.scale }}
          </UiButton>
        </td>
      </tr>
    </template>
  </UiTable>

  <!-- 평가척도설정 모달 -->
  <UiModal v-model="showModal" title="평가척도설정" showFooter>
    <template #body>
      <UiInput v-model="scale" placeholder="평가척도" />
    </template>
    <template #footerActions>
      <UiButton variant="primary" @click="handleSave">저장</UiButton>
    </template>
  </UiModal>
</template>

<script setup>
  import { ref } from 'vue'

  const emit = defineEmits(['save'])

  const evaluationTemplateHeaders = ref([
    { key: 'name', title: '평가항목' },
    { key: 'type', title: '배점' },
    { key: 'scale', title: '평가척도' }
  ])

  const evaluationTemplateData = ref([
    { id: 1, name: '샘플 템플릿 1', type: 50, scale: 'S(100),A(90),B(80),C(70),D(60)' },
    { id: 2, name: '샘플 템플릿 2', type: 50, scale: 'S(100),A(90),B(80),C(70),D(60)' },
    { id: 3, name: '샘플 템플릿 3', type: 50, scale: 'S(100),A(90),B(80),C(70),D(60)' },
    { id: 4, name: '업무성과 평가', type: 30, scale: 'S(100),A(90),B(80),C(70),D(60)' },
    { id: 5, name: '리더십 역량', type: 25, scale: 'S(100),A(90),B(80),C(70),D(60)' },
    { id: 6, name: '팀워크 평가', type: 20, scale: 'S(100),A(90),B(80),C(70),D(60)' },
    { id: 7, name: '의사소통 능력', type: 15, scale: 'S(100),A(90),B(80),C(70),D(60)' },
    { id: 8, name: '문제해결 역량', type: 40, scale: 'S(100),A(90),B(80),C(70),D(60)' },
    { id: 9, name: '혁신 역량', type: 35, scale: 'S(100),A(90),B(80),C(70),D(60)' },
    { id: 10, name: '전문성 평가', type: 45, scale: 'S(100),A(90),B(80),C(70),D(60)' },
    { id: 11, name: '목표달성도', type: 50, scale: 'S(100),A(90),B(80),C(70),D(60)' },
    { id: 12, name: '고객만족 기여도', type: 30, scale: 'S(100),A(90),B(80),C(70),D(60)' },
    { id: 13, name: '자기계발 노력', type: 20, scale: 'S(100),A(90),B(80),C(70),D(60)' },
    { id: 14, name: '핵심가치 실천', type: 25, scale: 'S(100),A(90),B(80),C(70),D(60)' },
    { id: 15, name: '업무 효율성', type: 30, scale: 'S(100),A(90),B(80),C(70),D(60)' },
    { id: 16, name: '협업 능력', type: 35, scale: 'S(100),A(90),B(80),C(70),D(60)' },
    { id: 17, name: '책임감', type: 40, scale: 'S(100),A(90),B(80),C(70),D(60)' },
    { id: 18, name: '전략적 사고', type: 45, scale: 'S(100),A(90),B(80),C(70),D(60)' },
    { id: 19, name: '조직 기여도', type: 30, scale: 'S(100),A(90),B(80),C(70),D(60)' },
    { id: 20, name: '업무 추진력', type: 35, scale: 'S(100),A(90),B(80),C(70),D(60)' },
    { id: 21, name: '변화 대응력', type: 25, scale: 'S(100),A(90),B(80),C(70),D(60)' },
    { id: 22, name: '윤리의식', type: 30, scale: 'S(100),A(90),B(80),C(70),D(60)' },
    { id: 23, name: '직무 전문성', type: 40, scale: 'S(100),A(90),B(80),C(70),D(60)' }
  ])

  const showModal = ref(false) // 평가척도설정 모달

  /**
   * 평가항목 저장
   * 목적: 테이블에서 선택된 행의 데이터를 관리
   */
  const handleSave = () => {
    alert('평가항목 데이터가 저장되었습니다!')
  }

  /**
   * 평가항목 수정
   * 목적: 테이블에서 선택된 행의 데이터를 관리
   */
  const handleEdit = row => {
    showModal.value = true
  }
</script>
