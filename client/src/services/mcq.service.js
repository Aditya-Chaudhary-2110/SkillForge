import axiosInstance from "../api/axios";

export const getMCQs = async ({ skillSlug, moduleSlug, topicSlug }) => {
  const { data } = await axiosInstance.get(
    `/mcqs/${skillSlug}/${moduleSlug}/${topicSlug}`,
  );

  return data.data;
};
