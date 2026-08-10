import { Lightbulb } from "lucide-react";

const LessonWhy = ({ why }) => {
  return (
    <section className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100">
          <Lightbulb className="text-emerald-600" size={22} />
        </div>

        <h2 className="text-3xl font-bold text-slate-900">
          Why do we need this?
        </h2>
      </div>

      <p className="text-[17px] leading-9 text-slate-700">{why}</p>
    </section>
  );
};

export default LessonWhy;
