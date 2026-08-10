import { BookOpen } from "lucide-react";

const LessonOverview = ({ overview }) => {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50">
          <BookOpen className="text-indigo-600" size={22} />
        </div>

        <h2 className="text-3xl font-bold text-slate-900">Overview</h2>
      </div>

      <p className="text-[17px] leading-9 text-slate-700">{overview}</p>
    </section>
  );
};

export default LessonOverview;
