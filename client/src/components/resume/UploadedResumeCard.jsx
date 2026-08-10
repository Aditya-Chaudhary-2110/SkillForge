import { FileText, Sparkles, Trash2 } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import {
  analyzeUserResume,
  deleteUserResume,
} from "../../services/resume.service";

const formatFileSize = (bytes) => {
  if (!bytes) return "0 KB";

  const kb = bytes / 1024;

  if (kb < 1024) {
    return `${kb.toFixed(1)} KB`;
  }

  return `${(kb / 1024).toFixed(2)} MB`;
};

const UploadedResumeCard = ({ resume }) => {
  const queryClient = useQueryClient();

  /* ==========================================================
                        Analyze Resume
  ========================================================== */

  const { mutate: analyzeResume, isPending: isAnalyzing } = useMutation({
    mutationFn: analyzeUserResume,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["resume"],
      });

      toast.success("Resume analyzed successfully");
    },

    onError: (error) => {
      toast.error(error.response?.data?.message || "Failed to analyze resume");
    },
  });

  /* ==========================================================
                        Delete Resume
  ========================================================== */

  const { mutate: removeResume, isPending: isDeleting } = useMutation({
    mutationFn: deleteUserResume,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["resume"],
      });

      toast.success("Resume deleted successfully");
    },

    onError: (error) => {
      toast.error(error.response?.data?.message || "Failed to delete resume");
    },
  });

  return (
    <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold text-slate-900">Resume Checker</h1>

        <p className="mt-2 text-sm text-slate-500">
          Your resume has been uploaded successfully.
        </p>
      </div>

      {/* Resume Card */}

      <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6">
        <div className="flex items-start gap-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
            <FileText size={30} />
          </div>

          <div className="flex-1">
            <h2 className="text-lg font-semibold text-slate-900">
              {resume.originalName}
            </h2>

            <div className="mt-3 flex flex-wrap gap-6 text-sm text-slate-500">
              <span>{formatFileSize(resume.fileSize)}</span>

              <span>{resume.fileType}</span>

              <span>
                {new Date(
                  resume.createdAt || resume.uploadedAt,
                ).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}

      <div className="mt-auto flex gap-4">
        <button
          onClick={() => analyzeResume()}
          disabled={isAnalyzing}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Sparkles size={18} />

          {isAnalyzing ? "Analyzing..." : "Analyze Resume"}
        </button>

        <button
          onClick={() => removeResume()}
          disabled={isDeleting}
          className="flex items-center justify-center rounded-xl border border-red-200 px-5 text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default UploadedResumeCard;
