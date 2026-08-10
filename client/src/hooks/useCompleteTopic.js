import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  completeTopic,
  uncompleteTopic,
} from "../services/userProgress.service";

export const useCompleteTopic = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: completeTopic,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user-progress"],
      });

      queryClient.invalidateQueries({
        queryKey: ["roadmap"],
      });

      queryClient.invalidateQueries({
        queryKey: ["dashboard"],
      });
    },
  });
};

export const useUncompleteTopic = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: uncompleteTopic,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user-progress"],
      });

      queryClient.invalidateQueries({
        queryKey: ["roadmap"],
      });

      queryClient.invalidateQueries({
        queryKey: ["dashboard"],
      });
    },
  });
};
