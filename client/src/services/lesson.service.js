import api from "./api";

export const getLesson = async ({ skillSlug, moduleSlug, topicSlug }) => {
  const response = await api.get(
    `/lesson/${skillSlug}/${moduleSlug}/${topicSlug}`,
  );

  return response.data.data;
};
