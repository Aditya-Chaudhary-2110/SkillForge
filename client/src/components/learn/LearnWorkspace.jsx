import { useState } from "react";

import LearnHeader from "./LearnHeader";
import LearnTabs from "./LearnTabs";

import LessonContent from "./LessonContent";
import InterviewContent from "./InterviewContent";
import MCQContent from "./MCQContent";

const LearnWorkspace = ({
  lesson,
  interview,
  interviewLoading,
  mcqs,
  mcqsLoading,
  progress,
}) => {
  const [activeTab, setActiveTab] = useState("learn");

  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      <LearnHeader lesson={lesson.content} />

      <LearnTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Learn */}

      {activeTab === "learn" && (
        <LessonContent lesson={lesson} progress={progress} />
      )}

      {/* Interview */}

      {activeTab === "interview" && (
        <InterviewContent interview={interview} loading={interviewLoading} />
      )}

      {/* MCQs */}

      {activeTab === "mcqs" && <MCQContent mcqs={mcqs} loading={mcqsLoading} />}
    </div>
  );
};

export default LearnWorkspace;
