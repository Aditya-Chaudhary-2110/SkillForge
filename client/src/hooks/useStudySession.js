import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  getCurrentSession,
  startSession,
  stopSession,
} from "../services/studySession.service";

export const useStudySession = () => {
  const queryClient = useQueryClient();

  const currentSessionQuery = useQuery({
    queryKey: ["study-session"],
    queryFn: getCurrentSession,
  });

  const startMutation = useMutation({
    mutationFn: startSession,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["study-session"],
      });

      queryClient.invalidateQueries({
        queryKey: ["user-progress"],
      });
    },
  });

  const stopMutation = useMutation({
    mutationFn: stopSession,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["study-session"],
      });

      queryClient.invalidateQueries({
        queryKey: ["user-progress"],
      });
    },
  });

  return {
    session: currentSessionQuery.data,

    loading:
      currentSessionQuery.isLoading ||
      startMutation.isPending ||
      stopMutation.isPending,

    startSession: startMutation.mutateAsync,
    stopSession: stopMutation.mutateAsync,

    startError: startMutation.error,
    stopError: stopMutation.error,
  };
};
