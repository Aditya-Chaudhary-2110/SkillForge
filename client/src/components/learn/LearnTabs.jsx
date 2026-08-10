const tabs = [
  {
    id: "learn",
    label: "Learn",
  },
  {
    id: "interview",
    label: "Interview",
  },
  {
    id: "mcqs",
    label: "MCQs",
  },
];

const LearnTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="border-b border-slate-200 px-8">
      <div className="flex gap-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative py-4 text-sm font-semibold transition ${
              activeTab === tab.id
                ? "text-indigo-600"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            {tab.label}

            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-indigo-600" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LearnTabs;
