import {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
  saveAINote,
  getTodayNotesStats,
} from "../api/note.api";

export const fetchNotes = async () => {
  return await getNotes();
};

export const createManualNote = async (data) => {
  return await createNote(data);
};

export const updateUserNote = async (noteId, data) => {
  return await updateNote(noteId, data);
};

export const deleteUserNote = async (noteId) => {
  return await deleteNote(noteId);
};

export const saveAIToNotes = async ({ topic, title, slug, content }) => {
  return await saveAINote({
    topic,
    title,
    slug,
    content,
  });
};

// ================= Dashboard =================

export const fetchTodayNotesStats = async () => {
  return await getTodayNotesStats();
};
