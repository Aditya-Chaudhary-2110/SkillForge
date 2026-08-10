import { useEffect, useState } from "react";
import { Save, Trash2 } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { updateUserNote, deleteUserNote } from "../../services/note.service";
import ConfirmModal from "../common/ConfirmModal";

const NoteEditor = ({ note, setSelectedNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const queryClient = useQueryClient();

  useEffect(() => {
    if (!note) return;

    setTitle(note.title);
    setContent(note.content);
  }, [note]);

  /* -------------------- Save -------------------- */

  const { mutate: saveNote, isPending: isSaving } = useMutation({
    mutationFn: ({ noteId, data }) => updateUserNote(noteId, data),

    onSuccess: (updatedNote) => {
      queryClient.setQueryData(["notes"], (oldNotes = []) =>
        oldNotes.map((item) =>
          item._id === updatedNote._id ? updatedNote : item,
        ),
      );

      toast.success("Note saved successfully");
    },

    onError: (error) => {
      toast.error(error.response?.data?.message || "Failed to save note");
    },
  });

  /* -------------------- Delete -------------------- */

  const { mutate: removeNote, isPending: isDeleting } = useMutation({
    mutationFn: deleteUserNote,

    onSuccess: (_, deletedId) => {
      queryClient.setQueryData(["notes"], (oldNotes = []) =>
        oldNotes.filter((item) => item._id !== deletedId),
      );

      setSelectedNote(null);
      setShowDeleteModal(false);

      toast.success("Note deleted successfully");
    },

    onError: (error) => {
      toast.error(error.response?.data?.message || "Failed to delete note");
    },
  });

  const handleSave = () => {
    saveNote({
      noteId: note._id,
      data: {
        title,
        content,
      },
    });
  };

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    removeNote(note._id);
  };

  return (
    <div className="flex h-full flex-col">
      {/* Header */}

      <div className="border-b border-slate-200 p-6">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Untitled Note"
          className="w-full border-none bg-transparent text-3xl font-bold text-slate-900 outline-none placeholder:text-slate-400"
        />
      </div>

      {/* Content */}

      <div className="flex-1 p-6">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start writing your notes..."
          className="h-full w-full resize-none border-none bg-transparent text-[15px] leading-7 text-slate-700 outline-none placeholder:text-slate-400"
        />
      </div>

      {/* Footer */}

      <div className="flex items-center justify-end gap-3 border-t border-slate-200 p-5">
        <button
          onClick={handleDelete}
          disabled={isDeleting}
          className="flex items-center gap-2 rounded-xl border border-red-200 px-4 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Trash2 size={18} />
          Delete
        </button>

        <button
          onClick={handleSave}
          disabled={isSaving}
          className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Save size={18} />
          {isSaving ? "Saving..." : "Save"}
        </button>
      </div>

      <ConfirmModal
        open={showDeleteModal}
        title="Delete Note?"
        message="This action cannot be undone. Are you sure you want to permanently delete this note?"
        confirmText="Delete"
        loading={isDeleting}
        onCancel={() => setShowDeleteModal(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default NoteEditor;
