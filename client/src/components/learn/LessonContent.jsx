import {
  useCompleteTopic,
  useUncompleteTopic,
} from "../../hooks/useCompleteTopic";

import LessonOverview from "../lesson/LessonOverview";
import LessonWhy from "../lesson/LessonWhy";
import LessonCoreConcept from "../lesson/LessonCoreConcept";
import LessonInternalWorking from "../lesson/LessonInternalWorking";
import LessonSyntax from "../lesson/LessonSyntax";
import LessonExample from "../lesson/LessonExample";
import LessonOutput from "../lesson/LessonOutput";
import LessonRealWorldUsage from "../lesson/LessonRealWorldUsage";
import LessonCommonMistakes from "../lesson/LessonCommonMistakes";
import LessonBestPractices from "../lesson/LessonBestPractices";
import LessonInterviewTips from "../lesson/LessonInterviewTips";
import LessonKeyTakeaways from "../lesson/LessonKeyTakeaways";

const LessonContent = ({ lesson, progress }) => {
  const data = lesson.content;

  const { mutate: completeTopic, isPending: completing } = useCompleteTopic();

  const { mutate: uncompleteTopic, isPending: uncompleting } =
    useUncompleteTopic();

  const isCompleted = progress?.completedTopics?.some(
    (item) => item.topic === lesson.topic || item.topic?._id === lesson.topic,
  );

  return (
    <div className="space-y-8 px-8 py-8">
      {/* Complete Button */}

      <LessonOverview overview={data.overview} />

      <LessonWhy why={data.why} />

      <LessonCoreConcept concept={data.coreConcept} />

      <LessonInternalWorking working={data.internalWorking} />

      <LessonSyntax syntax={data.syntax} />

      <LessonExample example={data.example} />

      <LessonOutput output={data.output} />

      <LessonRealWorldUsage realWorldUsage={data.realWorldUsage} />

      <LessonCommonMistakes commonMistakes={data.commonMistakes} />

      <LessonBestPractices bestPractices={data.bestPractices} />

      <LessonInterviewTips interviewTips={data.interviewTips} />

      <LessonKeyTakeaways keyTakeaways={data.keyTakeaways} />

      <div className="flex justify-end border-t border-slate-200 pt-8">
        <button
          disabled={completing || uncompleting}
          onClick={() => {
            if (isCompleted) {
              uncompleteTopic(lesson.topic);
            } else {
              completeTopic(lesson.topic);
            }
          }}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
            isCompleted
              ? "bg-emerald-600 text-white hover:bg-emerald-700"
              : "bg-indigo-600 text-white hover:bg-indigo-700"
          }`}
        >
          {isCompleted ? "✓ Completed" : "Mark Complete"}
        </button>
      </div>
    </div>
  );
};

export default LessonContent;
