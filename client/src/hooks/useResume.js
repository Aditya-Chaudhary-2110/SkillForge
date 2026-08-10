import { useQuery } from "@tanstack/react-query";

import { fetchResume } from "../services/resume.service";

export const useResume = () => {
  return useQuery({
    queryKey: ["resume"],

    queryFn: async () => {
      try {
        return await fetchResume();
      } catch (error) {
        // A 404 simply means the user has not uploaded
        // a resume yet. This is an expected state.
        if (error.response?.status === 404) {
          return null;
        }

        // All other errors should still behave normally.
        throw error;
      }
    },

    retry: false,
  });
};
