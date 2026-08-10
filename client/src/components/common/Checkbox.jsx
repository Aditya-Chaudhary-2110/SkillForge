const Checkbox = ({ label, name, checked, onChange }) => {
  return (
    <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
      />

      {label}
    </label>
  );
};

export default Checkbox;
