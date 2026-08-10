import { ChevronDown, ChevronRight, CheckCircle2, Circle } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const TopicSidebar = ({ roadmap, progress }) => {
  const location = useLocation();

  const [expandedModules, setExpandedModules] = useState({});

  // Automatically expand the module that contains the active topic
  useEffect(() => {
    if (!roadmap) return;

    const newExpanded = {};

    roadmap.modules.forEach((module) => {
      const hasActiveTopic = module.topics.some((topic) =>
        location.pathname.includes(topic.slug),
      );

      if (hasActiveTopic) {
        newExpanded[module._id] = true;
      }
    });

    setExpandedModules((prev) => ({
      ...prev,
      ...newExpanded,
    }));
  }, [location.pathname, roadmap]);

  const toggleModule = (moduleId) => {
    setExpandedModules((prev) => ({
      ...prev,
      [moduleId]: !prev[moduleId],
    }));
  };

  const completedTopics = new Set(
    progress?.completedTopics?.map((item) =>
      typeof item.topic === "string" ? item.topic : item.topic?._id,
    ) || [],
  );

  if (!roadmap) {
    return (
      <div className="flex h-[calc(100vh-5.8rem)] items-center justify-center rounded-[28px] border border-indigo-100 bg-white shadow-sm">
        Loading roadmap...
      </div>
    );
  }

  return (
    <div className="flex h-[calc(100vh-5.8rem)] flex-col overflow-hidden rounded-[28px] border border-indigo-100 bg-white shadow-sm">
      {/* Header */}

      <div className="border-b border-indigo-100 bg-gradient-to-r from-indigo-50 via-violet-50 to-white px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
          Roadmap
        </p>

        <h2 className="mt-1 text-[18px] font-bold tracking-tight text-slate-900">
          {roadmap.skill.name}
        </h2>
      </div>

      {/* Modules */}

      <div
        className="flex-1 overflow-y-auto bg-slate-50/40 px-3 py-3"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style>
          {`
            .topic-scroll::-webkit-scrollbar{
              display:none;
            }
          `}
        </style>

        <div className="topic-scroll space-y-3">
          {roadmap.modules.map((module) => {
            const expanded = expandedModules[module._id];

            return (
              <div
                key={module._id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:border-indigo-200 hover:shadow-md"
              >
                <button
                  onClick={() => toggleModule(module._id)}
                  className="flex w-full items-center justify-between bg-gradient-to-r from-slate-50 to-indigo-50 px-4 py-3 transition hover:from-indigo-50 hover:to-violet-50"
                >
                  <span className="text-sm font-semibold text-slate-800">
                    {module.name}
                  </span>

                  {expanded ? (
                    <ChevronDown
                      size={18}
                      className="text-slate-500 transition-transform"
                    />
                  ) : (
                    <ChevronRight
                      size={18}
                      className="text-slate-500 transition-transform"
                    />
                  )}
                </button>

                {expanded && (
                  <div className="space-y-1 p-2">
                    {module.topics.map((topic) => {
                      const completed = completedTopics.has(topic._id);

                      return (
                        <NavLink
                          key={topic._id}
                          to={`/learn/${roadmap.skill.slug}/${module.slug}/${topic.slug}`}
                          className={({ isActive }) =>
                            `flex items-center rounded-xl px-3 py-2.5 text-sm transition-all duration-200 ${
                              isActive
                                ? "border border-indigo-600 bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-sm"
                                : completed
                                  ? "border border-emerald-100 bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                                  : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-700"
                            }`
                          }
                        >
                          <div className="flex items-center gap-2">
                            {completed ? (
                              <CheckCircle2
                                size={16}
                                className="text-emerald-500"
                              />
                            ) : (
                              <Circle size={15} className="text-slate-300" />
                            )}

                            <span className="font-medium">{topic.name}</span>
                          </div>
                        </NavLink>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopicSidebar;
