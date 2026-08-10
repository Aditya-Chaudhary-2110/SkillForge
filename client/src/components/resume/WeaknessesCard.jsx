const WeaknessesCard = ({ analysis }) => {
  return (
    <div className="rounded-3xl border border-red-200 bg-red-50 p-6">
      <h2 className="text-xl font-semibold text-red-700">
        Areas for Improvement
      </h2>

      <ul className="mt-4 space-y-3">
        {analysis.weaknesses.map((weakness, index) => (
          <li key={index} className="flex items-start gap-3 text-slate-700">
            <span className="mt-1 h-2 w-2 rounded-full bg-red-500" />

            <span>{weakness}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeaknessesCard;
