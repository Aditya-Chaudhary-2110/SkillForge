import { useQuery } from "@tanstack/react-query";

import { getInterview } from "../services/interview.service";

export const useInterview = (skillSlug, moduleSlug, topicSlug) => {
  return useQuery({
    queryKey: ["interview", skillSlug, moduleSlug, topicSlug],

    queryFn: () =>
      getInterview({
        skillSlug,
        moduleSlug,
        topicSlug,
      }),

    enabled: !!skillSlug && !!moduleSlug && !!topicSlug,

    staleTime: Infinity,
  });
};
