import type { Part67Question } from "@/types";

export const part67Bank: Part67Question[] = [
  {
    id: "P7-001",
    part: "7",
    passageType: "notice",
    difficulty: "easy",
    passage: {
      en: [
        "Please be advised that the conference room on the third floor will be unavailable from 2 p.m. to 5 p.m. on Friday due to scheduled maintenance.",
        "Employees who have reserved the room during this time should contact the administration office to arrange an alternative location."
      ],
      ko: [
        "3층 회의실은 예정된 유지보수로 인해 금요일 오후 2시부터 5시까지 사용할 수 없음을 알려드립니다.",
        "해당 시간에 회의실을 예약한 직원들은 대체 장소를 마련하기 위해 관리 사무실에 연락해야 합니다."
      ]
    },
    question: "What is the purpose of the notice?",
    choices: { A: "To announce a company event", B: "To inform employees of room unavailability", C: "To request maintenance volunteers", D: "To introduce a new reservation system" },
    answer: "B",
    evidenceSentence: "the conference room on the third floor will be unavailable",
    explanationCorrect: "회의실을 사용할 수 없다고 안내하고 있으므로 정답은 B입니다.",
    explanationWrong: { A: "회사 행사 공지가 아닙니다.", B: "정답입니다.", C: "자원봉사자 요청이 없습니다.", D: "새 예약 시스템 소개가 아닙니다." },
    scanStrategy: {
      why: "회의실 사용 불가를 알리는 공지 목적",
      what: "third floor conference room, 2 p.m. to 5 p.m., Friday",
      trigger: "notice에서는 unavailable, due to, should contact 같은 의무/변경 표현을 먼저 봅니다."
    },
    linkageClues: ["conference room", "unavailable", "alternative location"],
    questionFocus: "purpose",
    paraphrase: [{ passageExpression: "will be unavailable", answerExpression: "room unavailability", meaningKo: "사용할 수 없음" }],
    tags: ["detail", "purpose", "notice"],
    status: "active"
  },
  {
    id: "P6-001",
    part: "6",
    passageType: "email",
    difficulty: "medium",
    passage: {
      en: [
        "Thank you for registering for the inventory management workshop.",
        "The session will begin at 9 a.m. in Room 402, and printed materials will be provided at the entrance.",
        "Participants are encouraged to bring a laptop so they can complete the practice tasks."
      ],
      ko: [
        "재고 관리 워크숍에 등록해 주셔서 감사합니다.",
        "교육은 402호에서 오전 9시에 시작되며, 인쇄 자료는 입구에서 제공됩니다.",
        "참가자들은 실습 과제를 완료할 수 있도록 노트북을 가져오는 것이 권장됩니다."
      ]
    },
    question: "What are participants advised to bring?",
    choices: { A: "A printed manual", B: "A laptop", C: "A name badge", D: "A registration form" },
    answer: "B",
    evidenceSentence: "bring a laptop so they can complete the practice tasks",
    explanationCorrect: "실습 과제를 위해 노트북을 가져오라고 했으므로 B가 맞습니다.",
    explanationWrong: { A: "인쇄 자료는 제공됩니다.", B: "정답입니다.", C: "명찰 언급이 없습니다.", D: "등록 양식 언급이 없습니다." },
    scanStrategy: {
      who: "workshop participants",
      why: "practice tasks를 완료하기 위해",
      what: "laptop",
      trigger: "이메일 안내문은 thank you for, session will begin, participants should 같은 안내 흐름을 먼저 스캔합니다."
    },
    linkageClues: ["participants", "bring a laptop", "practice tasks"],
    questionFocus: "detail",
    paraphrase: [{ passageExpression: "bring a laptop", answerExpression: "A laptop", meaningKo: "노트북을 가져오다" }],
    tags: ["detail", "email", "workshop"],
    status: "active"
  },
  {
    id: "P7-002",
    part: "7",
    passageType: "advertisement",
    difficulty: "medium",
    passage: {
      en: [
        "BrightDesk now offers adjustable office chairs designed for long workdays.",
        "Customers who order before September 30 will receive free assembly and a two-year warranty.",
        "Bulk discounts are available for companies purchasing ten or more chairs."
      ],
      ko: [
        "BrightDesk는 긴 근무일에 맞게 설계된 조절식 사무용 의자를 제공합니다.",
        "9월 30일 전에 주문하는 고객은 무료 조립과 2년 보증을 받습니다.",
        "10개 이상의 의자를 구매하는 회사에는 대량 구매 할인이 제공됩니다."
      ]
    },
    question: "What benefit is available to early customers?",
    choices: { A: "Free assembly", B: "A free desk lamp", C: "Same-day shipping", D: "A training video" },
    answer: "A",
    evidenceSentence: "order before September 30 will receive free assembly",
    explanationCorrect: "9월 30일 전 주문 고객에게 무료 조립이 제공됩니다.",
    explanationWrong: { A: "정답입니다.", B: "스탠드는 언급되지 않았습니다.", C: "당일 배송은 언급되지 않았습니다.", D: "교육 영상은 언급되지 않았습니다." },
    scanStrategy: {
      what: "free assembly and a two-year warranty",
      why: "September 30 이전 주문 조건",
      trigger: "광고문은 할인 조건, 날짜 제한, 무료 혜택을 숫자와 함께 먼저 표시합니다."
    },
    linkageClues: ["before September 30", "free assembly", "two-year warranty"],
    questionFocus: "detail",
    paraphrase: [{ passageExpression: "receive free assembly", answerExpression: "Free assembly", meaningKo: "무료 조립을 받다" }],
    tags: ["detail", "advertisement", "benefit"],
    status: "active"
  },
  {
    id: "P6-002",
    part: "6",
    passageType: "memo",
    difficulty: "hard",
    passage: {
      en: [
        "Starting next month, all travel reimbursement requests must be submitted through the new online portal.",
        "Paper forms will no longer be accepted after the transition period ends.",
        "This change is intended to reduce processing time and prevent missing receipts."
      ],
      ko: [
        "다음 달부터 모든 출장비 환급 요청은 새 온라인 포털을 통해 제출되어야 합니다.",
        "전환 기간이 끝난 뒤에는 종이 양식이 더 이상 접수되지 않습니다.",
        "이 변경은 처리 시간을 줄이고 영수증 누락을 방지하기 위한 것입니다."
      ]
    },
    question: "Why is the company changing the reimbursement process?",
    choices: { A: "To increase travel budgets", B: "To speed up processing", C: "To hire more accountants", D: "To cancel paper receipts" },
    answer: "B",
    evidenceSentence: "reduce processing time and prevent missing receipts",
    explanationCorrect: "처리 시간을 줄이려는 목적이 명시되어 있습니다.",
    explanationWrong: { A: "예산 증가가 아닙니다.", B: "정답입니다.", C: "회계 직원 채용 내용이 없습니다.", D: "영수증 자체를 취소하는 것이 아닙니다." },
    scanStrategy: {
      why: "처리 시간 단축과 영수증 누락 방지",
      what: "online portal submission",
      trigger: "memo는 starting next month, must, no longer 같은 정책 변경 신호를 먼저 잡습니다."
    },
    linkageClues: ["Starting next month", "online portal", "reduce processing time"],
    questionFocus: "purpose",
    paraphrase: [{ passageExpression: "reduce processing time", answerExpression: "speed up processing", meaningKo: "처리를 빠르게 하다" }],
    tags: ["purpose", "memo", "paraphrase"],
    status: "active"
  },
  {
    id: "P7-003",
    part: "7",
    passageType: "chat",
    difficulty: "killer",
    passage: {
      en: [
        "Mina: The client asked whether we can move the product demo to Thursday morning.",
        "Owen: I can present then, but the sample device will not arrive until Thursday afternoon.",
        "Mina: In that case, I will suggest Friday at 10 a.m. and reserve the small conference room."
      ],
      ko: [
        "Mina: 고객이 제품 시연을 목요일 오전으로 옮길 수 있는지 물었습니다.",
        "Owen: 저는 그때 발표할 수 있지만 샘플 기기는 목요일 오후가 되어야 도착합니다.",
        "Mina: 그렇다면 금요일 오전 10시를 제안하고 소회의실을 예약하겠습니다."
      ]
    },
    question: "Why does Mina decide to suggest Friday?",
    choices: { A: "Owen is unavailable on Thursday", B: "The room is fully booked", C: "The sample device arrives too late", D: "The client requested Friday" },
    answer: "C",
    evidenceSentence: "the sample device will not arrive until Thursday afternoon",
    explanationCorrect: "목요일 오전 시연에는 샘플 기기가 도착하지 않으므로 금요일을 제안합니다.",
    explanationWrong: { A: "Owen은 목요일 발표가 가능합니다.", B: "회의실 예약 문제는 없습니다.", C: "정답입니다.", D: "고객은 목요일 오전을 물었습니다." },
    scanStrategy: {
      who: "Mina, Owen, client",
      why: "sample device가 목요일 오후에야 도착함",
      what: "Friday at 10 a.m.",
      trigger: "채팅은 앞뒤 발언의 it, then, in that case가 무엇을 받는지 연결합니다."
    },
    linkageClues: ["Thursday morning", "Thursday afternoon", "In that case", "Friday at 10 a.m."],
    questionFocus: "inference",
    paraphrase: [{ passageExpression: "will not arrive until Thursday afternoon", answerExpression: "arrives too late", meaningKo: "너무 늦게 도착하다" }],
    tags: ["inference", "chat", "paraphrase"],
    status: "active"
  },
  {
    id: "P7-004",
    part: "7",
    passageType: "letter",
    difficulty: "hard",
    passage: {
      en: [
        "Email 1 - From: CityFit Equipment. We offer free delivery for orders within 10 kilometers of our warehouse. Accessories for treadmills are sold separately and can be added before shipment.",
        "Email 2 - From: Daniel Cho. I would like to order two treadmills for our training center at 18 Lake Avenue, which is 14 kilometers from your warehouse. Please include safety rails with each machine."
      ],
      ko: [
        "이메일 1 - CityFit Equipment 발신. 창고에서 10km 이내 주문에는 무료 배송을 제공합니다. 러닝머신 액세서리는 별도 판매되며 배송 전 추가할 수 있습니다.",
        "이메일 2 - Daniel Cho 발신. 창고에서 14km 떨어진 18 Lake Avenue의 교육 센터에 러닝머신 두 대를 주문하고 싶습니다. 각 기기에 안전 레일을 포함해 주세요."
      ]
    },
    question: "What can be inferred about Daniel Cho's order?",
    choices: { A: "It qualifies for free delivery", B: "It may include an extra charge for delivery", C: "It cannot include accessories", D: "It will be shipped from another warehouse" },
    answer: "B",
    evidenceSentence: "free delivery for orders within 10 kilometers ... 14 kilometers from your warehouse",
    explanationCorrect: "무료 배송 조건은 10km 이내인데 Daniel의 주소는 14km입니다. 따라서 배송비가 추가될 수 있습니다.",
    explanationWrong: {
      A: "14km는 무료 배송 조건인 10km 이내가 아닙니다.",
      B: "정답입니다.",
      C: "액세서리는 별도 판매되며 추가할 수 있습니다.",
      D: "다른 창고에서 배송된다는 내용은 없습니다."
    },
    scanStrategy: {
      who: "CityFit Equipment와 Daniel Cho",
      why: "배송 조건과 주문 주소의 거리 비교",
      what: "10km 무료 배송 조건, 14km 주소, safety rails",
      trigger: "다중 지문은 첫 지문의 숫자 조건과 두 번째 지문의 주소/요청을 교차 매칭합니다."
    },
    linkageClues: ["10 kilometers", "14 kilometers", "sold separately", "safety rails"],
    questionFocus: "inference",
    paraphrase: [
      { passageExpression: "within 10 kilometers", answerExpression: "qualifies for free delivery", meaningKo: "무료 배송 조건에 해당하다" },
      { passageExpression: "sold separately", answerExpression: "extra charge", meaningKo: "별도 비용이 들 수 있음" }
    ],
    tags: ["double-passage", "linkage", "inference", "number-condition"],
    status: "active"
  },
  {
    id: "P6-003",
    part: "6",
    passageType: "memo",
    difficulty: "hard",
    passage: {
      en: [
        "To reduce congestion near the service desk, employees should now submit equipment requests through the internal help portal.",
        "The portal automatically forwards each request to the appropriate technician and records the expected completion date.",
        "______",
        "Employees who need urgent repairs may still call the facilities office directly."
      ],
      ko: [
        "서비스 데스크 주변 혼잡을 줄이기 위해 직원들은 이제 내부 헬프 포털을 통해 장비 요청을 제출해야 합니다.",
        "포털은 각 요청을 적절한 기술자에게 자동 전달하고 예상 완료일을 기록합니다.",
        "______",
        "긴급 수리가 필요한 직원은 여전히 시설 사무실에 직접 전화할 수 있습니다."
      ]
    },
    question: "Which sentence best fits the blank?",
    choices: {
      A: "This feature will allow employees to check the status of their requests without visiting the desk.",
      B: "The service desk will close permanently at the end of this month.",
      C: "Technicians are encouraged to attend a training workshop next Friday.",
      D: "New laptops will be distributed to all employees in the finance department."
    },
    answer: "A",
    evidenceSentence: "records the expected completion date",
    explanationCorrect: "앞 문장의 포털 기능과 뒤 문장의 예외 상황 사이에, 요청 상태 확인이라는 연결 문장이 가장 자연스럽습니다.",
    explanationWrong: {
      A: "정답입니다.",
      B: "서비스 데스크가 완전히 닫힌다는 내용은 뒤의 urgent repairs 예외와 충돌합니다.",
      C: "기술자 교육은 요청 포털 흐름과 직접 연결되지 않습니다.",
      D: "특정 부서 노트북 배포는 장비 요청 절차와 초점이 다릅니다."
    },
    scanStrategy: {
      who: "employees, technicians, facilities office",
      why: "혼잡 감소와 요청 상태 추적",
      what: "internal help portal",
      trigger: "문장삽입은 빈칸 앞의 기능 설명과 뒤의 예외 문장을 동시에 연결합니다."
    },
    linkageClues: ["portal", "records", "This feature", "urgent repairs"],
    questionFocus: "sentence-insertion",
    paraphrase: [
      { passageExpression: "records the expected completion date", answerExpression: "check the status", meaningKo: "진행 상태를 확인하다" }
    ],
    tags: ["sentence-insertion", "memo", "linkage", "part6"],
    status: "active"
  },
  {
    id: "P6-004",
    part: "6",
    passageType: "email",
    difficulty: "hard",
    passage: {
      en: [
        "Dear subscribers, the online magazine will publish its October issue two days later than planned.",
        "Several interviews had to be rescheduled after a severe storm interrupted transportation in the region.",
        "______, all paid subscribers will receive an additional week of access to the digital archive.",
        "We appreciate your patience and will notify you when the issue becomes available."
      ],
      ko: [
        "구독자 여러분, 온라인 매거진은 10월호를 예정일보다 이틀 늦게 발행할 예정입니다.",
        "심한 폭풍으로 지역 교통이 중단되어 여러 인터뷰 일정을 다시 잡아야 했습니다.",
        "______ 모든 유료 구독자는 디지털 보관함 접근 기간을 일주일 추가로 받게 됩니다.",
        "기다려 주셔서 감사드리며, 해당 호가 이용 가능해지면 알려드리겠습니다."
      ]
    },
    question: "Which transition best completes the sentence?",
    choices: { A: "For instance", B: "As compensation", C: "In contrast", D: "Beforehand" },
    answer: "B",
    evidenceSentence: "two days later than planned ... additional week of access",
    explanationCorrect: "지연에 대한 보상으로 추가 접근권을 제공한다는 흐름이므로 As compensation이 맞습니다.",
    explanationWrong: {
      A: "예시를 드는 흐름이 아닙니다.",
      B: "정답입니다.",
      C: "대조가 아니라 보상 조치입니다.",
      D: "사전에라는 시간 표현은 문맥과 맞지 않습니다."
    },
    scanStrategy: {
      why: "발행 지연에 대한 보상 안내",
      what: "additional week of archive access",
      trigger: "접속부사는 앞 문장의 문제 상황과 뒤 문장의 조치 관계를 연결합니다."
    },
    linkageClues: ["later than planned", "As compensation", "additional week"],
    questionFocus: "paraphrase",
    paraphrase: [
      { passageExpression: "additional week of access", answerExpression: "compensation", meaningKo: "보상으로 제공되는 추가 혜택" }
    ],
    tags: ["connector", "email", "part6", "logic"],
    status: "active"
  },
  {
    id: "P7-005",
    part: "7",
    passageType: "article",
    difficulty: "hard",
    passage: {
      en: [
        "Riverton's public library has reported a sharp increase in weekday visitors since opening a small coworking area in April.",
        "The area includes reservable desks, faster wireless service, and two rooms for online meetings.",
        "Library director Hanna Ruiz said the project was intended to support independent workers who need a quiet place between client appointments.",
        "Although the library will not charge for desk reservations this year, it may introduce a small fee if demand continues to rise."
      ],
      ko: [
        "Riverton 공공 도서관은 4월에 작은 공동 작업 공간을 연 이후 평일 방문자가 크게 증가했다고 보고했습니다.",
        "그 공간에는 예약 가능한 책상, 더 빠른 무선 서비스, 온라인 회의를 위한 방 두 개가 포함되어 있습니다.",
        "도서관장 Hanna Ruiz는 이 프로젝트가 고객 약속 사이에 조용한 장소가 필요한 독립 근로자를 지원하기 위한 것이라고 말했습니다.",
        "도서관은 올해 책상 예약 요금을 부과하지 않겠지만, 수요가 계속 증가하면 소액의 요금을 도입할 수 있습니다."
      ]
    },
    question: "What is suggested about the coworking area?",
    choices: {
      A: "It was created mainly for library employees.",
      B: "It may require payment in the future.",
      C: "It is available only on weekends.",
      D: "It replaced all regular reading rooms."
    },
    answer: "B",
    evidenceSentence: "it may introduce a small fee if demand continues to rise",
    explanationCorrect: "수요가 계속 늘면 소액 요금이 생길 수 있다고 했으므로 B가 맞습니다.",
    explanationWrong: {
      A: "독립 근로자를 지원하기 위한 공간입니다.",
      B: "정답입니다.",
      C: "평일 방문자 증가가 언급되어 주말 전용이 아닙니다.",
      D: "기존 열람실을 모두 대체했다는 내용은 없습니다."
    },
    scanStrategy: {
      who: "independent workers",
      why: "조용한 작업 공간 제공",
      what: "future fee if demand rises",
      trigger: "기사문은 첫 문단의 변화, 인용문의 목적, 마지막 문장의 조건을 빠르게 잡습니다."
    },
    linkageClues: ["reported a sharp increase", "intended to support", "may introduce a small fee"],
    questionFocus: "inference",
    paraphrase: [
      { passageExpression: "may introduce a small fee", answerExpression: "may require payment", meaningKo: "앞으로 비용이 필요할 수 있음" }
    ],
    tags: ["article", "inference", "condition", "paraphrase"],
    status: "active"
  },
  {
    id: "P7-006",
    part: "7",
    passageType: "letter",
    difficulty: "killer",
    passage: {
      en: [
        "Notice - Northline Catering: Standard lunch packages include sandwiches, fruit, and bottled water. Dessert trays and hot coffee service are available as add-ons and must be requested at least two business days before delivery.",
        "Order Form - Client: Greenhill Training Center. Event date: June 18. Delivery time: 11:30 a.m. Standard lunch packages: 45. Add-ons selected: hot coffee service. Request submitted: June 17 at 4:20 p.m.",
        "Message - Northline Catering: We can deliver the standard lunch packages as scheduled, but the selected add-on cannot be guaranteed because it was requested after the deadline."
      ],
      ko: [
        "공지 - Northline Catering: 표준 점심 패키지에는 샌드위치, 과일, 생수가 포함됩니다. 디저트 트레이와 따뜻한 커피 서비스는 추가 옵션으로 제공되며 배송 최소 영업일 기준 이틀 전 요청해야 합니다.",
        "주문서 - 고객: Greenhill Training Center. 행사일: 6월 18일. 배송 시간: 오전 11시 30분. 표준 점심 패키지: 45개. 선택 추가 옵션: 따뜻한 커피 서비스. 요청 제출: 6월 17일 오후 4시 20분.",
        "메시지 - Northline Catering: 표준 점심 패키지는 예정대로 배송할 수 있지만, 선택한 추가 옵션은 마감 이후 요청되어 보장할 수 없습니다."
      ]
    },
    question: "What is most likely true about Greenhill Training Center's order?",
    choices: {
      A: "The entire order will be canceled.",
      B: "The hot coffee service may not be provided.",
      C: "The lunch packages must be picked up in person.",
      D: "The client ordered dessert trays instead of coffee."
    },
    answer: "B",
    evidenceSentence: "hot coffee service ... must be requested at least two business days before delivery ... June 17 ... June 18",
    explanationCorrect: "커피 서비스는 이틀 전 요청해야 하는 추가 옵션인데 하루 전 오후에 요청했으므로 제공이 보장되지 않습니다.",
    explanationWrong: {
      A: "표준 점심 패키지는 예정대로 배송 가능하다고 했습니다.",
      B: "정답입니다.",
      C: "직접 픽업해야 한다는 내용은 없습니다.",
      D: "선택 추가 옵션은 hot coffee service입니다."
    },
    scanStrategy: {
      who: "Northline Catering, Greenhill Training Center",
      why: "추가 옵션 요청 마감 조건",
      what: "June 18 delivery, June 17 request, hot coffee service",
      trigger: "다중지문은 옵션 리스트 전체를 다 읽기보다 선택된 항목과 마감 조건만 교차 확인합니다."
    },
    linkageClues: ["add-ons", "two business days", "June 17", "June 18", "cannot be guaranteed"],
    questionFocus: "inference",
    paraphrase: [
      { passageExpression: "cannot be guaranteed", answerExpression: "may not be provided", meaningKo: "제공되지 않을 수 있음" },
      { passageExpression: "add-ons", answerExpression: "selected add-on", meaningKo: "추가 옵션" }
    ],
    tags: ["triple-passage", "itemization", "number-condition", "inference"],
    status: "active"
  }
];
