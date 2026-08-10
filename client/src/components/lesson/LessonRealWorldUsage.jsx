import { Globe2 } from "lucide-react";

const LessonRealWorldUsage = ({ realWorldUsage = [] }) => {
  if (!realWorldUsage.length) return null;

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-100">
          <Globe2 className="text-cyan-600" size={22} />
        </div>

        <h2 className="text-3xl font-bold text-slate-900">Real World Usage</h2>
      </div>

      <ul className="space-y-4">
        {realWorldUsage.map((item, index) => (
          <li
            key={index}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LessonRealWorldUsage;
