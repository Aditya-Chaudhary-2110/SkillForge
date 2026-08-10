const AuthCard = ({ title, subtitle, children, className = "" }) => {
  return (
    <div
      className={`w-full rounded-3xl border border-slate-200 bg-white p-8 shadow-xl ${className}`}
    >
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-slate-900">{title}</h1>

        <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
      </div>

      {children}
    </div>
  );
};

export default AuthCard;
