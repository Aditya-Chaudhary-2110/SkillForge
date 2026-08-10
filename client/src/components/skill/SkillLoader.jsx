import { Outlet, useParams } from "react-router-dom";

import { useRoadmap } from "../../hooks/useRoadmap";

import TopicSidebar from "../learn/TopicSidebar";
import ProgressPanel from "../learn/ProgressPanel";
import AIActions from "../learn/AIActions";

const SkillLoader = () => {
  const { skillSlug } = useParams();

  const { data: roadmap, isLoading, isError } = useRoadmap(skillSlug);

  if (isLoading) {
    return (
      <div className="flex h-[calc(100vh-48px)] items-center justify-center">
        Loading roadmap...
      </div>
    );
  }

  if (isError || !roadmap) {
    return (
      <div className="flex h-[calc(100vh-48px)] items-center justify-center">
        Failed to load roadmap.
      </div>
    );
  }

  return (
    <div className="grid h-[calc(100vh-48px)] grid-cols-[300px_1fr_320px] gap-5 p-5">
      <TopicSidebar roadmap={roadmap} />

      <Outlet context={{ roadmap }} />

      <ProgressPanel />

      <div className="col-span-3">
        <AIActions />
      </div>
    </div>
  );
};

export default SkillLoader;
