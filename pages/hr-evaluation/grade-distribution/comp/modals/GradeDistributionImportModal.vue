<template>
  <UiModal v-model="showImportModal" title="등급배분표 가져오기" showFooter>
    <UiSelect
      v-model="selectedValue"
      :options="options"
      placeholder="기준년도"
      size="medium"
      class="w-200"
    />
    <UiTable v-model="data" class="rating-table">
      <template #colgroup>
        <col style="width: 60px" />
        <col style="width: auto" />
        <col style="width: 120px" />
      </template>
      <template #header>
        <th></th>
        <th>등급배분표</th>
        <th>평가등급수</th>
      </template>
      <template #body="{ rows }">
        <tr
          v-for="row in rows"
          :key="row.id"
          class="table-row"
          :class="{ 'selected-row': selectedGroupId === row.id }"
          @click="selectRow(row.id, $event)"
        >
          <td class="radio-cell">
            <UiRadio v-model="selectedGroupId" :value="row.id" name="rating-group" size="medium" />
          </td>
          <td>{{ row.name }}</td>
          <td class="text-center">{{ row.ratingCount }}</td>
        </tr>
      </template>
    </UiTable>
    <template #footerActions>
      <UiButton size="medium" variant="primary">가져오기</UiButton>
    </template>
  </UiModal>
</template>

<script setup>
  const data = ref([
    {
      id: 1,
      name: '등급배분표 1',
      ratingCount: 10
    },
    {
      id: 2,
      name: '등급배분표 2',
      ratingCount: 20
    },
    {
      id: 3,
      name: '등급배분표 3',
      ratingCount: 30
    }
  ])

  const selectRow = (groupId, event) => {
    event.preventDefault()
    selectedGroupId.value = groupId
    console.log('행 클릭됨, 선택된 ID:', groupId)
  }

  const selectedGroupId = ref(null)
</script>
