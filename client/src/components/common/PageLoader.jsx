const PageLoader = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center">
        {/* Logo */}

        <div className="flex h-16 w-16 animate-pulse items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-2xl font-bold text-white shadow-lg">
          ★
        </div>

        {/* Title */}

        <h2 className="mt-5 text-2xl font-bold text-slate-900">SkillForge</h2>

        <p className="mt-2 text-sm text-slate-500">
          Preparing your workspace...
        </p>

        {/* Spinner */}

        <div className="mt-6 h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600"></div>
      </div>
    </div>
  );
};

export default PageLoader;
