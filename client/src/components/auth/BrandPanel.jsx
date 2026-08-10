import {
  BookOpen,
  BrainCircuit,
  BarChart3,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    title: "Structured Learning",
    subtitle: "Curated paths for every role",
    icon: BookOpen,
  },
  {
    title: "AI Interview Coach",
    subtitle: "Real-time feedback & hints",
    icon: BrainCircuit,
  },
  {
    title: "Progress Analytics",
    subtitle: "Track scores across sessions",
    icon: BarChart3,
  },
];

const BrandPanel = () => {
  return (
    <div className="relative hidden h-screen overflow-hidden lg:flex border-r border-white/10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#171B35] to-[#202D63]" />

      {/* Glow */}
      <div className="absolute -top-28 left-10 h-[420px] w-[420px] rounded-full bg-indigo-500/25 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-cyan-500/20 blur-[140px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative flex w-full flex-col px-14 pt-10 pb-8">
        {/* Logo */}

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg">
            <Sparkles size={18} className="text-white" />
          </div>

          <div>
            <h1 className="text-[16px] font-semibold tracking-wide text-white">
              SkillForge
            </h1>

            <p className="text-xs text-slate-400">AI Interview Platform</p>
          </div>
        </div>

        {/* Hero */}

        <div className="mt-12">
          <h2 className="text-[46px] font-extrabold leading-[1.08] tracking-[-1px] text-white">
            Ace Interviews.
            <br />
            <span className="bg-gradient-to-r from-indigo-300 via-cyan-300 to-white bg-clip-text text-transparent">
              Track Progress.
            </span>
            <br />
            Build Confidence.
          </h2>

          <p className="mt-6 max-w-[420px] text-[16px] leading-8 text-slate-300">
            AI-powered learning paths, interview preparation, progress tracking
            and personalized guidance—all in one place.
          </p>
        </div>

        {/* Bottom Cards */}

        <div className="mt-auto space-y-4">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group flex h-[72px] items-center rounded-2xl border border-white/10 bg-white/5 px-5 backdrop-blur-xl transition-all duration-300 hover:border-indigo-400/40 hover:bg-white/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20">
                  <Icon size={20} className="text-indigo-300" />
                </div>

                <div className="ml-4">
                  <h3 className="text-[15px] font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="text-[13px] text-slate-400">{item.subtitle}</p>
                </div>

                <ArrowRight
                  size={18}
                  className="ml-auto text-slate-500 transition group-hover:translate-x-1 group-hover:text-white"
                />
              </div>
            );
          })}

          <p className="pt-2 text-xs text-slate-500">Version 1.0</p>
        </div>
      </div>
    </div>
  );
};

export default BrandPanel;
