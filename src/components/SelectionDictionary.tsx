"use client";

import { useEffect, useMemo, useState } from "react";
import { vocabBank } from "@/data/vocabBank";

type DictionaryEntry = {
  word: string;
  meaningKo: string;
  pos: string;
  exampleEn?: string;
  collocation?: string;
  aliases?: string[];
};

type PopupState = {
  selectedText: string;
  entry: DictionaryEntry | null;
  left: number;
  top: number;
  width: number;
};

const supplementalEntries: DictionaryEntry[] = [
  { word: "marketing", meaningKo: "마케팅, 판촉 활동", pos: "noun", collocation: "marketing team" },
  { word: "campaign", meaningKo: "캠페인, 홍보 활동", pos: "noun", collocation: "launch a campaign" },
  { word: "customer", meaningKo: "고객", pos: "noun", collocation: "customer awareness", aliases: ["customers"] },
  { word: "contract", meaningKo: "계약서, 계약", pos: "noun", collocation: "updated contract" },
  { word: "vendor", meaningKo: "공급업체, 판매자", pos: "noun", collocation: "all vendors", aliases: ["vendors"] },
  { word: "employee", meaningKo: "직원", pos: "noun", collocation: "new employees", aliases: ["employees"] },
  { word: "workshop", meaningKo: "워크숍, 실습형 교육", pos: "noun", collocation: "register for a workshop" },
  { word: "severe", meaningKo: "심한, 악천후의", pos: "adjective", collocation: "severe weather" },
  { word: "delivery", meaningKo: "배송, 배달", pos: "noun", collocation: "delivery arrived" },
  { word: "accounting", meaningKo: "회계", pos: "noun", collocation: "accounting department" },
  { word: "board", meaningKo: "이사회", pos: "noun", collocation: "board meeting" },
  { word: "consultant", meaningKo: "컨설턴트, 자문가", pos: "noun", collocation: "business consultant" },
  { word: "advice", meaningKo: "조언", pos: "noun", collocation: "whose advice" },
  { word: "cost", meaningKo: "비용", pos: "noun", collocation: "reduce costs", aliases: ["costs"] },
  { word: "director", meaningKo: "이사, 책임자", pos: "noun", collocation: "project director" },
  { word: "training", meaningKo: "교육, 훈련", pos: "noun", collocation: "training materials" },
  { word: "material", meaningKo: "자료, 자재", pos: "noun", collocation: "training materials", aliases: ["materials"] },
  { word: "session", meaningKo: "수업, 회의, 시간", pos: "noun", collocation: "training session" },
  { word: "software", meaningKo: "소프트웨어", pos: "noun", collocation: "software update" },
  { word: "overnight", meaningKo: "밤사이에, 하룻밤 동안", pos: "adverb", collocation: "installed overnight" },
  { word: "report", meaningKo: "보고서", pos: "noun", collocation: "annual report" },
  { word: "affect", meaningKo: "영향을 미치다", pos: "verb", collocation: "affect workers", aliases: ["affects", "affected"] },
  { word: "worker", meaningKo: "근로자", pos: "noun", collocation: "part-time workers", aliases: ["workers"] },
  { word: "guest", meaningKo: "투숙객, 손님", pos: "noun", collocation: "hotel guests", aliases: ["guests"] },
  { word: "fitness", meaningKo: "체력 단련, 피트니스", pos: "noun", collocation: "fitness center" },
  { word: "project", meaningKo: "프로젝트", pos: "noun", collocation: "project manager" },
  { word: "manager", meaningKo: "관리자, 매니저", pos: "noun", collocation: "project manager" },
  { word: "final", meaningKo: "최종의", pos: "adjective", collocation: "final report" },
  { word: "shared", meaningKo: "공용의, 공유된", pos: "adjective", collocation: "shared meeting rooms" },
  { word: "room", meaningKo: "방, 회의실", pos: "noun", collocation: "meeting room", aliases: ["rooms"] },
  { word: "supplier", meaningKo: "공급업체", pos: "noun", collocation: "supplier confirmed" },
  { word: "replacement", meaningKo: "교체, 교체품", pos: "noun", collocation: "replacement parts" },
  { word: "ship", meaningKo: "배송하다, 발송하다", pos: "verb", collocation: "shipped separately", aliases: ["shipped", "shipping"] },
  { word: "separately", meaningKo: "별도로", pos: "adverb", collocation: "shipped separately" },
  { word: "conference", meaningKo: "회의, 회의용의", pos: "noun", collocation: "conference room" },
  { word: "available", meaningKo: "이용 가능한", pos: "adjective", collocation: "available for use" },
  { word: "unavailable", meaningKo: "이용할 수 없는, 구할 수 없는", pos: "adjective", collocation: "room unavailability" },
  { word: "reserved", meaningKo: "예약된", pos: "adjective", collocation: "reserved the room" },
  { word: "administration", meaningKo: "관리, 행정 부서", pos: "noun", collocation: "administration office" },
  { word: "alternative", meaningKo: "대체의, 대안", pos: "adjective", collocation: "alternative location" },
  { word: "participant", meaningKo: "참가자", pos: "noun", collocation: "workshop participants", aliases: ["participants"] },
  { word: "laptop", meaningKo: "노트북 컴퓨터", pos: "noun", collocation: "bring a laptop" },
  { word: "practice", meaningKo: "실습, 연습", pos: "noun", collocation: "practice tasks" },
  { word: "adjustable", meaningKo: "조절 가능한", pos: "adjective", collocation: "adjustable chairs" },
  { word: "assembly", meaningKo: "조립", pos: "noun", collocation: "free assembly" },
  { word: "treadmill", meaningKo: "러닝머신", pos: "noun", collocation: "order two treadmills", aliases: ["treadmills"] },
  { word: "accessory", meaningKo: "부속품, 액세서리", pos: "noun", collocation: "treadmill accessories", aliases: ["accessories"] },
  { word: "receipt", meaningKo: "영수증, 수령", pos: "noun", collocation: "missing receipts", aliases: ["receipts"] },
  { word: "portal", meaningKo: "포털, 온라인 접수 창구", pos: "noun", collocation: "online portal" },
  { word: "transition", meaningKo: "전환, 변경 과정", pos: "noun", collocation: "transition period" },
  { word: "client", meaningKo: "고객, 의뢰인", pos: "noun", collocation: "the client asked" },
  { word: "demo", meaningKo: "시연", pos: "noun", collocation: "product demo" },
  { word: "sample", meaningKo: "샘플, 견본", pos: "noun", collocation: "sample device" },
  { word: "device", meaningKo: "기기, 장치", pos: "noun", collocation: "sample device" },
  { word: "rail", meaningKo: "레일, 난간", pos: "noun", collocation: "safety rails", aliases: ["rails"] },
  { word: "kilometer", meaningKo: "킬로미터", pos: "noun", collocation: "within 10 kilometers", aliases: ["kilometers"] }
];

