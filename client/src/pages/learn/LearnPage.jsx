import { useEffect } from "react";
import { useParams } from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout";

import { useLesson } from "../../hooks/useLesson";
import { useRoadmap } from "../../hooks/useRoadmap";
import { useAIHelper } from "../../hooks/useAIHelper";
import { useInterview } from "../../hooks/useInterview";
import { useMCQs } from "../../hooks/useMCQs";
import { useUserProgress } from "../../hooks/useUserProgress";

import { saveLastVisited } from "../../services/userProgress.service";

import TopicSidebar from "../../components/learn/TopicSidebar";
import LearnWorkspace from "../../components/learn/LearnWorkspace";
import ProgressPanel from "../../components/learn/ProgressPanel";
import AIActions from "../../components/learn/AIActions";

const LearnPage = () => {
  const { skillSlug, moduleSlug, topicSlug } = useParams();

  // Lesson
  const {
    data: lesson,
    isLoading: lessonLoading,
    isFetching: lessonFetching,
    isError: lessonError,
  } = useLesson(skillSlug, moduleSlug, topicSlug);

  // Roadmap
  const { data: roadmap, isLoading: roadmapLoading } = useRoadmap(skillSlug);

  // AI Helper
  const { data: aiHelper, isLoading: aiLoading } = useAIHelper(
    skillSlug,
    moduleSlug,
    topicSlug,
  );

  // Interview
  const { data: interview, isLoading: interviewLoading } = useInterview(
    skillSlug,
    moduleSlug,
    topicSlug,
  );

  // MCQs
  const { data: mcqs, isLoading: mcqsLoading } = useMCQs(
    skillSlug,
    moduleSlug,
    topicSlug,
  );

  // User Progress
  const { data: progress, isLoading: progressLoading } = useUserProgress();

  // Save last visited lesson
  useEffect(() => {
    if (!lesson) return;

    saveLastVisited({
      skillId: lesson.skill,
      moduleId: lesson.module,
      topicId: lesson.topic,
    }).catch(console.error);
  }, [lesson]);

  // First page load
  if (roadmapLoading || progressLoading || (!lesson && lessonLoading)) {
    return (
      <DashboardLayout showSidebar={false}>
        <div className="flex h-full items-center justify-center">
          Loading...
        </div>
      </DashboardLayout>
    );
  }

  if (lessonError) {
    return (
      <DashboardLayout showSidebar={false}>
        <div className="flex h-full items-center justify-center">
          Failed to load lesson.
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout showSidebar={true}>
      <div className="flex flex-col gap-4">
        <div className="grid h-[calc(100vh-90px)] grid-cols-[320px_minmax(0,1fr)_320px] gap-4">
          {/* LEFT */}
          <div className="sticky top-4 h-[calc(100vh-110px)] self-start">
            <TopicSidebar roadmap={roadmap} progress={progress} />
          </div>

          {/* MIDDLE */}
          <div
            className="overflow-y-auto pr-2"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style>
              {`
          .lesson-scroll::-webkit-scrollbar{
            display:none;
          }
        `}
            </style>

            <div className="lesson-scroll">
              {lessonFetching && (
                <div className="absolute right-5 top-5 z-10 rounded-full bg-white px-3 py-1 text-sm font-medium shadow">
                  Loading...
                </div>
              )}

              {lesson && (
                <LearnWorkspace
                  lesson={lesson}
                  interview={interview}
                  interviewLoading={interviewLoading}
                  mcqs={mcqs}
                  mcqsLoading={mcqsLoading}
                  progress={progress}
                />
              )}
            </div>
          </div>

          {/* RIGHT */}
          <div className="sticky top-4 h-[calc(100vh-110px)] self-start">
            <ProgressPanel
              lesson={lesson}
              roadmap={roadmap}
              progress={progress}
            />
          </div>
        </div>

        {/* AI Helper */}
        <AIActions helper={aiHelper} loading={aiLoading} lesson={lesson} />
      </div>
    </DashboardLayout>
  );
};

export default LearnPage;
