import api from "../api/axios";

export const getUserProgress = async () => {
  const { data } = await api.get("/user-progress");
  return data.data;
};

export const completeTopic = async (topicId) => {
  const { data } = await api.post("/user-progress/complete", {
    topicId,
  });

  return data.data;
};

export const uncompleteTopic = async (topicId) => {
  const { data } = await api.post("/user-progress/uncomplete", {
    topicId,
  });

  return data.data;
};

export const saveLastVisited = async ({ skillId, moduleId, topicId }) => {
  const { data } = await api.post("/user-progress/last-visited", {
    skillId,
    moduleId,
    topicId,
  });

  return data.data;
};
