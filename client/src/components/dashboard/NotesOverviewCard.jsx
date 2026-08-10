import { NotebookPen, FileText, Clock3, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useNotes } from "../../hooks/useNotes";

const NotesOverviewCard = () => {
  const navigate = useNavigate();

  const { data: notes = [], isLoading } = useNotes();

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">Loading...</div>
    );
  }

  const totalNotes = notes.length;

  const recentNote =
    notes.length > 0
      ? [...notes].sort(
          (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt),
        )[0]
      : null;

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Header */}

      <div className="border-b border-indigo-100 bg-gradient-to-r from-indigo-50 via-violet-50 to-white px-5 py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-indigo-600">
              Notes
            </p>

            <h2 className="mt-1 text-lg font-bold text-slate-900">
              Personal Notes
            </h2>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
            <NotebookPen size={18} className="text-indigo-600" />
          </div>
        </div>
      </div>

      {/* Body */}

      <div className="flex flex-1 flex-col justify-between">
        {/* Total Notes */}

        <div className="bg-indigo-50/60 px-5 py-4">
          <div className="flex items-center justify-between rounded-2xl border border-indigo-100 bg-white p-4 shadow-sm">
            <div>
              <p className="text-xs text-slate-500">Total Notes</p>

              <h3 className="mt-1 text-3xl font-bold text-slate-900">
                {totalNotes}
              </h3>
            </div>

            <div className="rounded-2xl bg-indigo-100 p-3">
              <FileText size={20} className="text-indigo-600" />
            </div>
          </div>
        </div>

        {/* Recent Note */}

        <div className="px-5 pb-4">
          <div className="rounded-2xl border border-indigo-100 bg-gradient-to-r from-slate-50 to-indigo-50 p-4 transition-all duration-300 hover:border-indigo-200 hover:shadow-sm">
            <div className="flex items-center gap-2">
              <Clock3 size={15} className="text-indigo-500" />

              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Recently Edited
              </p>
            </div>

            <h3 className="mt-3 line-clamp-2 text-base font-semibold text-slate-900">
              {recentNote ? recentNote.title : "No notes yet"}
            </h3>

            <p className="mt-2 text-[11px] text-slate-500">
              {recentNote
                ? new Date(recentNote.updatedAt).toLocaleDateString()
                : "Create your first note to begin."}
            </p>
          </div>
        </div>

        {/* Footer */}

        <div className="border-t border-slate-100 px-5 py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                Workspace
              </p>

              <p className="mt-1 text-sm text-slate-600">
                Your personal knowledge base
              </p>
            </div>

            <button
              onClick={() => navigate("/notes")}
              className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:scale-105 hover:bg-indigo-700 active:scale-95"
            >
              {totalNotes} Notes
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesOverviewCard;
