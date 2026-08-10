const StrengthsCard = ({ analysis }) => {
  return (
    <div className="rounded-3xl border border-green-200 bg-green-50 p-6">
      <h2 className="text-xl font-semibold text-green-700">Strengths</h2>

      <ul className="mt-4 space-y-3">
        {analysis.strengths.map((strength, index) => (
          <li key={index} className="flex items-start gap-3 text-slate-700">
            <span className="mt-1 h-2 w-2 rounded-full bg-green-500" />

            <span>{strength}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StrengthsCard;
