import { Clock3, CircleDot } from "lucide-react";

const LessonHeader = ({ lesson }) => {
  return (
    <section className="border-b border-slate-200 px-8 pb-6 pt-8">
      {/* Top Row */}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <span className="rounded-full bg-indigo-50 px-3 py-1 font-medium text-indigo-600">
            {lesson.skill?.name || "Java"}
          </span>

          <div className="flex items-center gap-1">
            <Clock3 size={14} />
            <span>10 min read</span>
          </div>

          <div className="flex items-center gap-1">
            <CircleDot size={14} />
            <span>Beginner</span>
          </div>
        </div>

        <button
          className="
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-slate-200
            px-4
            py-2
            text-sm
            font-medium
            transition
            hover:bg-slate-100
          "
        ></button>
      </div>

      {/* Title */}

      <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900">
        {lesson.title}
      </h1>

      {/* Subtitle */}

      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-500">
        Learn the concept from fundamentals, understand its internal working,
        master real-world usage, and prepare for technical interviews.
      </p>
    </section>
  );
};

export default LessonHeader;
