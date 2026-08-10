import { useQuery } from "@tanstack/react-query";

import { fetchNotes } from "../services/note.service";

export const useNotes = () => {
  return useQuery({
    queryKey: ["notes"],
    queryFn: fetchNotes,
  });
};
