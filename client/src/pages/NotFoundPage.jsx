import { ArrowLeft, SearchX } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100">
          <SearchX size={40} className="text-indigo-600" />
        </div>

        <h1 className="text-6xl font-extrabold tracking-tight text-slate-900">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold text-slate-800">
          Page Not Found
        </h2>

        <p className="mt-3 text-slate-500">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <button
          onClick={() => navigate("/dashboard")}
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
