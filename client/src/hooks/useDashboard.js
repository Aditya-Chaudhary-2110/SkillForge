import { useQuery } from "@tanstack/react-query";

import api from "../api/axios";

const getDashboard = async () => {
  const response = await api.get("/dashboard");

  return response.data.data;
};

const useDashboard = () => {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: getDashboard,
  });
};

export default useDashboard;
