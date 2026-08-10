import { Clock3, Trophy, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProgressPanel = ({ lesson, roadmap }) => {
  const navigate = useNavigate();

  const content = lesson?.content || {};
  const topic = lesson?.topic || {};

  const estimatedTime =
    topic.estimatedTime || content.readTime || content.estimatedTime || 10;

  const difficulty = topic.difficulty || content.difficulty || "Beginner";

  // Find current module
  const currentModule = roadmap?.modules?.find((module) =>
    module.topics.some((topicItem) => topicItem._id === lesson?.topic?._id),
  );

  // Current topic index
  const currentTopicIndex =
    currentModule?.topics.findIndex(
      (topicItem) => topicItem._id === lesson?.topic?._id,
    ) ?? -1;

  // Next topic inside same module
  const nextTopic =
    currentModule &&
    currentTopicIndex >= 0 &&
    currentTopicIndex < currentModule.topics.length - 1
      ? currentModule.topics[currentTopicIndex + 1]
      : null;

  const handleContinue = () => {
    if (!nextTopic) return;

    navigate(
      `/learn/${roadmap.skill.slug}/${currentModule.slug}/${nextTopic.slug}`,
    );
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      {/* Heading */}

      <h2 className="text-lg font-bold text-slate-900">Lesson Details</h2>

      <p className="mt-1 text-xs text-slate-500">
        Track your learning journey and stay on course.
      </p>

      {/* Stats */}

      <div className="mt-7 space-y-3">
        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 p-3.5">
          <Clock3 className="text-indigo-600" size={20} />

          <div>
            <p className="text-[11px] uppercase text-slate-400">
              Estimated Time
            </p>

            <p className="text-sm font-semibold text-slate-800">
              {estimatedTime} Minutes
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 p-3.5">
          <Trophy className="text-amber-500" size={20} />

          <div>
            <p className="text-[11px] uppercase text-slate-400">Difficulty</p>

            <p className="text-sm font-semibold capitalize text-slate-800">
              {difficulty}
            </p>
          </div>
        </div>
      </div>

      {/* Next Lesson */}

      <div className="mt-7 rounded-2xl bg-slate-50 p-4">
        <p className="text-[11px] uppercase text-slate-400">Next Lesson</p>

        {nextTopic ? (
          <>
            <h4 className="mt-1.5 text-sm font-semibold text-slate-800">
              {nextTopic.name}
            </h4>

            <button
              onClick={handleContinue}
              className="mt-3 flex items-center gap-2 text-xs font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Continue
              <ArrowRight size={15} />
            </button>
          </>
        ) : (
          <h4 className="mt-3 text-sm font-semibold text-emerald-600">
            🎉 Course Completed
          </h4>
        )}
      </div>
    </div>
  );
};

export default ProgressPanel;
