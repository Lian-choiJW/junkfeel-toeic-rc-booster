import type { VocabItem } from "@/types";

const office = [
  ["supervisor", "관리자, 상사", "noun", "Please contact your supervisor before leaving early.", "조퇴하기 전에 관리자에게 연락하세요.", "direct supervisor"],
  ["department", "부서", "noun", "The sales department moved to the fifth floor.", "영업부는 5층으로 이동했습니다.", "accounting department"],
  ["submit", "제출하다", "verb", "All expense reports must be submitted by Friday.", "모든 비용 보고서는 금요일까지 제출되어야 합니다.", "submit a report"],
  ["policy", "정책, 방침", "noun", "The company updated its remote work policy.", "회사는 원격 근무 방침을 업데이트했습니다.", "company policy"],
  ["approve", "승인하다", "verb", "The manager approved the revised schedule.", "관리자는 수정된 일정을 승인했습니다.", "approve a request"],
  ["deadline", "마감일", "noun", "The deadline for the proposal is approaching.", "제안서 마감일이 다가오고 있습니다.", "meet a deadline"]
];

const communication = [
  ["inquiry", "문의", "noun", "We received an inquiry about the new service.", "우리는 새 서비스에 대한 문의를 받았습니다.", "customer inquiry"],
  ["attach", "첨부하다", "verb", "Please attach the invoice to your message.", "메시지에 송장을 첨부하세요.", "attach a file"],
  ["confirm", "확인하다", "verb", "Could you confirm your attendance by noon?", "정오까지 참석 여부를 확인해 주시겠습니까?", "confirm attendance"],
  ["notify", "알리다", "verb", "Applicants will be notified by email.", "지원자들은 이메일로 통보받을 것입니다.", "notify clients"],
  ["regarding", "~에 관하여", "preposition", "I am writing regarding your recent order.", "최근 주문 건에 관해 연락드립니다.", "regarding the shipment"],
  ["response", "답변, 응답", "noun", "A response is expected within two business days.", "답변은 영업일 기준 이틀 이내에 예상됩니다.", "prompt response"]
];

const schedule = [
  ["postpone", "연기하다", "verb", "The training session was postponed until Monday.", "교육 세션은 월요일까지 연기되었습니다.", "postpone a meeting"],
  ["arrange", "마련하다, 정하다", "verb", "The assistant arranged transportation for the guests.", "비서는 손님들을 위한 교통편을 마련했습니다.", "arrange a location"],
  ["venue", "장소", "noun", "The venue can seat up to 200 people.", "그 장소는 최대 200명을 수용할 수 있습니다.", "event venue"],
  ["agenda", "안건, 의제", "noun", "The agenda includes three budget items.", "안건에는 세 가지 예산 항목이 포함됩니다.", "meeting agenda"],
  ["availability", "이용 가능 여부", "noun", "Please check the availability of the conference room.", "회의실 이용 가능 여부를 확인하세요.", "room availability"],
  ["reschedule", "일정을 다시 잡다", "verb", "We need to reschedule the interview.", "우리는 면접 일정을 다시 잡아야 합니다.", "reschedule an appointment"]
];

const hiring = [
  ["candidate", "지원자", "noun", "Three candidates were invited for final interviews.", "세 명의 지원자가 최종 면접에 초대되었습니다.", "qualified candidate"],
  ["position", "직위, 자리", "noun", "The company is hiring for a marketing position.", "회사는 마케팅 직책을 채용 중입니다.", "open position"],
  ["resume", "이력서", "noun", "Please upload your resume in PDF format.", "이력서를 PDF 형식으로 업로드하세요.", "submit a resume"],
  ["qualification", "자격 요건", "noun", "Language ability is an important qualification.", "언어 능력은 중요한 자격 요건입니다.", "minimum qualification"],
  ["orientation", "오리엔테이션", "noun", "New employees will attend orientation next week.", "신입 직원들은 다음 주 오리엔테이션에 참석합니다.", "employee orientation"],
  ["recruit", "채용하다", "verb", "The firm plans to recruit more engineers.", "그 회사는 더 많은 엔지니어를 채용할 계획입니다.", "recruit staff"]
];

const logistics = [
  ["shipment", "배송, 선적", "noun", "The shipment arrived earlier than expected.", "배송품은 예상보다 일찍 도착했습니다.", "international shipment"],
  ["inventory", "재고", "noun", "The store checks its inventory every Monday.", "그 매장은 매주 월요일 재고를 확인합니다.", "inventory control"],
  ["warehouse", "창고", "noun", "The products are stored in a nearby warehouse.", "제품들은 근처 창고에 보관됩니다.", "main warehouse"],
  ["delay", "지연", "noun", "Weather caused a delay in delivery.", "날씨로 인해 배송 지연이 발생했습니다.", "delivery delay"],
  ["carrier", "운송업체", "noun", "The carrier will provide a tracking number.", "운송업체가 추적 번호를 제공할 것입니다.", "shipping carrier"],
  ["restock", "재입고하다", "verb", "The item will be restocked next month.", "그 상품은 다음 달에 재입고될 것입니다.", "restock shelves"]
];

const contextByTopic: Record<string, string> = {
  office: "회사 내부 공지, 부서 이동, 승인 요청에서 자주 보이는 사무 맥락",
  communication: "이메일 문의, 회신, 첨부, 통보 상황에서 바로 덩어리로 읽어야 하는 표현",
  schedule: "회의 일정 변경, 장소 예약, 교육 안내에서 날짜와 장소를 빠르게 찾는 맥락",
  hiring: "채용 공고, 면접 안내, 신입 직원 교육에서 반복되는 인사 표현",
  logistics: "주문, 배송, 재고, 창고 관리 지문에서 조건과 지연 사유를 찾는 맥락"
};

export const vocabBank: VocabItem[] = [...office, ...communication, ...schedule, ...hiring, ...logistics].map((item, index) => ({
  id: `V${String(index + 1).padStart(3, "0")}`,
  topic: index < 6 ? "office" : index < 12 ? "communication" : index < 18 ? "schedule" : index < 24 ? "hiring" : "logistics",
  level: index % 5 === 0 ? "killer" : "basic",
  word: item[0],
  meaningKo: item[1],
  pos: item[2],
  exampleEn: item[3],
  exampleKo: item[4],
  collocation: item[5],
  chunk: item[5],
  businessContext: contextByTopic[index < 6 ? "office" : index < 12 ? "communication" : index < 18 ? "schedule" : index < 24 ? "hiring" : "logistics"],
  relatedChunks: [item[5], `${item[0]} request`, `${item[0]} process`],
  tags: [index < 6 ? "office" : index < 12 ? "email" : index < 18 ? "meeting" : index < 24 ? "hr" : "shipping"],
  status: "active"
}));
