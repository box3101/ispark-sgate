<template>
  <div class="report-creation-container">
    <header class="report-header">
      <div class="ct-top flex justify-between w-full">
        <ul class="my_menu flex gap-23 items-center">
          <li class="tbl-btn flex gap-5">
            <UiDatePicker
              class="w-270"
              v-model="dateRange"
              isRange
              startPlaceholder="시작일"
              endPlaceholder="마지막날짜"
              size="medium"
            />
            <UiButton variant="tertiary">
              <i class="icon icon-md icon-search"></i>
            </UiButton>
          </li>
          <h1>주간보고</h1>
        </ul>
        <div class="tbl-btn flex gap-5">
          <UiButton variant="tertiary">
            <i class="icon icon-md icon-excel"></i>
            <span>Excel</span>
          </UiButton>
          <UiButton variant="tertiary">
            <i class="icon icon-md icon-robot"></i>
            <span>AI 취합 보고서 생성</span>
          </UiButton>
          <UiButton class="org-btn new" @click="reportConfigModal = true">
            <i class="icon icon-md icon-create icon-white"></i>
            <span>보고서작성</span>
          </UiButton>
        </div>
      </div>
    </header>
    <div class="report-content mt-20">
      <div class="report-content-layout flex gap-20">
        <div class="left-content w-19p">
          <!-- 왼쪽 콘텐츠 영역 -->
          <div class="report-list">
            <!-- 보고서 목록이 들어갈 영역 -->
            <ul class="report-items">
              <li
                v-for="(report, index) in reports"
                :key="index"
                class="report-item"
              >
                <div
                  :data-index="index"
                  class="flex justify-between items-center p-2 hover:bg-gray-50 cursor-pointer"
                >
                  <span>
                    {{ report.type }} {{ report.date }} {{ report.status }}
                  </span>
                  <span class="searchIcon flex gap-2">
                    <a href="#" @click.prevent="deleteReport(index)">
                      <i class="icon icon-md icon-delete"></i>
                    </a>
                    <a href="#" @click.prevent="editReport(index)">
                      <i class="icon icon-md icon-edit"></i>
                    </a>
                    <a href="#" @click.prevent="viewReport(index)">
                      <i class="icon icon-md icon-magnify"></i>
                    </a>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="right-content w-81p">
          <!-- 오른쪽 콘텐츠 영역 -->
          <div class="report-detail">
            <!-- 보고서 상세 내용이 들어갈 영역 -->
            <div class="report-header">
              <div class="report-meta">
                <div class="report-date">
                  작성자: 이찬용 | 제출일: 2025.03.05 | 제출대상 : 한성진
                </div>
                <div class="report-actions">
                  <UiButton variant="tertiary">
                    <i class="icon icon-md icon-edit"></i>
                    <span>수정</span>
                  </UiButton>
                  <UiButton variant="tertiary">
                    <i class="icon icon-md icon-delete"></i>
                    <span>삭제</span>
                  </UiButton>
                </div>
              </div>
            </div>
            <div class="report-body">
              <UiTable
                :headers="['KPI', 'OKR', '금주실적', '차주계획']"
                :column-widths="['20%', '20%', '30%', '30%']"
                :items="reportItems"
              />
              <div>
                <UiRowTable
                  :items="[
                    {
                      title: '의견/기타',
                      content:
                        '의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다의견 내용입니다.',
                    },
                    { title: '첨부파일', content: '첨부파일 내용입니다.' },
                    { title: '피드백', content: '피드백 내용입니다.' },
                  ]"
                  leftColumnWidth="10%"
                  rightColumnWidth="90%"
                  :padding="true"
                  :centerLeftText="true"
                  :showBorderRight="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 보고서 팝업 -->
  <UiModal title="보고서 설정" v-model="reportConfigModal" :size="'large'">
    <template #headerActions-right>
      <UiButton variant="primary">
        <i class="icon icon-md icon-create icon-white"></i>
        <span>보고서생성</span>
      </UiButton>
    </template>

    <UiFormLayout>
      <UiFormItem label="보고서명">
        <div class="flex gap-10 align-center">
          <UiSelect
            class="w-150"
            placeholder="일간보고"
            :options="[
              { value: '일간보고', label: '일간보고' },
              { value: '주간보고', label: '주간보고' },
            ]"
          />
          <UiDatePicker class="w-150" />
        </div>
      </UiFormItem>
      <UiFormItem label="표시할내용">
        <div class="flex flex-col gap-15">
          <UiCheckbox size="large" label="KPI" />
          <UiCheckbox size="large" label="OKR" />
          <UiCheckbox size="large" label="Project" />
        </div>
      </UiFormItem>
      <UiFormItem label="실적작성방법">
        <div class="flex flex-col gap-15">
          <div class="flex gap-10 align-center">
            <UiRadio name="reportType" size="large" label="활동" />
            <div class="flex gap-10 is-border">
              <UiRadio name="reportType2" size="large" label="활동일" />
              <UiRadio name="reportType2" size="large" label="작성일" />
            </div>
            <div class="is-border">
              <UiCheckbox size="large" label="나의 활동만 가져오기" />
            </div>
            <div class="is-border">
              <UiCheckbox size="large" label="피드백도 포함해서 가져오기" />
            </div>
          </div>
          <UiRadio name="reportType" size="large" label="직접입력" />
        </div>
      </UiFormItem>
    </UiFormLayout>
  </UiModal>

  <!-- AI 취업 보고서 생성-->
  <UiModal title="AI 취업 보고서 생성" v-model="aiReportModal">
    <template #headerActions-left>
      <img src="@/assets/images/ico_avatar_sai.svg" alt="sai" />
    </template>
  </UiModal>

  <!-- 취합 대상 보고서 선택-->
  <UiModal title="취합 대상 보고서 선택" v-model="reportMergeModal" size="xmedium" :show-footer="true">
    <div class="report-selection-container">
      <div class="w-400 body-bg p-4">
        <h3 class="text-lg font-semibold">
          제출 기간 : 2023.03.19 ~ 2023.04.03
        </h3>

        <div class="mt-4 mb-4">
          <UiCheckbox
            id="selectAllReports"
            label="전체 보고서 선택"
            size="large"
            :checked="true"
            class="mt-10"
          />
          <div class="report-submitter">
            <div class="submitter-header" @click="toggleSubmitter('chanYong')">
              <UiCheckbox label="이찬용 선임(UI/UX)" size="large" />
              <i
                class="icon icon-md"
                :class="
                  isSubmitterOpen.chanYong
                    ? 'icon-chevron-up'
                    : 'icon-chevron-down'
                "
              ></i>
            </div>
            <div
              class="report-submitter-list flex flex-col gap-10"
              v-if="isSubmitterOpen.chanYong"
            >
              <UiCheckbox label="이찬용 선임(UI/UX) - 2025.03.19" size="medium" />
              <UiCheckbox label="이찬용 선임(UI/UX) - 2025.03.20" size="medium" />
              <UiCheckbox label="이찬용 선임(UI/UX) - 2025.03.21" size="medium" />
            </div>
          </div>
          <div class="report-submitter">
            <div class="submitter-header" @click="toggleSubmitter('chanYong2')">
              <UiCheckbox label="이찬용 선임(UI/UX)" size="large" />
              <i
                class="icon icon-md"
                :class="
                  isSubmitterOpen.chanYong2
                    ? 'icon-chevron-up'
                    : 'icon-chevron-down'
                "
              ></i>
            </div>
            <div
              class="report-submitter-list flex flex-col gap-10"
              v-if="isSubmitterOpen.chanYong2"
            >
              <UiCheckbox label="이찬용 선임(UI/UX) - 2025.03.19" size="medium" />
              <UiCheckbox label="이찬용 선임(UI/UX) - 2025.03.20" size="medium" />
              <UiCheckbox label="이찬용 선임(UI/UX) - 2025.03.21" size="medium" />
            </div>
          </div>
          <div class="report-submitter">  
            <div class="submitter-header" @click="toggleSubmitter('chanYong3')">
              <UiCheckbox label="이찬용 선임(UI/UX)" size="large" />
              <i
                class="icon icon-md"
                :class="
                  isSubmitterOpen.chanYong3
                    ? 'icon-chevron-up'
                    : 'icon-chevron-down'
                "
              ></i>
            </div>
            <div
              class="report-submitter-list flex flex-col gap-10"
              v-if="isSubmitterOpen.chanYong3"
            >
              <UiCheckbox label="이찬용 선임(UI/UX) - 2025.03.19" size="medium" />
              <UiCheckbox label="이찬용 선임(UI/UX) - 2025.03.20" size="medium" />
              <UiCheckbox label="이찬용 선임(UI/UX) - 2025.03.21" size="medium" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <template #footerActions>
      <UiButton variant="primary">
        <i class="icon icon-md icon-create icon-white"></i>
        보고서 생성
      </UiButton>
    </template>
  </UiModal>
