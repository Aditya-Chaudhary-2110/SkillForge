import { Menu, ClipboardList, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

const TopNavbar = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();

  const { user } = useAuth();

  const getInitials = (name = "") => {
    return name
      .trim()
      .split(" ")
      .map((word) => word[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  const initials = getInitials(user?.fullName);

  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
      {/* ==========================================
          LEFT
      ========================================== */}

      <div className="flex items-center gap-3">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="rounded-lg p-2 transition hover:bg-slate-100"
        >
          <Menu size={20} />
        </button>

        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-3 rounded-xl px-2 py-1 transition hover:bg-slate-100"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-sm font-bold text-white">
            ★
          </div>

          <h1 className="text-xl font-bold tracking-tight text-slate-900">
            SkillForge
          </h1>
        </button>
      </div>

      {/* ==========================================
          RIGHT
      ========================================== */}

      <div className="flex items-center gap-3">
        {/* Resume Analyzer */}

        <button
          onClick={() => navigate("/resume")}
          className="group flex items-center gap-2 rounded-xl border border-indigo-100 bg-gradient-to-r from-indigo-50 to-violet-50 px-4 py-2 text-sm font-semibold text-indigo-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md active:translate-y-0"
        >
          <ClipboardList
            size={17}
            className="transition-transform duration-200 group-hover:scale-110"
          />

          <span>Resume Analyzer</span>

          <ArrowRight
            size={15}
            className="transition-all duration-200 group-hover:translate-x-1"
          />
        </button>

        {/* Avatar */}

        <button
          onClick={() => {
            // Profile page / dropdown in V2
          }}
          title={user?.fullName || "Profile"}
          className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white transition duration-200 hover:scale-105 hover:bg-indigo-700 active:scale-95"
        >
          {initials || "U"}
        </button>
      </div>
    </header>
  );
};

export default TopNavbar;
