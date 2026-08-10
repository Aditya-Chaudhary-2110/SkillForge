const AuthInput = ({
  label,
  type = "text",
  placeholder,
  register,
  name,
  error,
}) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-700">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`w-full rounded-xl border px-4 py-3 outline-none transition
        ${
          error ? "border-red-500" : "border-slate-300 focus:border-indigo-500"
        }`}
      />

      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default AuthInput;
