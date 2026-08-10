import axiosInstance from "../api/axios";

export const getAIHelper = async ({ skillSlug, moduleSlug, topicSlug }) => {
  const { data } = await axiosInstance.post("/ai-helper", {
    skillSlug,
    moduleSlug,
    topicSlug,
  });

  return data.data;
};
