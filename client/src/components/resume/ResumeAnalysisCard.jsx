import { useRef } from "react";
import { Upload, RotateCcw, Trash2 } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { useResume } from "../../hooks/useResume";

import {
  uploadUserResume,
  reanalyzeUserResume,
  deleteUserResume,
} from "../../services/resume.service";

import ATSScoreCard from "./ATSScoreCard";
import SummaryCard from "./SummaryCard";
import StrengthsCard from "./StrengthsCard";
import MissingSkillsCard from "./MissingSkillsCard";
import WeaknessesCard from "./WeaknessesCard";
import SuggestionsCard from "./SuggestionsCard";

const ResumeAnalysisCard = () => {
  const { data: resume } = useResume();

  const analysis = resume?.analysis;

  const fileInputRef = useRef(null);

  const queryClient = useQueryClient();

  /* ==========================================
     Upload New Resume
  ========================================== */

  const { mutate: uploadResume, isPending: isUploading } = useMutation({
    mutationFn: uploadUserResume,

    onSuccess: (newResume) => {
      queryClient.setQueryData(["resume"], newResume);

      toast.success("New resume uploaded successfully");
    },

    onError: (error) => {
      toast.error(error.response?.data?.message || "Upload failed");
    },
  });

  /* ==========================================
     Reanalyze
  ========================================== */

  const { mutate: reanalyzeResume, isPending: isReanalyzing } = useMutation({
    mutationFn: reanalyzeUserResume,

    onSuccess: (newAnalysis) => {
      queryClient.setQueryData(["resume"], (old) => ({
        ...old,
        analysis: newAnalysis,
      }));

      toast.success("Resume reanalyzed successfully");
    },

    onError: (error) => {
      toast.error(error.response?.data?.message || "Reanalysis failed");
    },
  });

  /* ==========================================
     Delete
  ========================================== */

  const { mutate: deleteResume, isPending: isDeleting } = useMutation({
    mutationFn: deleteUserResume,

    onSuccess: () => {
      queryClient.setQueryData(["resume"], null);

      toast.success("Resume deleted successfully");
    },

    onError: (error) => {
      toast.error(error.response?.data?.message || "Delete failed");
    },
  });

  /* ==========================================
     File Change
  ========================================== */

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }

    uploadResume(file);

    e.target.value = "";
  };

  return (
    <div className="space-y-5">
      {/* ==========================================
          ATS SCORE
      ========================================== */}

      <ATSScoreCard analysis={analysis} />

      {/* ==========================================
          PROFESSIONAL SUMMARY
      ========================================== */}

      <SummaryCard analysis={analysis} />

      {/* ==========================================
          STRENGTHS + MISSING SKILLS
      ========================================== */}

      <div className="grid gap-5 lg:grid-cols-2">
        <StrengthsCard analysis={analysis} />

        <MissingSkillsCard analysis={analysis} />
      </div>

      {/* ==========================================
          AREAS FOR IMPROVEMENT + RECOMMENDATIONS
      ========================================== */}

      <div className="grid gap-5 lg:grid-cols-2">
        <WeaknessesCard analysis={analysis} />

        <SuggestionsCard analysis={analysis} />
      </div>

      {/* ==========================================
          FOOTER ACTIONS
      ========================================== */}

      <div className="flex justify-end gap-3 border-t border-slate-200 pt-6">
        {/* Upload New Resume */}

        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
          className="flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Upload size={18} />

          {isUploading ? "Uploading..." : "Upload New Resume"}
        </button>

        {/* Reanalyze */}

        <button
          type="button"
          onClick={() => reanalyzeResume()}
          disabled={isReanalyzing}
          className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <RotateCcw size={18} />

          {isReanalyzing ? "Reanalyzing..." : "Reanalyze"}
        </button>

        {/* Delete */}

        <button
          type="button"
          onClick={() => deleteResume()}
          disabled={isDeleting}
          className="flex items-center gap-2 rounded-xl border border-red-300 px-5 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Trash2 size={18} />

          {isDeleting ? "Deleting..." : "Delete"}
        </button>
      </div>

      {/* ==========================================
          HIDDEN FILE INPUT
      ========================================== */}

      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default ResumeAnalysisCard;
