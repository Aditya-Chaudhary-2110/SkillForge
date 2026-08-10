import { useQuery } from "@tanstack/react-query";

import { getRoadmap } from "../api/roadmap.api";

export const useRoadmap = (skillSlug) => {
  return useQuery({
    queryKey: ["roadmap", skillSlug],

    queryFn: () => getRoadmap(skillSlug),

    enabled: !!skillSlug,

    staleTime: 1000 * 60 * 10,

    refetchOnWindowFocus: false,
  });
};
