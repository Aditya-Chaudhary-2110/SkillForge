import api from "./axios";

export const getSettings = async () => {
  const response = await api.get("/settings");
  return response.data.data;
};

export const changePassword = async ({ currentPassword, newPassword }) => {
  const response = await api.patch("/settings/password", {
    currentPassword,
    newPassword,
  });

  return response.data.data;
};

export const logoutAllDevices = async () => {
  const response = await api.post("/settings/logout-all");
  return response.data.data;
};

export const deleteAccount = async (password) => {
  const response = await api.delete("/settings", {
    data: { password },
  });

  return response.data.data;
};
