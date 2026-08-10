import { Flag } from "lucide-react";

const LessonKeyTakeaways = ({ keyTakeaways = [] }) => {
  if (!keyTakeaways.length) return null;

  return (
    <section className="rounded-3xl border border-indigo-200 bg-indigo-50 p-8">
      <div className="mb-6 flex items-center gap-3">
        <Flag className="text-indigo-600" size={24} />

        <h2 className="text-3xl font-bold text-slate-900">Key Takeaways</h2>
      </div>

      <ul className="space-y-4">
        {keyTakeaways.map((item, index) => (
          <li
            key={index}
            className="rounded-xl bg-white p-4 font-medium text-slate-800 shadow-sm"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LessonKeyTakeaways;
