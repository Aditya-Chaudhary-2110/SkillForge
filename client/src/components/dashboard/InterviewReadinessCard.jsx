import {
  TrendingUp,
  Target,
  CheckCircle2,
  Trophy,
  BookOpen,
} from "lucide-react";

import useDashboard from "../../hooks/useDashboard";

const InterviewReadinessCard = () => {
  const { data, isLoading } = useDashboard();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const overallProgress = data?.overallProgress?.percentage || 0;
  const startedSkills = data?.skillProgress || [];

  const getStatus = () => {
    if (overallProgress >= 80) {
      return {
        label: "Interview Ready",
        color: "text-emerald-700",
        bg: "bg-emerald-100",
      };
    }

    if (overallProgress >= 50) {
      return {
        label: "Making Progress",
        color: "text-amber-700",
        bg: "bg-amber-100",
      };
    }

    return {
      label: "Just Started",
      color: "text-indigo-700",
      bg: "bg-indigo-100",
    };
  };

  const status = getStatus();

  return (
    <div
      className="
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* ==========================================
          HEADER
      ========================================== */}

      <div className="shrink-0 border-b border-indigo-100 bg-gradient-to-r from-indigo-50 via-violet-50 to-white px-5 py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-indigo-600">
              Interview Readiness
            </p>

            <h2 className="mt-1 text-lg font-bold text-slate-900">
              Roadmap Progress
            </h2>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
            <Target className="text-indigo-600" size={18} />
          </div>
        </div>
      </div>

      {/* ==========================================
          OVERALL PROGRESS
      ========================================== */}

      <div className="shrink-0 bg-indigo-50/60 px-5 py-5">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-slate-500">Current Readiness</p>

            <h3 className="mt-1 text-3xl font-bold text-slate-900">
              {overallProgress}%
            </h3>
          </div>

          <span
            className={`rounded-full px-3 py-1 text-[11px] font-semibold ${status.bg} ${status.color}`}
          >
            {status.label}
          </span>
        </div>

        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white">
          <div
            className="h-full rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-500 transition-all duration-700"
            style={{
              width: `${overallProgress}%`,
            }}
          />
        </div>
      </div>

      {/* ==========================================
          SUBJECT PROGRESS HEADER
      ========================================== */}

      <div className="shrink-0 border-t border-slate-100 px-5 pt-5">
        <div className="flex items-center gap-2">
          <BookOpen size={15} className="text-indigo-600" />

          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
            Subject Progress
          </h3>
        </div>
      </div>

      {/* ==========================================
          SUBJECT PROGRESS SCROLL AREA
      ========================================== */}

      <div className="min-h-0 flex-1 px-5 pb-5 pt-4">
        {startedSkills.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <div className="rounded-xl bg-indigo-100 p-3">
              <TrendingUp size={24} className="text-indigo-500" />
            </div>

            <h3 className="mt-4 text-base font-semibold text-slate-800">
              No Active Preparation
            </h3>

            <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
              Start learning any roadmap to see your interview readiness.
            </p>
          </div>
        ) : (
          <div
            className="
              h-full
              space-y-4
              overflow-y-auto
              pr-2
              scrollbar-thin
              scrollbar-track-transparent
              scrollbar-thumb-slate-300
              hover:scrollbar-thumb-slate-400
            "
          >
            {startedSkills.map((skill) => (
              <div
                key={skill._id}
                className="
                  rounded-2xl
                  border
                  border-indigo-100
                  bg-gradient-to-r
                  from-slate-50
                  to-indigo-50
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-indigo-200
                  hover:shadow-md
                "
              >
                {/* Skill Header */}

                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {skill.completed ? (
                      <Trophy size={16} className="text-emerald-500" />
                    ) : (
                      <CheckCircle2 size={16} className="text-indigo-500" />
                    )}

                    <span className="text-sm font-semibold text-slate-800">
                      {skill.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {skill.isCurrent && !skill.completed && (
                      <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-indigo-700">
                        Current
                      </span>
                    )}

                    {skill.completed ? (
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                        Completed
                      </span>
                    ) : (
                      <span className="text-xs font-bold text-indigo-600">
                        {skill.progress}%
                      </span>
                    )}
                  </div>
                </div>

                {/* Progress Bar */}

                <div className="h-1.5 overflow-hidden rounded-full bg-white">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      skill.completed
                        ? "bg-gradient-to-r from-emerald-500 to-green-600"
                        : "bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-500"
                    }`}
                    style={{
                      width: `${skill.progress}%`,
                    }}
                  />
                </div>

                {/* Topic Count */}

                <div className="mt-2 flex justify-between text-[11px] text-slate-500">
                  <span>
                    {skill.completedTopics} / {skill.totalTopics} Topics
                  </span>

                  {!skill.completed && (
                    <span>{skill.remainingTopics} Left</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InterviewReadinessCard;
