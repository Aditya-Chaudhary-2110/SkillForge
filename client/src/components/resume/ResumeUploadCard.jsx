import { UploadCloud } from "lucide-react";
import { useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { uploadUserResume } from "../../services/resume.service";
import { useResume } from "../../hooks/useResume";

import ResumeAnalysisCard from "./ResumeAnalysisCard";
import UploadedResumeCard from "./UploadedResumeCard";

const ResumeUploadCard = () => {
  const fileInputRef = useRef(null);

  const queryClient = useQueryClient();

  const { data: resume, isLoading } = useResume();

  const { mutate: uploadResume, isPending } = useMutation({
    mutationFn: uploadUserResume,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["resume"],
      });

      toast.success("Resume uploaded successfully");
    },

    onError: (error) => {
      toast.error(error.response?.data?.message || "Upload failed");
    },
  });

  const handleFile = (file) => {
    if (!file) return;

    uploadResume(file);
  };

  if (isLoading) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <p className="text-sm text-slate-500">Loading...</p>
      </div>
    );
  }

  if (resume?.analysis) {
    return <ResumeAnalysisCard />;
  }

  if (resume) {
    return <UploadedResumeCard resume={resume} />;
  }

  return (
    <div className="flex h-full flex-col">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold text-slate-900">Resume Checker</h1>

        <p className="mt-2 text-sm text-slate-500">
          Upload your resume and receive AI-powered ATS feedback and
          personalized improvement suggestions.
        </p>
      </div>

      {/* Hidden Input */}

      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf"
        className="hidden"
        onChange={(e) => {
          handleFile(e.target.files[0]);
          e.target.value = "";
        }}
      />

      {/* Upload Area */}

      <div
        onClick={() => {
          if (!isPending) {
            fileInputRef.current?.click();
          }
        }}
        className="mt-8 flex flex-1 cursor-pointer items-center justify-center rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 transition hover:border-indigo-500 hover:bg-indigo-50/30"
      >
        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
            <UploadCloud size={38} />
          </div>

          <h2 className="mt-6 text-xl font-semibold text-slate-900">
            {isPending ? "Uploading..." : "Drag & Drop Resume"}
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            or click to browse your PDF
          </p>

          <button
            type="button"
            disabled={isPending}
            className="mt-8 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isPending ? "Uploading..." : "Choose PDF"}
          </button>

          <p className="mt-4 text-xs text-slate-400">
            Supports PDF • Max 10 MB
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeUploadCard;
