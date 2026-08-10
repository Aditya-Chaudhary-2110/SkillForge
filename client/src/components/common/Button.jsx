const Button = ({
  children,
  type = "button",
  loading = false,
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={loading}
      className={`w-full rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:shadow-lg hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70 ${className}`}
      {...props}
    >
      {loading ? "Please wait..." : children}
    </button>
  );
};

export default Button;
