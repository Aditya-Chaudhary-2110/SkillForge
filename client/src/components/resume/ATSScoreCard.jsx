const ATSScoreCard = ({ analysis }) => {
  const score = analysis?.atsScore || 0;

  const getScoreDetails = () => {
    if (score >= 90) {
      return {
        label: "Exceptional",
        description: "Highly ATS-optimized and interview-ready",
      };
    }

    if (score >= 80) {
      return {
        label: "Strong",
        description: "Strong resume with minor improvements possible",
      };
    }

    if (score >= 70) {
      return {
        label: "Good",
        description: "Competitive resume with some improvements recommended",
      };
    }

    if (score >= 60) {
      return {
        label: "Fair",
        description:
          "Several areas could be improved for better ATS performance",
      };
    }

    return {
      label: "Needs Improvement",
      description: "Significant improvements are recommended",
    };
  };

  const scoreDetails = getScoreDetails();

  return (
    <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 p-8 text-white shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-100">
            ATS Score
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            {score}
            <span className="text-3xl font-semibold">/100</span>
          </h2>
        </div>

        <div className="text-right">
          <p className="text-sm text-indigo-100">Resume Compatibility</p>

          <p className="mt-2 text-lg font-semibold">{scoreDetails.label}</p>

          <p className="mt-1 max-w-xs text-sm text-indigo-100">
            {scoreDetails.description}
          </p>
        </div>
      </div>

      {/* Progress */}

      <div className="mt-8">
        <div className="h-3 overflow-hidden rounded-full bg-white/20">
          <div
            className="h-full rounded-full bg-white transition-all duration-700"
            style={{
              width: `${Math.min(score, 100)}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ATSScoreCard;
