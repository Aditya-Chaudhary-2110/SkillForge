import { Cpu } from "lucide-react";

const LessonInternalWorking = ({ internalWorking }) => {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100">
          <Cpu className="text-violet-600" size={22} />
        </div>

        <h2 className="text-3xl font-bold text-slate-900">Internal Working</h2>
      </div>

      <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
        <p className="text-sm font-semibold uppercase tracking-wide text-violet-600">
          Behind the Scenes
        </p>

        <p className="mt-3 text-[17px] leading-9 text-slate-700">
          {internalWorking}
        </p>
      </div>
    </section>
  );
};

export default LessonInternalWorking;
