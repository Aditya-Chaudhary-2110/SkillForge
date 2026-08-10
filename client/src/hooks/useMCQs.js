import { useQuery } from "@tanstack/react-query";

import { getMCQs } from "../services/mcq.service";

export const useMCQs = (skillSlug, moduleSlug, topicSlug) => {
  return useQuery({
    queryKey: ["mcqs", skillSlug, moduleSlug, topicSlug],

    queryFn: () =>
      getMCQs({
        skillSlug,
        moduleSlug,
        topicSlug,
      }),

    enabled: !!skillSlug && !!moduleSlug && !!topicSlug,

    staleTime: Infinity,
  });
};
