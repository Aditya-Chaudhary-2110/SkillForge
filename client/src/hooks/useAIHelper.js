import { useQuery } from "@tanstack/react-query";

import { getAIHelper } from "../services/aiHelper.service";

export const useAIHelper = (skillSlug, moduleSlug, topicSlug) => {
  return useQuery({
    queryKey: ["ai-helper", skillSlug, moduleSlug, topicSlug],

    queryFn: () =>
      getAIHelper({
        skillSlug,
        moduleSlug,
        topicSlug,
      }),

    enabled: !!skillSlug && !!moduleSlug && !!topicSlug,
  });
};
