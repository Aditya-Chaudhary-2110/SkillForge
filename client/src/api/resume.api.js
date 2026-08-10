import api from "./axios";

export const uploadResume = async (formData) => {
  const response = await api.post("/resume/upload", formData);

  return response.data.data;
};

export const getResume = async () => {
  const response = await api.get("/resume");

  return response.data.data;
};

export const analyzeResume = async () => {
  const response = await api.post("/resume/analyze");

  return response.data.data;
};

export const reanalyzeResume = async () => {
  const response = await api.patch("/resume/reanalyze");

  return response.data.data;
};

export const deleteResume = async () => {
  const response = await api.delete("/resume");

  return response.data.data;
};
