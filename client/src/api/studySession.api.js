import api from "./axios";

export const startStudySession = async () => {
  const response = await api.post("/study-session/start");

  return response.data.data.session;
};

export const stopStudySession = async () => {
  const response = await api.post("/study-session/stop");

  return response.data.data.session;
};

export const getCurrentStudySession = async () => {
  const response = await api.get("/study-session/current");

  return response.data.data.session;
};
