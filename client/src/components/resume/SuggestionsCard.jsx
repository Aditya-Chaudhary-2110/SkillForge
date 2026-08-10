const SuggestionsCard = ({ analysis }) => {
  return (
    <div className="rounded-3xl border border-indigo-200 bg-indigo-50 p-6">
      <h2 className="text-xl font-semibold text-indigo-700">Recommendations</h2>

      <ul className="mt-4 space-y-3">
        {analysis.overallSuggestions.map((suggestion, index) => (
          <li key={index} className="flex items-start gap-3 text-slate-700">
            <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />

            <span>{suggestion}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestionsCard;
