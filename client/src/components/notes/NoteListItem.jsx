const NoteListItem = ({ note, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-xl p-3 text-left transition ${
        isSelected
          ? "border border-indigo-200 bg-indigo-50"
          : "hover:bg-slate-100"
      }`}
    >
      <h3 className="truncate text-[14px] font-semibold text-slate-800">
        {note.title}
      </h3>

      <p className="mt-1 text-xs text-slate-400">
        {new Date(note.updatedAt).toLocaleDateString()}
      </p>
    </button>
  );
};

export default NoteListItem;
