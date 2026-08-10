import { useEffect, useState } from "react";
import {
  Clock3,
  Timer,
  Hourglass,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  RotateCcw,
} from "lucide-react";

const tools = ["clock", "stopwatch", "timer"];

const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0",
  )}:${String(remainingSeconds).padStart(2, "0")}`;
};

const ClockStopwatchCard = () => {
  const [activeTool, setActiveTool] = useState("clock");

  // =========================================================
  // CLOCK
  // =========================================================

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // =========================================================
  // STOPWATCH
  // =========================================================

  const [stopwatchRunning, setStopwatchRunning] = useState(false);
  const [stopwatchSeconds, setStopwatchSeconds] = useState(0);
  const [stopwatchStartedAt, setStopwatchStartedAt] = useState(null);

  useEffect(() => {
    if (!stopwatchRunning || !stopwatchStartedAt) return;

    const updateStopwatch = () => {
      const elapsed = Math.floor((Date.now() - stopwatchStartedAt) / 1000);

      setStopwatchSeconds(elapsed);
    };

    updateStopwatch();

    const interval = setInterval(updateStopwatch, 250);

    return () => clearInterval(interval);
  }, [stopwatchRunning, stopwatchStartedAt]);

  const startStopwatch = () => {
    setStopwatchStartedAt(Date.now() - stopwatchSeconds * 1000);

    setStopwatchRunning(true);
  };

  const pauseStopwatch = () => {
    setStopwatchRunning(false);
  };

  const resetStopwatch = () => {
    setStopwatchRunning(false);
    setStopwatchStartedAt(null);
    setStopwatchSeconds(0);
  };

  // =========================================================
  // COUNTDOWN TIMER
  // =========================================================

  const [timerSeconds, setTimerSeconds] = useState(25 * 60);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    if (!timerRunning) return;

    const interval = setInterval(() => {
      setTimerSeconds((previous) => {
        if (previous <= 1) {
          setTimerRunning(false);
          return 0;
        }

        return previous - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timerRunning]);

  const toggleTimer = () => {
    if (timerSeconds === 0) {
      setTimerSeconds(25 * 60);
      setTimerRunning(true);
      return;
    }

    setTimerRunning((previous) => !previous);
  };

  const resetTimer = () => {
    setTimerRunning(false);
    setTimerSeconds(25 * 60);
  };

  const addTimerMinute = (minutes) => {
    if (timerRunning) return;

    setTimerSeconds((previous) => previous + minutes * 60);
  };

  // =========================================================
  // NAVIGATION
  // =========================================================

  const currentIndex = tools.indexOf(activeTool);

  const showPrevious = () => {
    const previousIndex = (currentIndex - 1 + tools.length) % tools.length;

    setActiveTool(tools[previousIndex]);
  };

  const showNext = () => {
    const nextIndex = (currentIndex + 1) % tools.length;

    setActiveTool(tools[nextIndex]);
  };

  // =========================================================
  // TOOL INFO
  // =========================================================

  const toolInfo = {
    clock: {
      label: "Current Time",
      title: "Digital Clock",
      icon: Clock3,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },

    stopwatch: {
      label: "Stopwatch",
      title: "Track Time",
      icon: Timer,
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
    },

    timer: {
      label: "Focus Timer",
      title: "Countdown",
      icon: Hourglass,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
  };

  const activeInfo = toolInfo[activeTool];
  const ActiveIcon = activeInfo.icon;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 via-white to-indigo-50/40 px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
          Study Utilities
        </p>

        <div className="mt-1 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">
            Clock & Stopwatch
          </h2>

          <div className="rounded-full bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400 shadow-sm ring-1 ring-slate-100">
            {currentIndex + 1} / {tools.length}
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative flex flex-1 items-center justify-center overflow-hidden px-10 py-7">
        {/* =================================================
            LEFT ARROW
        ================================================= */}

        <button
          type="button"
          onClick={showPrevious}
          aria-label="Previous utility"
          className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-slate-200 bg-white/95 p-2 text-slate-500 opacity-0 shadow-md transition-all duration-200 group-hover:opacity-100 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
        >
          <ChevronLeft size={19} />
        </button>

        {/* =================================================
            RIGHT ARROW
        ================================================= */}

        <button
          type="button"
          onClick={showNext}
          aria-label="Next utility"
          className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-slate-200 bg-white/95 p-2 text-slate-500 opacity-0 shadow-md transition-all duration-200 group-hover:opacity-100 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
        >
          <ChevronRight size={19} />
        </button>

        {/* =================================================
            TOOL CONTENT
        ================================================= */}

        <div className="w-full text-center">
          {/* Icon */}

          <div
            className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${activeInfo.iconBg} shadow-sm`}
          >
            <ActiveIcon size={24} className={activeInfo.iconColor} />
          </div>

          {/* Label */}

          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            {activeInfo.label}
          </p>

          {/* =================================================
              CLOCK
          ================================================= */}

          {activeTool === "clock" && (
            <>
              <p className="mt-3 text-[38px] font-bold tracking-tight text-slate-900">
                {currentTime.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                {currentTime.toLocaleDateString([], {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-xs font-medium text-indigo-600">
                <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-500" />
                Live Clock
              </div>
            </>
          )}

          {/* =================================================
              STOPWATCH
          ================================================= */}

          {activeTool === "stopwatch" && (
            <>
              <p className="mt-3 font-mono text-[38px] font-bold tracking-wider text-slate-900">
                {formatTime(stopwatchSeconds)}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                {stopwatchRunning
                  ? "Stopwatch is running"
                  : stopwatchSeconds > 0
                    ? "Stopwatch paused"
                    : "Ready to start"}
              </p>

              <div className="mt-5 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={stopwatchRunning ? pauseStopwatch : startStopwatch}
                  className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 hover:shadow-md"
                >
                  {stopwatchRunning ? (
                    <>
                      <Pause size={15} />
                      Pause
                    </>
                  ) : (
                    <>
                      <Play size={15} />
                      Start
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={resetStopwatch}
                  className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2.5 text-slate-600 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                  title="Reset stopwatch"
                >
                  <RotateCcw size={17} />
                </button>
              </div>
            </>
          )}

          {/* =================================================
              COUNTDOWN TIMER
          ================================================= */}

          {activeTool === "timer" && (
            <>
              <p className="mt-3 font-mono text-[38px] font-bold tracking-wider text-slate-900">
                {formatTime(timerSeconds)}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                {timerRunning
                  ? "Focus time is running"
                  : timerSeconds === 0
                    ? "Time's up"
                    : "Set your focus time"}
              </p>

              <div className="mt-4 flex items-center justify-center gap-2">
                {[5, 10, 25].map((minutes) => (
                  <button
                    key={minutes}
                    type="button"
                    onClick={() => addTimerMinute(minutes)}
                    disabled={timerRunning}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    +{minutes}m
                  </button>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={toggleTimer}
                  className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 hover:shadow-md"
                >
                  {timerRunning ? (
                    <>
                      <Pause size={15} />
                      Pause
                    </>
                  ) : (
                    <>
                      <Play size={15} />
                      Start
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={resetTimer}
                  className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2.5 text-slate-600 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600"
                  title="Reset timer"
                >
                  <RotateCcw size={17} />
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* =====================================================
          INDICATORS
      ===================================================== */}

      <div className="flex items-center justify-center gap-1.5 border-t border-slate-100 bg-slate-50/50 py-3">
        {tools.map((tool) => (
          <button
            key={tool}
            type="button"
            onClick={() => setActiveTool(tool)}
            aria-label={`Show ${tool}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeTool === tool
                ? "w-5 bg-indigo-600"
                : "w-1.5 bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ClockStopwatchCard;
