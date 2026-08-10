import { BrainCircuit } from "lucide-react";

const LessonCoreConcept = ({ coreConcept }) => {
  return (
    <section className="rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-8 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-100">
          <BrainCircuit className="text-indigo-600" size={22} />
        </div>

        <h2 className="text-3xl font-bold text-slate-900">Core Concept</h2>
      </div>

      <p className="text-[17px] leading-9 text-slate-700">{coreConcept}</p>

      <div className="mt-8 rounded-2xl border border-indigo-200 bg-white p-5">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
          Remember
        </p>

        <p className="mt-2 text-slate-700">
          Before moving ahead, make sure you understand this concept clearly.
          Every advanced Java topic builds upon this foundation.
        </p>
      </div>
    </section>
  );
};

export default LessonCoreConcept;
