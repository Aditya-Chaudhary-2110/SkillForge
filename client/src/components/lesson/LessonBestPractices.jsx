import { BadgeCheck } from "lucide-react";

const LessonBestPractices = ({ bestPractices = [] }) => {
  if (!bestPractices.length) return null;

  return (
    <section className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8">
      <div className="mb-6 flex items-center gap-3">
        <BadgeCheck className="text-emerald-600" size={24} />

        <h2 className="text-3xl font-bold text-slate-900">Best Practices</h2>
      </div>

      <ul className="space-y-4">
        {bestPractices.map((item, index) => (
          <li
            key={index}
            className="rounded-xl bg-white p-4 text-slate-700 shadow-sm"
          >
            ✔ {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LessonBestPractices;
