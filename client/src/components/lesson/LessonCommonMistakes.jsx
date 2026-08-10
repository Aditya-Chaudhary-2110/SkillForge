import { TriangleAlert } from "lucide-react";

const LessonCommonMistakes = ({ commonMistakes = [] }) => {
  if (!commonMistakes.length) return null;

  return (
    <section className="rounded-3xl border border-red-200 bg-red-50 p-8">
      <div className="mb-6 flex items-center gap-3">
        <TriangleAlert className="text-red-600" size={24} />

        <h2 className="text-3xl font-bold text-slate-900">Common Mistakes</h2>
      </div>

      <div className="space-y-5">
        {commonMistakes.map((mistake, index) => (
          <div
            key={index}
            className="rounded-2xl border border-red-200 bg-white p-5"
          >
            <h3 className="font-semibold text-red-600">{mistake.title}</h3>

            <p className="mt-2 leading-8 text-slate-700">
              {mistake.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LessonCommonMistakes;
