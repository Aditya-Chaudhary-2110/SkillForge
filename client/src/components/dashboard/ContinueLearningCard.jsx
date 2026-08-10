import { ArrowRight, BookOpen, Clock3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useUserProgress } from "../../hooks/useUserProgress";

const ContinueLearningCard = () => {
  const navigate = useNavigate();

  const { data: progress, isLoading } = useUserProgress();

  if (isLoading) {
    return (
      <div className="flex h-[270px] items-center justify-center rounded-[32px] border border-slate-200 bg-white/90 shadow-sm backdrop-blur">
        <p className="text-slate-400">Loading...</p>
      </div>
    );
  }

  const skill = progress?.lastVisitedSkill;
  const module = progress?.lastVisitedModule;
  const topic = progress?.lastVisitedTopic;

  if (!skill || !module || !topic) {
    return (
      <div className="flex h-[270px] items-center justify-center rounded-[32px] border border-slate-200 bg-white/90 shadow-sm backdrop-blur">
        <p className="text-slate-400">
          Start learning to continue your journey.
        </p>
      </div>
    );
  }

  return (
    <div className="group relative overflow-hidden rounded-[32px] border border-white/60 bg-white/90 p-8 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Background Glow */}

      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-indigo-200/40 blur-3xl"></div>

      <div className="absolute -bottom-12 left-1/3 h-44 w-44 rounded-full bg-violet-200/30 blur-3xl"></div>

      <div className="relative z-10">
        {/* Header */}

        <div className="flex items-start justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-600">
              <BookOpen size={14} />
              Continue Learning
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900">
              {skill.name}
            </h2>

            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-slate-500">
              Continue your interview preparation exactly where you stopped last
              time and build consistency every single day.
            </p>
          </div>

          <button
            onClick={() =>
              navigate(`/learn/${skill.slug}/${module.slug}/${topic.slug}`)
            }
            className="flex shrink-0 items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
          >
            Continue
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Bottom */}

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.6fr_340px]">
          {/* Current Lesson */}

          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
              Current Topic
            </p>

            <h3 className="mt-3 text-2xl font-bold text-slate-900">
              {topic.name}
            </h3>

            <p className="mt-2 text-[15px] text-slate-500">{module.name}</p>
          </div>

          {/* Right Info */}

          <div className="flex items-center justify-between rounded-3xl border border-slate-200 bg-white p-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                Estimated Time
              </p>

              <h3 className="mt-2 text-3xl font-bold text-slate-900">
                {topic.estimatedTime} min
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Resume from your last lesson
              </p>
            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50">
              <Clock3 size={28} className="text-indigo-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinueLearningCard;
