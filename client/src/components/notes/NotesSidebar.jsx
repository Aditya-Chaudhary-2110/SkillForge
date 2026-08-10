import { Plus } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { useNotes } from "../../hooks/useNotes";
import { createManualNote } from "../../services/note.service";

import NoteListItem from "./NoteListItem";

const NotesSidebar = ({ selectedNote, setSelectedNote }) => {
  const { data: notes = [], isLoading } = useNotes();

  const queryClient = useQueryClient();

  const { mutate: createNote, isPending: isCreating } = useMutation({
    mutationFn: createManualNote,

    onSuccess: (note) => {
      queryClient.setQueryData(["notes"], (oldNotes = []) => [
        note,
        ...oldNotes,
      ]);

      setSelectedNote(note);

      toast.success("Note created successfully");
    },

    onError: (error) => {
      toast.error(error.response?.data?.message || "Failed to create note");
    },
  });

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      {/* Header */}

      <div className="flex-shrink-0 border-b border-slate-200 p-5">
        <h2 className="text-lg font-bold text-slate-900">Personal Notes</h2>

        <p className="mt-1 text-sm text-slate-500">
          Organize your interview notes.
        </p>

        <button
          onClick={() =>
            createNote({
              title: "Untitled Note",
              content: "",
            })
          }
          disabled={isCreating}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Plus size={18} />

          {isCreating ? "Creating..." : "New Note"}
        </button>
      </div>

      {/* Notes List */}

      <div className="min-h-0 flex-1 overflow-y-auto p-3">
        {isLoading ? (
          <p className="text-center text-sm text-slate-400">Loading notes...</p>
        ) : notes.length ? (
          <div className="space-y-2">
            {notes.map((note) => (
              <NoteListItem
                key={note._id}
                note={note}
                isSelected={selectedNote?._id === note._id}
                onClick={() => setSelectedNote(note)}
              />
            ))}
          </div>
        ) : (
          <div className="flex h-full items-center justify-center px-6">
            <div className="text-center">
              <p className="text-sm font-medium text-slate-700">
                No notes available
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Create your first note to start writing.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotesSidebar;
