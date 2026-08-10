import axiosInstance from "../api/axios";

export const getInterview = async ({ skillSlug, moduleSlug, topicSlug }) => {
  const { data } = await axiosInstance.get(
    `/interviews/${skillSlug}/${moduleSlug}/${topicSlug}`,
  );

  return data.data;
};
