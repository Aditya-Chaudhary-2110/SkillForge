import { useQuery, keepPreviousData } from "@tanstack/react-query";

import { getLesson } from "../api/lesson.api";

export const useLesson = (skillSlug, moduleSlug, topicSlug) => {
  return useQuery({
    queryKey: ["lesson", skillSlug, moduleSlug, topicSlug],

    queryFn: () => getLesson(skillSlug, moduleSlug, topicSlug),

    enabled: !!skillSlug && !!moduleSlug && !!topicSlug,

    staleTime: 1000 * 60 * 10,

    refetchOnWindowFocus: false,

    placeholderData: keepPreviousData,
  });
};
