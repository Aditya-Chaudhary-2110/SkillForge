import {
  BookOpen,
  NotebookPen,
  BrainCircuit,
  Clock3,
  Activity,
  ArrowUpRight,
} from "lucide-react";

import { useUserProgress } from "../../hooks/useUserProgress";
import { useNotes } from "../../hooks/useNotes";

const TodayActivityCard = () => {
  const { data: progress } = useUserProgress();
  const { data: notes = [] } = useNotes();

  const today = progress?.todayActivity;

  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);

  const todayNotes = notes.filter((note) => {
    return new Date(note.createdAt) >= todayStart;
  });

  const todayAISaves = todayNotes.filter((note) => note.type === "ai");

  const todayManualNotes = todayNotes.filter((note) => note.type === "manual");

  const studyMinutes = today?.studyMinutes ?? 0;

  const stats = [
    {
      title: "Topics",
      value: today?.completedTopics ?? 0,
      icon: BookOpen,
      color: "text-indigo-600",
      bg: "bg-indigo-100",
    },
    {
      title: "Notes",
      value: todayManualNotes.length,
      icon: NotebookPen,
      color: "text-violet-600",
      bg: "bg-violet-100",
    },
    {
      title: "AI Saves",
      value: todayAISaves.length,
      icon: BrainCircuit,
      color: "text-emerald-600",
      bg: "bg-emerald-100",
    },
    {
      title: "Study",
      value: `${Math.floor(studyMinutes / 60)}h ${studyMinutes % 60}m`,
      icon: Clock3,
      color: "text-orange-500",
      bg: "bg-orange-100",
    },
  ];

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Header */}

      <div className="border-b border-indigo-100 bg-gradient-to-r from-indigo-50 via-violet-50 to-white px-5 py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-indigo-600">
              Today's Activity
            </p>

            <h2 className="mt-1 text-lg font-bold text-slate-900">
              Daily Progress
            </h2>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-indigo-100">
            <Activity className="text-indigo-600" size={19} />
          </div>
        </div>
      </div>

      {/* Stats */}

      <div className="grid grid-cols-2 gap-3 bg-gradient-to-b from-indigo-50/70 to-white px-5 py-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group rounded-2xl border border-slate-200 bg-white p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-sm"
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.bg}`}
              >
                <Icon
                  size={17}
                  className={`${item.color} transition-transform duration-300 group-hover:scale-110`}
                />
              </div>

              <h3 className="mt-3 text-[23px] font-bold text-slate-900">
                {item.value}
              </h3>

              <p className="mt-1 text-[11px] font-medium text-slate-500">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}

      <div className="mt-auto border-t border-slate-100 bg-white px-5 py-4">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Recent Activity
          </p>

          <ArrowUpRight
            size={16}
            className="text-indigo-500 transition-transform duration-300 hover:translate-x-0.5 hover:-translate-y-0.5"
          />
        </div>

        <div className="mt-3 rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50 via-white to-violet-50 p-4">
          {today?.latestCompletedTopic ? (
            <div className="flex items-start gap-3">
              <div className="mt-1.5 h-2.5 w-2.5 rounded-full bg-indigo-600 shadow-[0_0_8px_rgba(79,70,229,0.5)]"></div>

              <div>
                <p className="text-[13px] font-semibold text-slate-900">
                  Completed "{today.latestCompletedTopic.topic.name}"
                </p>

                <p className="mt-1 text-[11px] text-slate-500">Today</p>
              </div>
            </div>
          ) : (
            <p className="text-sm text-slate-500">No topics completed today.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodayActivityCard;
