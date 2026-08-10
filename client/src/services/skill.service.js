import api from "../api/axios";

export const getSkills = async () => {
  const response = await api.get("/skills");

  return response.data.data.skills;
};
