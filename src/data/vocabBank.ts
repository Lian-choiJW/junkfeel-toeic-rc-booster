import type { VocabItem } from "@/types";

type VocabLevel = VocabItem["level"];

type VocabSeed = {
  word: string;
  meaningKo: string;
  pos: string;
  exampleEn: string;
  exampleKo: string;
  collocation: string;
  level: VocabLevel;
  relatedChunks?: string[];
};

type RawVocabSeed = [
  string,
  string,
  string,
  string,
  string,
  string,
  VocabLevel,
  string[]?
];

type VocabTopic = {
  topic: string;
  tag: string;
  context: string;
  items: (VocabSeed | RawVocabSeed)[];
};

const vocabTopics: VocabTopic[] = [
  {
    topic: "office",
    tag: "office",
    context: "회사 내부 공지, 부서 이동, 승인 요청에서 자주 보이는 사무 맥락",
    items: [
      ["supervisor", "관리자, 상사", "noun", "Please contact your supervisor before leaving early.", "조퇴하기 전에 관리자에게 연락하세요.", "direct supervisor", "basic"],
      ["department", "부서", "noun", "The sales department moved to the fifth floor.", "영업부는 5층으로 이동했습니다.", "accounting department", "basic"],
      ["submit", "제출하다", "verb", "All expense reports must be submitted by Friday.", "모든 비용 보고서는 금요일까지 제출되어야 합니다.", "submit a report", "basic"],
      ["policy", "정책, 방침", "noun", "The company updated its remote work policy.", "회사는 원격 근무 방침을 업데이트했습니다.", "company policy", "basic"],
      ["approve", "승인하다", "verb", "The manager approved the revised schedule.", "관리자는 수정된 일정을 승인했습니다.", "approve a request", "basic"],
      ["deadline", "마감일", "noun", "The deadline for the proposal is approaching.", "제안서 마감일이 다가오고 있습니다.", "meet a deadline", "basic"],
      ["delegate", "위임하다", "verb", "The director delegated the budget review to her assistant.", "이사는 예산 검토를 비서에게 위임했습니다.", "delegate a task", "killer"],
      ["streamline", "간소화하다, 효율화하다", "verb", "The new form will streamline the approval process.", "새 양식은 승인 절차를 간소화할 것입니다.", "streamline a process", "killer"],
      ["authorize", "권한을 부여하다, 승인하다", "verb", "Only team leaders are authorized to access the archive.", "팀장만 보관 자료에 접근할 권한이 있습니다.", "authorized personnel", "killer"],
      ["compile", "수집하여 정리하다", "verb", "The analyst compiled sales figures for the quarterly report.", "분석가는 분기 보고서를 위해 매출 수치를 정리했습니다.", "compile a report", "killer"]
    ]
  },
  {
    topic: "communication",
    tag: "email",
    context: "이메일 문의, 회신, 첨부, 통보 상황에서 바로 덩어리로 읽어야 하는 표현",
    items: [
      ["inquiry", "문의", "noun", "We received an inquiry about the new service.", "우리는 새 서비스에 대한 문의를 받았습니다.", "customer inquiry", "basic"],
      ["attach", "첨부하다", "verb", "Please attach the invoice to your message.", "메시지에 송장을 첨부하세요.", "attach a file", "basic"],
      ["confirm", "확인하다", "verb", "Could you confirm your attendance by noon?", "정오까지 참석 여부를 확인해 주시겠습니까?", "confirm attendance", "basic"],
      ["notify", "알리다", "verb", "Applicants will be notified by email.", "지원자들은 이메일로 통보받을 것입니다.", "notify clients", "basic"],
      ["regarding", "~에 관하여", "preposition", "I am writing regarding your recent order.", "최근 주문 건에 관해 연락드립니다.", "regarding the shipment", "basic"],
      ["response", "답변, 응답", "noun", "A response is expected within two business days.", "답변은 영업일 기준 이틀 이내에 예상됩니다.", "prompt response", "basic"],
      ["clarification", "설명, 해명, 명확화", "noun", "The client asked for clarification on the service fee.", "고객은 서비스 요금에 대한 설명을 요청했습니다.", "request clarification", "killer"],
      ["correspondence", "서신, 연락", "noun", "Please keep all correspondence related to the contract.", "계약과 관련된 모든 서신을 보관하세요.", "business correspondence", "killer"],
      ["circulate", "회람시키다, 배포하다", "verb", "The revised agenda was circulated to all participants.", "수정된 안건은 모든 참석자에게 배포되었습니다.", "circulate a memo", "killer"],
      ["acknowledge", "접수했음을 알리다, 인정하다", "verb", "We acknowledge receipt of your application.", "귀하의 지원서 접수를 확인합니다.", "acknowledge receipt", "killer"]
    ]
  },
  {
    topic: "schedule",
    tag: "meeting",
    context: "회의 일정 변경, 장소 예약, 교육 안내에서 날짜와 장소를 빠르게 찾는 맥락",
    items: [
      ["postpone", "연기하다", "verb", "The training session was postponed until Monday.", "교육 세션은 월요일까지 연기되었습니다.", "postpone a meeting", "basic"],
      ["arrange", "마련하다, 정하다", "verb", "The assistant arranged transportation for the guests.", "비서는 손님들을 위한 교통편을 마련했습니다.", "arrange transportation", "basic"],
      ["venue", "장소", "noun", "The venue can seat up to 200 people.", "그 장소는 최대 200명을 수용할 수 있습니다.", "event venue", "basic"],
      ["agenda", "안건, 의제", "noun", "The agenda includes three budget items.", "안건에는 세 가지 예산 항목이 포함됩니다.", "meeting agenda", "basic"],
      ["availability", "이용 가능 여부", "noun", "Please check the availability of the conference room.", "회의실 이용 가능 여부를 확인하세요.", "room availability", "basic"],
      ["reschedule", "일정을 다시 잡다", "verb", "We need to reschedule the interview.", "우리는 면접 일정을 다시 잡아야 합니다.", "reschedule an appointment", "basic"],
      ["tentative", "잠정적인, 임시의", "adjective", "A tentative timetable will be posted after the board meeting.", "잠정 일정표는 이사회 후 게시될 것입니다.", "tentative schedule", "killer"],
      ["overlap", "겹치다, 중복되다", "verb", "Two workshops overlap, so employees must choose one.", "두 워크숍 시간이 겹치므로 직원들은 하나를 선택해야 합니다.", "schedules overlap", "killer"],
      ["consecutive", "연속적인", "adjective", "The consultant will be onsite for three consecutive days.", "컨설턴트는 3일 연속 현장에 있을 것입니다.", "consecutive days", "killer"],
      ["itinerary", "여행 일정표", "noun", "The itinerary lists every transfer and hotel check-in time.", "일정표에는 모든 환승과 호텔 체크인 시간이 적혀 있습니다.", "travel itinerary", "killer"]
    ]
  },
  {
    topic: "hiring",
    tag: "hr",
    context: "채용 공고, 면접 안내, 신입 직원 교육에서 반복되는 인사 표현",
    items: [
      ["candidate", "지원자", "noun", "Three candidates were invited for final interviews.", "세 명의 지원자가 최종 면접에 초대되었습니다.", "qualified candidate", "basic"],
      ["position", "직위, 자리", "noun", "The company is hiring for a marketing position.", "회사는 마케팅 직책을 채용 중입니다.", "open position", "basic"],
      ["resume", "이력서", "noun", "Please upload your resume in PDF format.", "이력서를 PDF 형식으로 업로드하세요.", "submit a resume", "basic"],
      ["qualification", "자격 요건", "noun", "Language ability is an important qualification.", "언어 능력은 중요한 자격 요건입니다.", "minimum qualification", "basic"],
      ["orientation", "오리엔테이션", "noun", "New employees will attend orientation next week.", "신입 직원들은 다음 주 오리엔테이션에 참석합니다.", "employee orientation", "basic"],
      ["recruit", "채용하다", "verb", "The firm plans to recruit more engineers.", "그 회사는 더 많은 엔지니어를 채용할 계획입니다.", "recruit staff", "basic"],
      ["shortlist", "최종 후보 명단에 넣다", "verb", "Five applicants were shortlisted after the first interview.", "1차 면접 후 다섯 명의 지원자가 최종 후보에 올랐습니다.", "shortlisted applicant", "killer"],
      ["screening", "심사, 선별", "noun", "The screening process includes a writing sample.", "심사 과정에는 작문 샘플이 포함됩니다.", "initial screening", "killer"],
      ["tenure", "재직 기간", "noun", "During her tenure, sales increased in every region.", "그녀의 재직 기간 동안 모든 지역에서 매출이 증가했습니다.", "during one's tenure", "killer"],
      ["credential", "자격, 증명서", "noun", "Applicants must present professional credentials.", "지원자는 전문 자격 증명을 제출해야 합니다.", "professional credentials", "killer"]
    ]
  },
  {
    topic: "logistics",
    tag: "shipping",
    context: "주문, 배송, 재고, 창고 관리 지문에서 조건과 지연 사유를 찾는 맥락",
    items: [
      ["shipment", "배송, 선적", "noun", "The shipment arrived earlier than expected.", "배송품은 예상보다 일찍 도착했습니다.", "international shipment", "basic"],
      ["inventory", "재고", "noun", "The store checks its inventory every Monday.", "그 매장은 매주 월요일 재고를 확인합니다.", "inventory control", "basic"],
      ["warehouse", "창고", "noun", "The products are stored in a nearby warehouse.", "제품들은 근처 창고에 보관됩니다.", "main warehouse", "basic"],
      ["delay", "지연", "noun", "Weather caused a delay in delivery.", "날씨로 인해 배송 지연이 발생했습니다.", "delivery delay", "basic"],
      ["carrier", "운송업체", "noun", "The carrier will provide a tracking number.", "운송업체가 추적 번호를 제공할 것입니다.", "shipping carrier", "basic"],
      ["restock", "재입고하다", "verb", "The item will be restocked next month.", "그 상품은 다음 달에 재입고될 것입니다.", "restock shelves", "basic"],
      ["backorder", "이월 주문, 재고 부족 주문", "noun", "The replacement parts are currently on backorder.", "교체 부품은 현재 이월 주문 상태입니다.", "items on backorder", "killer"],
      ["dispatch", "발송하다, 파견하다", "verb", "A technician was dispatched to the warehouse.", "기술자가 창고로 파견되었습니다.", "dispatch a technician", "killer"],
      ["consignment", "위탁 판매품, 탁송품", "noun", "The consignment must be inspected before unloading.", "탁송품은 하역 전에 검사되어야 합니다.", "incoming consignment", "killer"],
      ["freight", "화물, 운송", "noun", "Freight charges are included in the final invoice.", "화물 운송료는 최종 송장에 포함되어 있습니다.", "freight charges", "killer"]
    ]
  },
  {
    topic: "finance",
    tag: "finance",
    context: "청구서, 예산, 비용 처리, 회계 보고 지문에서 숫자와 조건을 연결하는 맥락",
    items: [
      ["revenue", "수익, 매출", "noun", "Revenue rose after the subscription plan was introduced.", "구독 요금제가 도입된 후 수익이 증가했습니다.", "annual revenue", "basic"],
      ["expenditure", "지출", "noun", "The committee reviewed every expenditure over 500 dollars.", "위원회는 500달러가 넘는 모든 지출을 검토했습니다.", "operating expenditure", "killer"],
      ["reimbursement", "변제, 환급", "noun", "Employees must submit receipts to receive reimbursement.", "직원들은 환급을 받기 위해 영수증을 제출해야 합니다.", "travel reimbursement", "killer"],
      ["invoice", "송장, 청구서", "noun", "The invoice should be paid within thirty days.", "송장은 30일 이내에 결제되어야 합니다.", "issue an invoice", "basic"],
      ["audit", "감사, 회계 감사", "noun", "The annual audit revealed several billing errors.", "연례 감사에서 몇 가지 청구 오류가 드러났습니다.", "conduct an audit", "killer"],
      ["depreciation", "감가상각", "noun", "Depreciation was calculated for the delivery vehicles.", "배송 차량에 대한 감가상각이 계산되었습니다.", "asset depreciation", "killer"],
      ["overhead", "간접비", "noun", "Rent and utilities are included in monthly overhead.", "임대료와 공과금은 월간 간접비에 포함됩니다.", "reduce overhead", "killer"],
      ["allocate", "배정하다, 할당하다", "verb", "The board allocated more funds to customer support.", "이사회는 고객 지원에 더 많은 자금을 배정했습니다.", "allocate funds", "killer"],
      ["reconcile", "대조 확인하다", "verb", "The accountant reconciled the statements before closing.", "회계 담당자는 마감 전에 명세서를 대조했습니다.", "reconcile accounts", "killer"],
      ["fiscal", "회계의, 재정의", "adjective", "The fiscal year ends in March.", "회계 연도는 3월에 끝납니다.", "fiscal year", "killer"]
    ]
  },
  {
    topic: "compliance",
    tag: "legal",
    context: "규정, 계약, 보안, 책임 조항 지문에서 의무와 예외를 구분하는 맥락",
    items: [
      ["comply", "준수하다", "verb", "All branches must comply with the new safety rules.", "모든 지점은 새로운 안전 규정을 준수해야 합니다.", "comply with regulations", "killer"],
      ["regulation", "규정, 법규", "noun", "The regulation applies to imported materials.", "그 규정은 수입 자재에 적용됩니다.", "government regulation", "basic"],
      ["liability", "책임, 법적 책임", "noun", "The supplier accepts liability for damaged goods.", "공급업체는 손상된 상품에 대한 책임을 인정합니다.", "assume liability", "killer"],
      ["disclose", "공개하다, 밝히다", "verb", "The company declined to disclose the purchase price.", "회사는 구매 가격을 공개하지 않았습니다.", "disclose information", "killer"],
      ["confidential", "기밀의", "adjective", "Confidential files must not be stored on shared drives.", "기밀 파일은 공유 드라이브에 저장하면 안 됩니다.", "confidential information", "killer"],
      ["authorization", "승인, 권한", "noun", "Written authorization is required for overtime work.", "초과 근무에는 서면 승인이 필요합니다.", "written authorization", "killer"],
      ["amend", "수정하다", "verb", "The lease was amended to include parking spaces.", "임대 계약은 주차 공간을 포함하도록 수정되었습니다.", "amend an agreement", "killer"],
      ["provision", "조항, 공급", "noun", "The provision allows cancellation with ten days' notice.", "그 조항은 10일 전 통보 시 취소를 허용합니다.", "contract provision", "killer"],
      ["waive", "포기하다, 면제하다", "verb", "The bank agreed to waive the late fee.", "은행은 연체료를 면제하기로 했습니다.", "waive a fee", "killer"],
      ["enforce", "시행하다, 집행하다", "verb", "The city will enforce parking restrictions near the venue.", "시는 행사장 근처 주차 제한을 시행할 것입니다.", "enforce a policy", "killer"]
    ]
  },
  {
    topic: "operations",
    tag: "operations",
    context: "시설 관리, 유지보수, 절차 변경, 비상 대응 안내에서 원인과 조치를 찾는 맥락",
    items: [
      ["maintenance", "유지보수", "noun", "Maintenance work will begin after business hours.", "유지보수 작업은 영업시간 이후 시작됩니다.", "scheduled maintenance", "basic"],
      ["inspection", "점검, 검사", "noun", "A safety inspection is required before reopening.", "재개장 전 안전 점검이 필요합니다.", "routine inspection", "basic"],
      ["outage", "정전, 서비스 중단", "noun", "The network outage affected several regional offices.", "네트워크 중단은 여러 지역 사무소에 영향을 미쳤습니다.", "power outage", "killer"],
      ["procedure", "절차", "noun", "The procedure for reporting defects has changed.", "결함 보고 절차가 변경되었습니다.", "standard procedure", "basic"],
      ["contingency", "비상 대책, 우발 상황", "noun", "The team prepared a contingency plan for severe weather.", "팀은 악천후에 대비한 비상 계획을 준비했습니다.", "contingency plan", "killer"],
      ["implementation", "시행, 도입", "noun", "Implementation of the new system will take two weeks.", "새 시스템 도입에는 2주가 걸릴 것입니다.", "system implementation", "killer"],
      ["capacity", "수용 능력, 용량", "noun", "The facility is operating at full capacity.", "그 시설은 최대 용량으로 운영되고 있습니다.", "full capacity", "killer"],
      ["facility", "시설", "noun", "The training facility includes three computer labs.", "교육 시설에는 세 개의 컴퓨터 실습실이 포함됩니다.", "manufacturing facility", "basic"],
      ["vendor", "공급업체, 판매자", "noun", "The vendor will install the equipment next Tuesday.", "공급업체는 다음 주 화요일 장비를 설치할 것입니다.", "approved vendor", "basic"],
      ["malfunction", "오작동하다, 오작동", "verb", "If the printer malfunctions again, contact support.", "프린터가 다시 오작동하면 지원팀에 연락하세요.", "equipment malfunction", "killer"]
    ]
  },
  {
    topic: "marketing",
    tag: "marketing",
    context: "광고, 고객 관리, 설문, 판매 전략 지문에서 대상과 효과를 파악하는 맥락",
    items: [
      ["outreach", "홍보 활동, 지원 활동", "noun", "The outreach campaign targeted local restaurant owners.", "홍보 캠페인은 지역 식당 소유주를 대상으로 했습니다.", "customer outreach", "killer"],
      ["prospective", "잠재적인", "adjective", "Prospective clients can request a free demonstration.", "잠재 고객은 무료 시연을 요청할 수 있습니다.", "prospective clients", "killer"],
      ["retain", "유지하다, 보유하다", "verb", "The loyalty program helps retain existing customers.", "충성도 프로그램은 기존 고객 유지에 도움이 됩니다.", "retain customers", "killer"],
      ["incentive", "장려책, 혜택", "noun", "Subscribers received an incentive for renewing early.", "구독자는 조기 갱신에 대한 혜택을 받았습니다.", "special incentive", "killer"],
      ["launch", "출시하다, 시작하다", "verb", "The company will launch a new product line in October.", "회사는 10월에 새 제품군을 출시할 것입니다.", "launch a campaign", "basic"],
      ["segment", "분류하다, 부문", "noun", "The report focuses on the fastest-growing market segment.", "그 보고서는 가장 빠르게 성장하는 시장 부문에 초점을 둡니다.", "market segment", "killer"],
      ["conversion", "전환", "noun", "The redesigned page improved the conversion rate.", "새로 디자인된 페이지는 전환율을 개선했습니다.", "conversion rate", "killer"],
      ["demographic", "인구 통계학적 집단", "noun", "The survey identified a younger demographic for the service.", "설문조사는 그 서비스의 더 젊은 고객층을 확인했습니다.", "target demographic", "killer"],
      ["endorsement", "추천, 보증", "noun", "The product gained attention after a public endorsement.", "그 제품은 공개 추천 이후 주목을 받았습니다.", "celebrity endorsement", "killer"],
      ["visibility", "가시성, 인지도", "noun", "Sponsoring the event increased brand visibility.", "행사 후원은 브랜드 인지도를 높였습니다.", "brand visibility", "killer"]
    ]
  },
  {
    topic: "procurement",
    tag: "contract",
    context: "구매 요청, 견적, 입찰, 보증 조건에서 비용과 책임 범위를 읽는 맥락",
    items: [
      ["procurement", "조달, 구매", "noun", "Procurement must approve all purchases over 1,000 dollars.", "조달팀은 1,000달러가 넘는 모든 구매를 승인해야 합니다.", "procurement department", "killer"],
      ["quotation", "견적", "noun", "Please send a quotation for 120 office chairs.", "사무용 의자 120개에 대한 견적을 보내 주세요.", "submit a quotation", "killer"],
      ["bid", "입찰, 입찰하다", "noun", "The construction firm submitted the lowest bid.", "그 건설 회사는 가장 낮은 입찰가를 제출했습니다.", "competitive bid", "killer"],
      ["negotiate", "협상하다", "verb", "The buyer negotiated a discount for bulk orders.", "구매자는 대량 주문 할인을 협상했습니다.", "negotiate terms", "killer"],
      ["stipulation", "조건, 조항", "noun", "One stipulation requires delivery within ten business days.", "한 조건은 영업일 기준 10일 이내 배송을 요구합니다.", "contract stipulation", "killer"],
      ["bulk", "대량의", "adjective", "Bulk purchases qualify for reduced shipping fees.", "대량 구매는 배송료 할인을 받을 수 있습니다.", "bulk order", "basic"],
      ["warranty", "보증", "noun", "The warranty covers repairs for two years.", "보증은 2년 동안 수리를 보장합니다.", "warranty coverage", "basic"],
      ["defective", "결함이 있는", "adjective", "Defective units may be returned without a fee.", "결함 있는 제품은 수수료 없이 반품할 수 있습니다.", "defective product", "killer"],
      ["replacement", "교체품, 교체", "noun", "A replacement part will be shipped tomorrow.", "교체 부품은 내일 발송될 것입니다.", "replacement part", "basic"],
      ["specification", "사양, 명세", "noun", "The equipment must meet every specification in the contract.", "장비는 계약서의 모든 사양을 충족해야 합니다.", "technical specification", "killer"]
    ]
  },
  {
    topic: "analytics",
    tag: "data",
    context: "IT 공지, 보안, 데이터 보고, 시스템 변경 지문에서 기능과 영향 범위를 파악하는 맥락",
    items: [
      ["metric", "측정 기준, 지표", "noun", "Customer satisfaction is a key performance metric.", "고객 만족도는 핵심 성과 지표입니다.", "performance metric", "killer"],
      ["dashboard", "현황판, 대시보드", "noun", "The dashboard displays daily sales by region.", "대시보드는 지역별 일일 매출을 보여 줍니다.", "analytics dashboard", "basic"],
      ["encryption", "암호화", "noun", "Encryption protects customer records during transfer.", "암호화는 전송 중 고객 기록을 보호합니다.", "data encryption", "killer"],
      ["troubleshoot", "문제를 해결하다", "verb", "Technicians will troubleshoot the login issue this afternoon.", "기술자들은 오늘 오후 로그인 문제를 해결할 것입니다.", "troubleshoot an issue", "killer"],
      ["upgrade", "업그레이드하다, 개선", "verb", "The payment system will be upgraded overnight.", "결제 시스템은 밤사이에 업그레이드될 것입니다.", "software upgrade", "basic"],
      ["configuration", "설정, 구성", "noun", "Incorrect configuration caused the notification error.", "잘못된 설정이 알림 오류를 일으켰습니다.", "system configuration", "killer"],
      ["integration", "통합", "noun", "Integration with the accounting platform begins next week.", "회계 플랫폼과의 통합은 다음 주에 시작됩니다.", "platform integration", "killer"],
      ["archive", "보관하다, 기록 보관소", "verb", "Old project files are archived every quarter.", "오래된 프로젝트 파일은 분기마다 보관됩니다.", "archive records", "killer"],
      ["credential", "로그인 자격 정보, 증명서", "noun", "Do not share your credentials with temporary staff.", "임시 직원과 로그인 정보를 공유하지 마세요.", "login credentials", "killer"],
      ["retrieve", "검색하다, 되찾다", "verb", "Users can retrieve deleted messages within seven days.", "사용자는 7일 이내에 삭제된 메시지를 복구할 수 있습니다.", "retrieve data", "killer"]
    ]
  }
];

const toSeed = (item: VocabSeed | RawVocabSeed): VocabSeed => {
  if (!Array.isArray(item)) {
    return item;
  }

  return {
    word: item[0],
    meaningKo: item[1],
    pos: item[2],
    exampleEn: item[3],
    exampleKo: item[4],
    collocation: item[5],
    level: item[6],
    relatedChunks: item[7]
  };
};

const rows = vocabTopics.flatMap((group) =>
  group.items.map((item) => ({
    group,
    item: toSeed(item)
  }))
);

export const vocabBank: VocabItem[] = rows.map(({ group, item }, index) => ({
  id: `V${String(index + 1).padStart(3, "0")}`,
  topic: group.topic,
  level: item.level,
  word: item.word,
  meaningKo: item.meaningKo,
  pos: item.pos,
  exampleEn: item.exampleEn,
  exampleKo: item.exampleKo,
  collocation: item.collocation,
  chunk: item.collocation,
  businessContext: group.context,
  relatedChunks: item.relatedChunks ?? [
    item.collocation,
    `${item.word} request`,
    `${item.word} process`
  ],
  tags: [group.tag, item.level],
  status: "active"
}));
