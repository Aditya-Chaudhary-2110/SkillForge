import api from "./axios";

export const getLesson = async (skillSlug, moduleSlug, topicSlug) => {
  const { data } = await api.get(
    `/lessons/${skillSlug}/${moduleSlug}/${topicSlug}`,
  );

  return data.data;
};
