import api from "./axios";

export const getNotes = async () => {
  const response = await api.get("/notes");
  return response.data.data.notes;
};

export const createNote = async (data) => {
  const response = await api.post("/notes", data);
  return response.data.data.note;
};

export const updateNote = async (noteId, data) => {
  const response = await api.put(`/notes/${noteId}`, data);
  return response.data.data.note;
};

export const deleteNote = async (noteId) => {
  const response = await api.delete(`/notes/${noteId}`);
  return response.data.data.note;
};

export const saveAINote = async (data) => {
  const response = await api.post("/notes/save-ai", data);
  return response.data;
};

// ================= Dashboard =================

export const getTodayNotesStats = async () => {
  const response = await api.get("/notes/today-stats");
  return response.data.data;
};
