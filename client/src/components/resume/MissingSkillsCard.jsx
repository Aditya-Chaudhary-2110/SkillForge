const MissingSkillsCard = ({ analysis }) => {
  return (
    <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
      <h2 className="text-xl font-semibold text-amber-700">Missing Skills</h2>

      <div className="mt-5 flex flex-wrap gap-3">
        {analysis.missingSkills.map((skill, index) => (
          <span
            key={index}
            className="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MissingSkillsCard;
