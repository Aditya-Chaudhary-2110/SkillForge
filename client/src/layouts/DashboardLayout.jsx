import { useState } from "react";

import Sidebar from "../components/dashboard/Sidebar";
import TopNavbar from "../components/dashboard/TopNavbar";

import { useSkills } from "../hooks/useSkills";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { data: skills = [], isLoading, isError } = useSkills();

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-slate-100">
      {/* ==========================================
          TOP NAVBAR
      ========================================== */}

      <div className="shrink-0">
        <TopNavbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>

      {/* ==========================================
          DASHBOARD BODY
      ========================================== */}

      <div className="flex min-h-0 flex-1">
        {/* ==========================================
            SIDEBAR
        ========================================== */}

        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          skills={skills}
          loading={isLoading}
        />

        {/* ==========================================
            MAIN CONTENT
        ========================================== */}

        <main className="min-h-0 flex-1 overflow-y-auto bg-slate-100">
          <div className="mx-auto w-full max-w-[1700px] px-6 pt-2 pb-6">
            {typeof children === "function"
              ? children({
                  skills,
                  isLoading,
                  isError,
                })
              : children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