</template>

<script setup>
import { ref } from "vue";

// 보고서 설정 팝업
const reportConfigModal = ref(false);

// AI 보고서 생성 팝업
const aiReportModal = ref(false);

// 취합 대상 보고서 선택
const reportMergeModal = ref(false);

// 보고서 제출자 펼쳐짐 여부
const isSubmitterOpen = ref({
  chanYong: true,
  chanYong2: false,
  chanYong3: false,
});

// 보고서 제출자 펼쳐짐 토글
const toggleSubmitter = (submitter) => {
isSubmitterOpen.value[submitter] = !isSubmitterOpen.value[submitter];
  
};

// 보고서 목록
const reports = ref([
  { type: "주간보고", date: "2025.03.05", status: "제출완료" },
  { type: "월간보고", date: "2025.03.01", status: "임시저장" },
  { type: "주간보고", date: "2025.02.26", status: "제출완료" },
  { type: "주간보고", date: "2025.02.19", status: "제출완료" },
  { type: "월간보고", date: "2025.02.01", status: "제출완료" },
]);

// 보고서 목록
const reportItems = ref([
  { kpi: "팀 생산성", okr: "협업 투자", achievement: "신규 시장 조사 완료, 마케팅 전략 수립", plan: "현 프로세스 분석 및 문제점 파악, 개선안 초안 작성" },
  { kpi: "협업 투자", okr: "고객 피드백 수집 및 분석, 개선 포인트 도출", achievement: "신규 협업 툴 도입 교육 진행, 초기 데이터 마이그레이션", plan: "전체 팀 활용 독려, 사용 현황 모니터링" },
  { kpi: "협업 투자", okr: "고객 피드백 수집 및 분석, 개선 포인트 도출", achievement: "신규 협업 툴 도입 교육 진행, 초기 데이터 마이그레이션", plan: "전체 팀 활용 독려, 사용 현황 모니터링" },
  { kpi: "협업 투자", okr: "고객 피드백 수집 및 분석, 개선 포인트 도출", achievement: "신규 협업 툴 도입 교육 진행, 초기 데이터 마이그레이션", plan: "전체 팀 활용 독려, 사용 현황 모니터링" },
  { kpi: "협업 투자", okr: "고객 피드백 수집 및 분석, 개선 포인트 도출", achievement: "신규 협업 툴 도입 교육 진행, 초기 데이터 마이그레이션", plan: "전체 팀 활용 독려, 사용 현황 모니터링" },
]);
</script>