const normalize = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^\w\s'-]/g, "")
    .replace(/\s+/g, " ")
    .trim();

const getCandidates = (word: string) => {
  const candidates = new Set([word]);

  if (word.endsWith("ies") && word.length > 4) {
    candidates.add(`${word.slice(0, -3)}y`);
  }
  if (word.endsWith("es") && word.length > 3) {
    candidates.add(word.slice(0, -2));
  }
  if (word.endsWith("s") && word.length > 3) {
    candidates.add(word.slice(0, -1));
  }
  if (word.endsWith("ing") && word.length > 5) {
    const base = word.slice(0, -3);
    candidates.add(base);
    candidates.add(`${base}e`);
  }
  if (word.endsWith("ed") && word.length > 4) {
    const base = word.slice(0, -2);
    candidates.add(base);
    candidates.add(`${base}e`);
  }

  return Array.from(candidates);
};

export function SelectionDictionary() {
  const [popup, setPopup] = useState<PopupState | null>(null);

  const dictionary = useMemo(() => {
    const entries: DictionaryEntry[] = [
      ...vocabBank.map((item) => ({
        word: item.word,
        meaningKo: item.meaningKo,
        pos: item.pos,
        exampleEn: item.exampleEn,
        collocation: item.collocation,
        aliases: item.relatedChunks
      })),
      ...supplementalEntries
    ];

    const map = new Map<string, DictionaryEntry>();
    entries.forEach((entry) => {
      map.set(normalize(entry.word), entry);
      entry.aliases?.forEach((alias) => map.set(normalize(alias), entry));
      if (entry.collocation) {
        map.set(normalize(entry.collocation), entry);
      }
    });

    return map;
  }, []);

  useEffect(() => {
    const updatePopup = () => {
      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
        setPopup(null);
        return;
      }

      const selectedText = selection.toString().trim();
      const normalizedText = normalize(selectedText);
      if (!/[a-z]/i.test(selectedText) || normalizedText.length < 2 || normalizedText.length > 40) {
        setPopup(null);
        return;
      }

      const words = normalizedText.split(" ");
      const lookupKeys = words.length > 1 ? [normalizedText, ...words] : getCandidates(normalizedText);
      const entry = lookupKeys.map((key) => dictionary.get(key)).find(Boolean) ?? null;

      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      if (!rect.width && !rect.height) {
        setPopup(null);
        return;
      }

      const popupWidth = Math.min(320, Math.max(220, window.innerWidth - 16));
      const left = Math.min(Math.max(rect.left + rect.width / 2 - popupWidth / 2, 8), window.innerWidth - popupWidth - 8);
      const belowTop = rect.bottom + 10;
      const aboveTop = rect.top - 190;
      const top = belowTop > window.innerHeight - 210 ? Math.max(8, aboveTop) : belowTop;

      setPopup({
        selectedText,
        entry,
        left,
        top,
        width: popupWidth
      });
    };

    const deferredUpdate = () => window.setTimeout(updatePopup, 20);
    const clearPopup = () => setPopup(null);
    const clearOnPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("[data-selection-dictionary]")) {
        return;
      }
      setPopup(null);
    };

    document.addEventListener("mouseup", deferredUpdate);
    document.addEventListener("keyup", deferredUpdate);
    document.addEventListener("touchend", deferredUpdate);
    document.addEventListener("mousedown", clearOnPointerDown);
    document.addEventListener("scroll", clearPopup, true);

    return () => {
      document.removeEventListener("mouseup", deferredUpdate);
      document.removeEventListener("keyup", deferredUpdate);
      document.removeEventListener("touchend", deferredUpdate);
      document.removeEventListener("mousedown", clearOnPointerDown);
      document.removeEventListener("scroll", clearPopup, true);
    };
  }, [dictionary]);

  if (!popup) {
    return null;
  }

  const title = popup.entry?.word ?? popup.selectedText;

  return (
    <aside
      data-selection-dictionary
      className="fixed z-50 border border-amber-300 bg-yellow-100 p-3 text-sm text-slate-950 shadow-xl"
      style={{ left: popup.left, top: popup.top, width: popup.width }}
      role="status"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-base font-black leading-6">
            {title}
            {popup.entry ? <span className="ml-1 text-sm font-bold">[{popup.entry.pos}]</span> : null}
          </p>
          {popup.entry ? (
            <p className="mt-1 whitespace-pre-line text-sm font-semibold leading-6">{popup.entry.meaningKo}</p>
          ) : (
            <p className="mt-1 text-sm font-semibold leading-6">아직 앱 단어장에 없는 단어입니다.</p>
          )}
        </div>
        <button
          className="focus-ring border border-amber-300 bg-yellow-50 px-2 py-1 text-xs font-black"
          type="button"
          onClick={() => setPopup(null)}
          aria-label="뜻 카드 닫기"
        >
          X
        </button>
      </div>
      {popup.entry?.collocation ? (
        <p className="mt-3 border-t border-amber-300 pt-2 text-sm font-bold leading-6">
          {popup.entry.collocation}
        </p>
      ) : null}
      {popup.entry?.exampleEn ? (
        <p className="mt-1 text-xs font-semibold leading-5 text-slate-700">{popup.entry.exampleEn}</p>
      ) : null}
    </aside>
  );
}
