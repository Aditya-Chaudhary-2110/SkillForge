const SummaryCard = ({ analysis }) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6">
      <h2 className="text-xl font-semibold text-slate-900">
        Professional Summary
      </h2>

      <p className="mt-4 leading-8 text-slate-600">{analysis.summary}</p>
    </div>
  );
};

export default SummaryCard;