<style lang="scss" scoped>
.report-creation-container {
  padding: 20px;

  .report-header {
    margin-bottom: 20px;
  }

  .report-content {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

    &-layout {
      display: flex;
      gap: 30px;
    }
  }

  .left-content {
    border-right: 1px solid #e5e7eb;
  }
  .report-list {
    overflow-y: auto;
    height: calc(100vh - 180px);
    padding-right: 10px;
  }

  .report-items {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .report-item {
    border-bottom: 1px solid #f0f0f0;
    border-radius: 4px;
    padding: 5px 10px;

    &:hover {
      background-color: #f8fafc;
    }

    &:last-child {
      border-bottom: none;
    }

    .icon {
      opacity: 0.7;
      transition: opacity 0.2s, transform 0.2s;

      &:hover {
        opacity: 1;
        transform: scale(1.1);
      }
    }
  }

  .report-detail {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    padding: 20px;
    min-height: 600px;

    .report-header {
      margin-bottom: 20px;
      padding-bottom: 15px;
      border-bottom: 1px solid #e5e7eb;

      h2 {
        font-size: 18px;
        font-weight: 600;
        color: #111827;
        margin-bottom: 8px;
      }

      .report-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .report-date {
          color: #6b7280;
          font-size: 14px;
        }

        .report-actions {
          display: flex;
          gap: 8px;
        }
      }
    }

    .report-body {
      .report-table-container {
        overflow-y: auto;
      }

      .report-table {
        width: 100%;
        border-collapse: collapse;

        th {
          background-color: #e2e4e7;
          font-weight: 600;
          padding: 10px 12px;
          text-align: center;
          color: #374151;
          border-bottom: 1px solid #e5e7eb;
        }

        td {
          padding: 12px;
          border: 1px solid #e5e7eb;
          vertical-align: top;
        }
      }

      .kpi-cell {
        .kpi-title {
          font-weight: 500;
          color: #374151;
          margin-bottom: 8px;
        }

        .kpi-detail {
          .kpi-item {
            margin-bottom: 8px;

            .kpi-label {
              color: #6b7280;
              font-size: 14px;
            }

            .kpi-value {
              color: #111827;
              font-size: 14px;
            }

            .progress-bar {
              width: 100%;
              height: 4px;
              background-color: #e5e7eb;
              border-radius: 2px;

              .progress-fill {
                height: 4px;
                background-color: #3b82f6;
                border-radius: 2px;
              }
            }
          }
        }
      }

      .okr-cell {
        .okr-title {
          font-weight: 500;
          color: #374151;
          margin-bottom: 8px;
          padding-left: 8px;
          border-left: 4px solid;
        }

        .okr-items {
          .okr-item {
            margin-bottom: 8px;
            padding-left: 8px;
            border-left: 4px solid;

            .okr-item-title {
              font-weight: 500;
              color: #374151;
              margin-bottom: 4px;
            }

            .okr-item-percentage {
              .progress-bar {
                width: 100%;
                height: 4px;
                background-color: #e5e7eb;
                border-radius: 2px;

                .progress-fill {
                  height: 4px;
                  border-radius: 2px;
                }
              }
            }
          }
        }
      }

      .achievement-cell,
      .plan-cell {
        white-space: pre-line;
      }
    }
  }

  .searchIcon {
    a {
      color: #666;
      transition: color 0.2s;

      &:hover {
        color: #3b82f6;
      }
    }
  }
}

