import T from"./D8wJZwOl.js";import{_ as P,r as a,c as i,a as l,D as W,b as o,F as I,i as J,o as p,t as R}from"./D329OtF9.js";const q={class:"components-page"},H={class:"component-section"},X={class:"select-grid"},$={class:"select-item"},G={class:"select-item"},K={class:"component-section"},Q={class:"select-grid"},Y={class:"select-item"},Z={class:"select-item"},_={class:"select-item"},ee={class:"component-section"},le={class:"select-grid"},te={class:"select-item"},ae={class:"select-item"},se={class:"select-item"},oe={class:"select-item"},de={class:"select-item"},ce={class:"select-item"},ne={class:"component-section"},ie={class:"select-grid"},pe={class:"select-item"},ve={class:"select-item"},ue={class:"select-item"},re={class:"component-section"},me={class:"select-grid"},be={class:"select-item"},Ve={class:"select-item"},Se={class:"select-item"},ke={class:"component-section"},ge={class:"select-grid"},Ue={class:"select-item"},he={class:"event-log"},Me={__name:"MultiSelector",setup(xe){const d=a([{label:"마케팅팀",value:"marketing"},{label:"개발팀",value:"development"},{label:"디자인팀",value:"design"},{label:"기획팀",value:"planning"},{label:"영업팀",value:"sales"}]),B=a([{label:"김철수",value:"kim",email:"kim@company.com",department:"개발팀"},{label:"이영희",value:"lee",email:"lee@company.com",department:"디자인팀"},{label:"박민수",value:"park",email:"park@company.com",department:"기획팀"},{label:"정수연",value:"jung",email:"jung@company.com",department:"마케팅팀"}]),E=a([{label:"ADMIN",value:"isp_admin",email:"admin@ezpark.com",department:"이즈파크"},{label:"김경수",value:"isp130",email:"kim.ks@ezpark.com",department:"이즈파크"},{label:"마진석",value:"isp128",email:"ma.js@ezpark.com",department:"이즈파크"},{label:"오현정",value:"isp147",email:"oh.hj@ezpark.com",department:"이즈파크"},{label:"송기준",value:"kjsong3",email:"song.kj@ezpark.com",department:"이즈파크"},{label:"고대훈",value:"dhg",email:"ko.dh@ezpark.com",department:"OEM 생산부"},{label:"김도현",value:"isp135",email:"kim.dh2@ezpark.com",department:"공공클라우드 영업팀"},{label:"이강표",value:"isp126",email:"lee.kp@ezpark.com",department:"ESM 고객관리팀"}]),j=a([{label:"이즈파크",value:"D000001",department:"회사"},{label:"ESM 고객관리팀",value:"D000004",department:"팀"},{label:"경영지원팀",value:"D000002",department:"팀"},{label:"OEM 생산부",value:"D000017",department:"부서"},{label:"공공클라우드 영업팀",value:"D000015",department:"팀"}]),w=a([{label:"Vue.js",value:"vue"},{label:"React",value:"react"},{label:"Angular",value:"angular"},{label:"Node.js",value:"nodejs"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}]),C=a([{label:"검색 테스트 1",value:"search1"},{label:"검색 테스트 2",value:"search2"},{label:"검색 테스트 3",value:"search3"}]),v=a([]),u=a([]),r=a([]),m=a([]),b=a([]),V=a([]),S=a(["marketing","development"]),k=a([]),g=a(["design"]),U=a(["planning","sales"]),h=a([]),M=a([]),x=a([]),y=a([]),f=a([]),z=a([]),D=a([]),O=a([]),c=a([]),L=n=>{console.log("협업자 검색:",n)},N=n=>{c.value.unshift(`검색: "${n}"`),c.value.length>5&&c.value.pop()},A=()=>{c.value.unshift("포커스됨"),c.value.length>5&&c.value.pop()},F=()=>{c.value.unshift("포커스 해제됨"),c.value.length>5&&c.value.pop()};return(n,e)=>{const s=T;return p(),i("div",q,[e[61]||(e[61]=l("h1",{class:"page-title"},"UI MultiSelect 컴포넌트",-1)),l("section",H,[e[22]||(e[22]=l("h2",{class:"section-title"},"기본 MultiSelect",-1)),l("div",X,[l("div",$,[o(s,{placeholder:"옵션을 선택하세요",options:d.value,modelValue:v.value,"onUpdate:modelValue":e[0]||(e[0]=t=>v.value=t)},null,8,["options","modelValue"]),e[18]||(e[18]=l("p",{class:"select-desc"},"기본 MultiSelect",-1)),e[19]||(e[19]=l("div",{class:"code-example"},[l("pre",{class:"code-block"},`<UiMultiSelect
  placeholder="옵션을 선택하세요"
  :options="basicOptions"
  v-model="selectedValues"
/>
            `)],-1))]),l("div",G,[o(s,{placeholder:"협업자를 선택하세요",options:B.value,modelValue:u.value,"onUpdate:modelValue":e[1]||(e[1]=t=>u.value=t)},null,8,["options","modelValue"]),e[20]||(e[20]=l("p",{class:"select-desc"},"협업자 검색 (이름, 이메일, 부서 검색 가능)",-1)),e[21]||(e[21]=l("div",{class:"code-example"},[l("pre",{class:"code-block"},`<UiMultiSelect
  placeholder="협업자를 선택하세요"
  :options="collaboratorOptions"
  v-model="selectedCollaborators"
/>
            `)],-1))])])]),l("section",K,[e[29]||(e[29]=l("h2",{class:"section-title"},"MultiSelect 사이즈 (Sizes)",-1)),l("div",Q,[l("div",Y,[o(s,{size:"small",placeholder:"작은 사이즈",options:d.value,modelValue:r.value,"onUpdate:modelValue":e[2]||(e[2]=t=>r.value=t)},null,8,["options","modelValue"]),e[23]||(e[23]=l("p",{class:"select-desc"},"작은 사이즈 (Small)",-1)),e[24]||(e[24]=l("div",{class:"code-example"},[l("pre",{class:"code-block"},`<UiMultiSelect
  size="small"
  placeholder="작은 사이즈"
  :options="options"
  v-model="selectedValues"
/>`)],-1))]),l("div",Z,[o(s,{size:"medium",placeholder:"중간 사이즈",options:d.value,modelValue:m.value,"onUpdate:modelValue":e[3]||(e[3]=t=>m.value=t)},null,8,["options","modelValue"]),e[25]||(e[25]=l("p",{class:"select-desc"},"중간 사이즈 (Medium) - 기본",-1)),e[26]||(e[26]=l("div",{class:"code-example"},[l("pre",{class:"code-block"},`<UiMultiSelect
  size="medium"
  placeholder="중간 사이즈"
  :options="options"
  v-model="selectedValues"
/>`)],-1))]),l("div",_,[o(s,{size:"large",placeholder:"큰 사이즈",options:d.value,modelValue:b.value,"onUpdate:modelValue":e[4]||(e[4]=t=>b.value=t)},null,8,["options","modelValue"]),e[27]||(e[27]=l("p",{class:"select-desc"},"큰 사이즈 (Large)",-1)),e[28]||(e[28]=l("div",{class:"code-example"},[l("pre",{class:"code-block"},`<UiMultiSelect
  size="large"
  placeholder="큰 사이즈"
  :options="options"
  v-model="selectedValues"
/>`)],-1))])])]),l("section",ee,[e[42]||(e[42]=l("h2",{class:"section-title"},"MultiSelect 상태 (States)",-1)),l("div",le,[l("div",te,[o(s,{placeholder:"기본 상태",options:d.value,modelValue:V.value,"onUpdate:modelValue":e[5]||(e[5]=t=>V.value=t)},null,8,["options","modelValue"]),e[30]||(e[30]=l("p",{class:"select-desc"},"기본 상태 (Default)",-1)),e[31]||(e[31]=l("div",{class:"code-example"},[l("pre",{class:"code-block"},`<UiMultiSelect
  placeholder="기본 상태"
  :options="options"
  v-model="selectedValues"
/>`)],-1))]),l("div",ae,[o(s,{placeholder:"선택 완료",options:d.value,modelValue:S.value,"onUpdate:modelValue":e[6]||(e[6]=t=>S.value=t)},null,8,["options","modelValue"]),e[32]||(e[32]=l("p",{class:"select-desc"},"선택 완료 상태",-1)),e[33]||(e[33]=l("div",{class:"code-example"},[l("pre",{class:"code-block"},`<UiMultiSelect
  placeholder="선택 완료"
  :options="options"
  v-model="selectedValues"
/>`)],-1))]),l("div",se,[o(s,{placeholder:"에러 상태",options:d.value,error:!0,modelValue:k.value,"onUpdate:modelValue":e[7]||(e[7]=t=>k.value=t)},null,8,["options","modelValue"]),e[34]||(e[34]=l("p",{class:"select-desc"},"에러 상태 (Error)",-1)),e[35]||(e[35]=l("div",{class:"code-example"},[l("pre",{class:"code-block"},`<UiMultiSelect
  placeholder="에러 상태"
  :options="options"
  :error="true"
  v-model="selectedValues"
/>`)],-1))]),l("div",oe,[o(s,{placeholder:"비활성화 상태",options:d.value,disabled:!0,modelValue:g.value,"onUpdate:modelValue":e[8]||(e[8]=t=>g.value=t)},null,8,["options","modelValue"]),e[36]||(e[36]=l("p",{class:"select-desc"},"비활성화 상태 (Disabled)",-1)),e[37]||(e[37]=l("div",{class:"code-example"},[l("pre",{class:"code-block"},`<UiMultiSelect
  placeholder="비활성화 상태"
  :options="options"
  :disabled="true"
  v-model="selectedValues"
/>`)],-1))]),l("div",de,[o(s,{placeholder:"읽기 전용",options:d.value,"view-only":!0,modelValue:U.value,"onUpdate:modelValue":e[9]||(e[9]=t=>U.value=t)},null,8,["options","modelValue"]),e[38]||(e[38]=l("p",{class:"select-desc"},"읽기 전용 상태 (View Only)",-1)),e[39]||(e[39]=l("div",{class:"code-example"},[l("pre",{class:"code-block"},`<UiMultiSelect
  placeholder="읽기 전용"
  :options="options"
  :view-only="true"
  v-model="selectedValues"
/>`)],-1))]),l("div",ce,[o(s,{placeholder:"로딩 상태",options:d.value,loading:!0,modelValue:h.value,"onUpdate:modelValue":e[10]||(e[10]=t=>h.value=t)},null,8,["options","modelValue"]),e[40]||(e[40]=l("p",{class:"select-desc"},"로딩 상태 (Loading)",-1)),e[41]||(e[41]=l("div",{class:"code-example"},[l("pre",{class:"code-block"},`<UiMultiSelect
  placeholder="로딩 상태"
  :options="options"
  :loading="true"
  v-model="selectedValues"
/>`)],-1))])])]),l("section",ne,[e[49]||(e[49]=l("h2",{class:"section-title"},"실제 사용 예시",-1)),l("div",ie,[l("div",pe,[o(s,{size:"large",placeholder:"협업자 이름을 입력해주세요",options:E.value,modelValue:M.value,"onUpdate:modelValue":e[11]||(e[11]=t=>M.value=t),onSearch:L},null,8,["options","modelValue"]),e[43]||(e[43]=l("p",{class:"select-desc"},"실제 협업자 검색 예시",-1)),e[44]||(e[44]=l("div",{class:"code-example"},[l("pre",{class:"code-block"},`<UiMultiSelect
  size="large"
  placeholder="협업자 이름을 입력해주세요"
  :options="collaboratorOptions"
  v-model="selectedCollaborators"
  @search="handleSearch"
/>`)],-1))]),l("div",ve,[o(s,{placeholder:"부서를 선택하세요",options:j.value,modelValue:x.value,"onUpdate:modelValue":e[12]||(e[12]=t=>x.value=t)},null,8,["options","modelValue"]),e[45]||(e[45]=l("p",{class:"select-desc"},"부서 선택 예시",-1)),e[46]||(e[46]=l("div",{class:"code-example"},[l("pre",{class:"code-block"},`<UiMultiSelect
  placeholder="부서를 선택하세요"
  :options="departmentOptions"
  v-model="selectedDepartments"
/>`)],-1))]),l("div",ue,[o(s,{placeholder:"기술 스택을 선택하세요",options:w.value,modelValue:y.value,"onUpdate:modelValue":e[13]||(e[13]=t=>y.value=t)},null,8,["options","modelValue"]),e[47]||(e[47]=l("p",{class:"select-desc"},"기술 스택 선택 예시",-1)),e[48]||(e[48]=l("div",{class:"code-example"},[l("pre",{class:"code-block"},`<UiMultiSelect
  placeholder="기술 스택을 선택하세요"
  :options="techStackOptions"
  v-model="selectedTechStack"
/>`)],-1))])])]),l("section",re,[e[56]||(e[56]=l("h2",{class:"section-title"},"MultiSelect 너비 (Width)",-1)),l("div",me,[l("div",be,[o(s,{placeholder:"기본 너비",options:d.value,modelValue:f.value,"onUpdate:modelValue":e[14]||(e[14]=t=>f.value=t)},null,8,["options","modelValue"]),e[50]||(e[50]=l("p",{class:"select-desc"},"기본 너비 (100%)",-1)),e[51]||(e[51]=l("div",{class:"code-example"},[l("pre",{class:"code-block"},`<UiMultiSelect
  placeholder="기본 너비"
  :options="options"
  v-model="selectedValues"
/>`)],-1))]),l("div",Ve,[o(s,{placeholder:"너비 지정",options:d.value,modelValue:z.value,"onUpdate:modelValue":e[15]||(e[15]=t=>z.value=t),width:"250px"},null,8,["options","modelValue"]),e[52]||(e[52]=l("p",{class:"select-desc"},"너비 지정 (250px)",-1)),e[53]||(e[53]=l("div",{class:"code-example"},[l("pre",{class:"code-block"},`<UiMultiSelect
  placeholder="너비 지정"
  :options="options"
  v-model="selectedValues"
  width="250px"
/>`)],-1))]),l("div",Se,[o(s,{placeholder:"퍼센트 너비",options:d.value,modelValue:D.value,"onUpdate:modelValue":e[16]||(e[16]=t=>D.value=t),width:"50%"},null,8,["options","modelValue"]),e[54]||(e[54]=l("p",{class:"select-desc"},"퍼센트 너비 (50%)",-1)),e[55]||(e[55]=l("div",{class:"code-example"},[l("pre",{class:"code-block"},`<UiMultiSelect
  placeholder="퍼센트 너비"
  :options="options"
  v-model="selectedValues"
  width="50%"
/>`)],-1))])])]),l("section",ke,[e[60]||(e[60]=l("h2",{class:"section-title"},"이벤트 처리 (Event Handling)",-1)),l("div",ge,[l("div",Ue,[o(s,{placeholder:"검색 이벤트 테스트",options:C.value,modelValue:O.value,"onUpdate:modelValue":e[17]||(e[17]=t=>O.value=t),onSearch:N,onFocus:A,onBlur:F},null,8,["options","modelValue"]),e[58]||(e[58]=l("p",{class:"select-desc"},"검색, 포커스, 블러 이벤트",-1)),l("div",he,[e[57]||(e[57]=l("strong",null,"이벤트 로그:",-1)),l("ul",null,[(p(!0),i(I,null,J(c.value,t=>(p(),i("li",{key:t},R(t),1))),128))])]),e[59]||(e[59]=l("div",{class:"code-example"},[l("pre",{class:"code-block"},`<UiMultiSelect
  placeholder="검색 이벤트 테스트"
  :options="searchOptions"
  v-model="selectedSearch"
  @search="handleSearch"
  @focus="handleFocus"
  @blur="handleBlur"
/>`)],-1))])])]),e[62]||(e[62]=W(`<section class="component-section" data-v-0c8591c9><h2 class="section-title" data-v-0c8591c9>Props 설명</h2><div class="props-table" data-v-0c8591c9><table data-v-0c8591c9><thead data-v-0c8591c9><tr data-v-0c8591c9><th data-v-0c8591c9>Props</th><th data-v-0c8591c9>Type</th><th data-v-0c8591c9>Default</th><th data-v-0c8591c9>Description</th></tr></thead><tbody data-v-0c8591c9><tr data-v-0c8591c9><td data-v-0c8591c9><code data-v-0c8591c9>options</code></td><td data-v-0c8591c9>Array</td><td data-v-0c8591c9>[]</td><td data-v-0c8591c9>선택 가능한 옵션 배열 ({ value, label, email?, department? })</td></tr><tr data-v-0c8591c9><td data-v-0c8591c9><code data-v-0c8591c9>modelValue</code></td><td data-v-0c8591c9>Array</td><td data-v-0c8591c9>[]</td><td data-v-0c8591c9>선택된 값들의 배열 (v-model)</td></tr><tr data-v-0c8591c9><td data-v-0c8591c9><code data-v-0c8591c9>placeholder</code></td><td data-v-0c8591c9>String</td><td data-v-0c8591c9>&#39;협업자 이름을 입력해주세요&#39;</td><td data-v-0c8591c9>플레이스홀더 텍스트</td></tr><tr data-v-0c8591c9><td data-v-0c8591c9><code data-v-0c8591c9>size</code></td><td data-v-0c8591c9>String</td><td data-v-0c8591c9>&#39;medium&#39;</td><td data-v-0c8591c9>컴포넌트 크기 (&#39;small&#39;, &#39;medium&#39;, &#39;large&#39;)</td></tr><tr data-v-0c8591c9><td data-v-0c8591c9><code data-v-0c8591c9>disabled</code></td><td data-v-0c8591c9>Boolean</td><td data-v-0c8591c9>false</td><td data-v-0c8591c9>비활성화 상태</td></tr><tr data-v-0c8591c9><td data-v-0c8591c9><code data-v-0c8591c9>viewOnly</code></td><td data-v-0c8591c9>Boolean</td><td data-v-0c8591c9>false</td><td data-v-0c8591c9>읽기 전용 상태</td></tr><tr data-v-0c8591c9><td data-v-0c8591c9><code data-v-0c8591c9>error</code></td><td data-v-0c8591c9>Boolean</td><td data-v-0c8591c9>false</td><td data-v-0c8591c9>에러 상태</td></tr><tr data-v-0c8591c9><td data-v-0c8591c9><code data-v-0c8591c9>loading</code></td><td data-v-0c8591c9>Boolean</td><td data-v-0c8591c9>false</td><td data-v-0c8591c9>로딩 상태 (스피너 표시)</td></tr><tr data-v-0c8591c9><td data-v-0c8591c9><code data-v-0c8591c9>width</code></td><td data-v-0c8591c9>String|Number</td><td data-v-0c8591c9>&#39;100%&#39;</td><td data-v-0c8591c9>컴포넌트 너비</td></tr></tbody></table></div></section><section class="component-section" data-v-0c8591c9><h2 class="section-title" data-v-0c8591c9>Events 설명</h2><div class="props-table" data-v-0c8591c9><table data-v-0c8591c9><thead data-v-0c8591c9><tr data-v-0c8591c9><th data-v-0c8591c9>Event</th><th data-v-0c8591c9>Parameters</th><th data-v-0c8591c9>Description</th></tr></thead><tbody data-v-0c8591c9><tr data-v-0c8591c9><td data-v-0c8591c9><code data-v-0c8591c9>@update:modelValue</code></td><td data-v-0c8591c9>Array</td><td data-v-0c8591c9>선택된 값이 변경될 때 발생</td></tr><tr data-v-0c8591c9><td data-v-0c8591c9><code data-v-0c8591c9>@search</code></td><td data-v-0c8591c9>String</td><td data-v-0c8591c9>검색어 입력 시 발생</td></tr><tr data-v-0c8591c9><td data-v-0c8591c9><code data-v-0c8591c9>@focus</code></td><td data-v-0c8591c9>-</td><td data-v-0c8591c9>컴포넌트가 포커스를 받을 때 발생</td></tr><tr data-v-0c8591c9><td data-v-0c8591c9><code data-v-0c8591c9>@blur</code></td><td data-v-0c8591c9>-</td><td data-v-0c8591c9>컴포넌트가 포커스를 잃을 때 발생</td></tr></tbody></table></div></section><section class="component-section" data-v-0c8591c9><h2 class="section-title" data-v-0c8591c9>옵션 데이터 구조</h2><div class="code-example" data-v-0c8591c9><pre class="code-block" data-v-0c8591c9>// 기본 옵션 구조
const options = [
  {
    value: &#39;unique_id&#39;,     // 필수: 고유한 값
    label: &#39;표시될 텍스트&#39;,    // 필수: 화면에 보여질 텍스트
    email: &#39;email@domain.com&#39;,    // 선택: 이메일 (검색 가능)
    department: &#39;부서명&#39;     // 선택: 부서 (검색 가능)
  }
]

// 협업자 옵션 예시
const collaboratorOptions = [
  {
    value: &#39;user001&#39;,
    label: &#39;김철수&#39;,
    email: &#39;kim@company.com&#39;,
    department: &#39;개발팀&#39;
  },
  {
    value: &#39;user002&#39;,
    label: &#39;이영희&#39;,
    email: &#39;lee@company.com&#39;,
    department: &#39;디자인팀&#39;
  }
]</pre></div></section><section class="component-section" data-v-0c8591c9><h2 class="section-title" data-v-0c8591c9>사용 팁 (Usage Tips)</h2><div class="tips-list" data-v-0c8591c9><div class="tip-item" data-v-0c8591c9><h3 data-v-0c8591c9>🔍 검색 기능</h3><p data-v-0c8591c9>이름, 이메일, 부서명으로 실시간 필터링이 가능합니다.</p></div><div class="tip-item" data-v-0c8591c9><h3 data-v-0c8591c9>⌨️ 키보드 지원</h3><p data-v-0c8591c9>화살표 키로 옵션 탐색, Enter로 선택, Escape로 닫기, Backspace로 마지막 태그 삭제가 가능합니다.</p></div><div class="tip-item" data-v-0c8591c9><h3 data-v-0c8591c9>🏷️ 태그 형태</h3><p data-v-0c8591c9>선택된 항목들이 태그 형태로 표시되며, 각 태그의 X 버튼으로 개별 삭제가 가능합니다.</p></div><div class="tip-item" data-v-0c8591c9><h3 data-v-0c8591c9>📱 반응형</h3><p data-v-0c8591c9>모바일 환경에 최적화되어 터치 인터페이스를 지원합니다.</p></div></div></section>`,4))])}}},ze=P(Me,[["__scopeId","data-v-0c8591c9"]]);export{ze as default};
