import { useState } from "react";
import { BookOpen, Settings, LogOut, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { getRoadmap } from "../../api/roadmap.api";
import useAuth from "../../hooks/useAuth";

const Sidebar = ({ sidebarOpen, setSidebarOpen, skills = [] }) => {
  const navigate = useNavigate();

  const { logout } = useAuth();

  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleSkillClick = async (skillSlug) => {
    try {
      const roadmap = await getRoadmap(skillSlug);

      if (!roadmap?.modules?.length) return;

      const firstModule = roadmap.modules[0];

      if (!firstModule?.topics?.length) return;

      const firstTopic = firstModule.topics[0];

      navigate(`/learn/${skillSlug}/${firstModule.slug}/${firstTopic.slug}`);

      setSidebarOpen(false);
    } catch (error) {
      console.error("Failed to load roadmap", error);
    }
  };

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);

      await logout();

      toast.success("Logged out successfully");

      navigate("/login", {
        replace: true,
      });
    } catch (error) {
      console.error(error);

      toast.error("Failed to logout");
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <aside
      className={`
        absolute
        left-0
        top-0
        z-30
        flex
        h-full
        w-[250px]
        flex-col
        border-r
        border-slate-200
        bg-white
        transition-transform
        duration-300
        ease-in-out

        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      {/* ==========================================
          Header
      ========================================== */}

      <div className="border-b border-slate-200 p-4">
        <div className="flex items-center justify-between rounded-xl bg-indigo-50 px-4 py-3">
          <div className="flex items-center gap-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white">
              <BookOpen size={18} />
            </div>

            <h2 className="text-[15px] font-semibold text-slate-800">
              Knowledge Base
            </h2>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-lg transition hover:bg-white hover:text-red-500"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* ==========================================
          Skills
      ========================================== */}

      <div className="flex-1 overflow-y-auto px-3 py-4">
        <div className="space-y-1.5">
          {skills.length ? (
            skills.map((skill) => (
              <button
                key={skill._id}
                onClick={() => handleSkillClick(skill.slug)}
                className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-slate-700 transition hover:bg-slate-100"
              >
                <span className="text-[14px] font-medium">{skill.name}</span>

                <span className="text-[12px] text-slate-400">
                  {skill.totalTopics ?? 0} topics
                </span>
              </button>
            ))
          ) : (
            <p className="px-3 py-2 text-sm text-slate-400">No skills found.</p>
          )}
        </div>
      </div>

      {/* ==========================================
          Footer
      ========================================== */}

      <div className="mt-auto border-t border-slate-200 p-3">
        <button
          onClick={() => {
            navigate("/settings");
            setSidebarOpen(false);
          }}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] font-medium text-slate-700 transition hover:bg-slate-100"
        >
          <Settings size={18} />
          Settings
        </button>

        <button
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="mt-2 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] font-medium text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <LogOut size={18} />

          {isLoggingOut ? "Logging out..." : "Log out"}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