.modal-content {
  background-color: #ffffff;
  border-radius: 8px;

  .header-section {
    border-color: #e5e7eb;
  }

  .user-name-container {
    .icon-user {
      color: #4b5563;
    }
  }

  .date-info {
    span {
      font-weight: 400;
    }
  }

  .target-selection {
    .w-200 {
      max-width: 200px;
    }
  }

  .button-group {
    .icon-white {
      color: #ffffff;
    }
  }

  .editor-container {
    min-height: 240px;
    transition: border-color 0.2s ease;

    &:focus-within {
      border-color: #3b82f6;
    }
  }

  .attachment-section {
    border-top: 1px solid #f3f4f6;
    padding-top: 16px;
  }
}

.reportEtc {
  margin-top: 16px;
  margin-bottom: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  overflow: hidden;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th.txt-c {
    text-align: center;
    background-color: #f9fafb;
    font-weight: 500;
    font-size: 14px;
    color: #4b5563;
  }

  th.br {
    border-right: 1px solid #e5e7eb;
  }

  th.firCornerTop {
    border-top-left-radius: 6px;
  }

  th.firCornerBot {
    border-bottom-left-radius: 6px;
  }

  .pd10 {
    padding: 10px;
  }

  td {
    vertical-align: top;
    color: #374151;
    font-size: 14px;
  }

  #spanViewAttachFile {
    display: inline-block;
    min-height: 24px;
  }
}

.report-submitter {
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  margin-bottom: 10px;
  margin-top: 10px;
  
  .submitter-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    background-color: #f9fafb;
    cursor: pointer;
    border-radius: 6px;
    
    &:hover {
      background-color: #f3f4f6;
    }
  }

  .report-submitter-list{
    padding: 15px 25px;
  }
  
  .icon {
    transition: transform 0.2s ease;
    color: #6b7280;
  }
}

</style>
