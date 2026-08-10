import { Code2 } from "lucide-react";

const LessonSyntax = ({ syntax }) => {
  if (!syntax?.code) return null;

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900">
          <Code2 className="text-white" size={22} />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900">Syntax</h2>

          <p className="text-sm text-slate-500">Official Java syntax</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
        {/* Top Bar */}

        <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3">
          <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300">
            {syntax.language}
          </span>

          <button className="text-sm text-slate-400 transition hover:text-white">
            Copy
          </button>
        </div>

        {/* Code */}

        <pre className="overflow-x-auto p-6">
          <code className="font-mono text-[15px] leading-8 text-slate-100">
            {syntax.code}
          </code>
        </pre>
      </div>
    </section>
  );
};

export default LessonSyntax;
