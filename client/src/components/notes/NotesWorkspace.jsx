import { useState } from "react";

import EmptyNoteState from "./EmptyNoteState";
import NoteEditor from "./NoteEditor";
import NotesSidebar from "./NotesSidebar";

const NotesWorkspace = () => {
  const [selectedNote, setSelectedNote] = useState(null);

  return (
    <div className="grid h-[calc(100vh-120px)] grid-cols-[320px_1fr] gap-5">
      <NotesSidebar
        selectedNote={selectedNote}
        setSelectedNote={setSelectedNote}
      />

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
        {selectedNote ? (
          <NoteEditor note={selectedNote} setSelectedNote={setSelectedNote} />
        ) : (
          <EmptyNoteState />
        )}
      </div>
    </div>
  );
};

export default NotesWorkspace;
