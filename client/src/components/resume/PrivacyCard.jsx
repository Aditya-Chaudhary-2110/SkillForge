const PrivacyCard = () => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6">
      <h2 className="text-lg font-semibold text-slate-900">Privacy</h2>

      <p className="mt-4 text-sm leading-7 text-slate-600">
        Your resume is securely stored and analyzed only to generate AI-powered
        feedback. It is never shared with anyone.
      </p>
    </div>
  );
};

export default PrivacyCard;
