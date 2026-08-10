import { useQuery } from "@tanstack/react-query";
import { getUserProgress } from "../services/userProgress.service";

export const useUserProgress = () => {
  return useQuery({
    queryKey: ["user-progress"],
    queryFn: getUserProgress,
  });
};
