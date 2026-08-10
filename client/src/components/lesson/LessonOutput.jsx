import { Monitor } from "lucide-react";

const LessonOutput = ({ output }) => {
  if (!output?.result) return null;

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-600">
          <Monitor className="text-white" size={22} />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900">Output</h2>

          <p className="text-sm text-slate-500">Expected program result</p>
        </div>
      </div>

      {/* Terminal */}

      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-black">
        <div className="border-b border-slate-800 px-5 py-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Terminal
          </span>
        </div>

        <pre className="overflow-x-auto p-6">
          <code className="font-mono text-[15px] leading-8 text-emerald-400">
            {output.result}
          </code>
        </pre>
      </div>

      {/* Explanation */}

      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <h3 className="text-lg font-semibold text-slate-900">Explanation</h3>

        <p className="mt-3 text-[16px] leading-8 text-slate-700">
          {output.explanation}
        </p>
      </div>
    </section>
  );
};

export default LessonOutput;
