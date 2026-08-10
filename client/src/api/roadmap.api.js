import api from "./axios";

export const getRoadmap = async (skillSlug) => {
  const { data } = await api.get(`/roadmap/${skillSlug}`);
  return data.data;
};
