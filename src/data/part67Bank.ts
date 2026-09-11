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
  }
];
