import DashboardLayout from "../../layouts/DashboardLayout";

import ContinueLearningCard from "../../components/dashboard/ContinueLearningCard";
import TodayActivityCard from "../../components/dashboard/TodayActivityCard";
import InterviewReadinessCard from "../../components/dashboard/InterviewReadinessCard";
import NotesOverviewCard from "../../components/dashboard/NotesOverviewCard";
import ClockStopwatchCard from "../../components/dashboard/ClockStopwatchCard";

import useAuth from "../../hooks/useAuth";

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      {({ skills }) => (
        <div className="space-y-6">
          {/* ==========================================
              HERO SECTION
          ========================================== */}

          <div className="relative overflow-hidden rounded-[34px] bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 px-10 py-5 shadow-xl">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="absolute bottom-0 left-1/3 h-44 w-44 rounded-full bg-white/10 blur-3xl" />

            <div className="absolute -bottom-16 right-1/4 h-36 w-36 rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10 flex items-center justify-between">
              <div className="max-w-3xl">
                <span className="inline-flex rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-100 backdrop-blur">
                  SkillForge Dashboard
                </span>

                <h1 className="mt-3 text-[32px] font-extrabold tracking-tight text-white">
                  Welcome back, {user?.fullName || "there"} 👋
                </h1>

                <p className="mt-2 max-w-2xl text-[15px] leading-6 text-indigo-100">
                  Continue your interview preparation with confidence and keep
                  building momentum every single day.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur">
                    📚 Learn Daily
                  </span>

                  <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur">
                    🎯 Stay Consistent
                  </span>

                  <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur">
                    🚀 Crack Interviews
                  </span>
                </div>
              </div>

              <div className="hidden h-24 w-24 items-center justify-center rounded-3xl border border-white/20 bg-white/10 backdrop-blur lg:flex">
                <span className="text-4xl">🚀</span>
              </div>
            </div>
          </div>

          {/* ==========================================
              CONTINUE LEARNING
          ========================================== */}

          <ContinueLearningCard />

          {/* ==========================================
              LEARNING OVERVIEW
          ========================================== */}

          <section>
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
                Learning Overview
              </p>

              <h2 className="mt-1 text-2xl font-bold text-slate-900">
                Track Your Interview Preparation
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Monitor your roadmap progress and personal knowledge base.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="h-[470px]">
                <InterviewReadinessCard />
              </div>

              <div className="h-[470px]">
                <NotesOverviewCard />
              </div>
            </div>
          </section>

          {/* ==========================================
              STUDY WORKSPACE
          ========================================== */}

          <section>
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
                Study Workspace
              </p>

              <h2 className="mt-1 text-2xl font-bold text-slate-900">
                Stay Focused While Learning
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Your daily activity and study tools in one place.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <TodayActivityCard />

              <ClockStopwatchCard />
            </div>
          </section>
        </div>
      )}
    </DashboardLayout>
  );
};

export default DashboardPage;
