import { BriefcaseBusiness } from "lucide-react";

const LessonInterviewTips = ({ interviewTips = [] }) => {
  if (!interviewTips.length) return null;

  return (
    <section className="rounded-3xl border border-violet-200 bg-violet-50 p-8">
      <div className="mb-6 flex items-center gap-3">
        <BriefcaseBusiness className="text-violet-600" size={24} />

        <h2 className="text-3xl font-bold text-slate-900">Interview Tips</h2>
      </div>

      <ul className="space-y-4">
        {interviewTips.map((item, index) => (
          <li
            key={index}
            className="rounded-xl border border-violet-200 bg-white p-4 text-slate-700"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LessonInterviewTips;
