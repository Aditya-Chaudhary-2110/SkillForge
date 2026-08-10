const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  ...props
}) => {
  return (
    <div className="space-y-1.5">
      {/* Label */}
      <label className="block text-[13px] font-medium text-slate-700">
        {label}
      </label>

      {/* Input */}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full rounded-xl border px-4 py-2.5 text-[14px] transition-all duration-200 outline-none
          ${
            error
              ? "border-red-400 focus:border-red-500"
              : "border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
          }`}
        {...props}
      />

      {/* Error */}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
