import { FileText } from "lucide-react";

const EmptyNoteState = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center px-8 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
        <FileText size={30} />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-slate-900">Select a Note</h2>

      <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
        Choose a note from the sidebar or create a new one to start writing.
      </p>
    </div>
  );
};

export default EmptyNoteState;
