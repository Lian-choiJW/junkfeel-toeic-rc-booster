import { StudyTabs } from "@/components/StudyTabs";
import { SelectionDictionary } from "@/components/SelectionDictionary";

export default function StudyPage() {
  return (
    <section className="mx-auto max-w-7xl px-3 py-4">
      <div className="mb-3 border border-line bg-white">
        <div className="border-b border-line bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-600">Workbook / Daily RC Sheet</div>
        <div className="px-3 py-3">
          <h1 className="text-xl font-bold text-ink">Daily RC Workbook</h1>
          <p className="mt-1 text-sm leading-6 text-slate-600">Vocabulary, structure, reading evidence, review log.</p>
        </div>
      </div>
      <StudyTabs />
      <SelectionDictionary />
    </section>
  );
}
