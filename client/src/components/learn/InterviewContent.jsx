import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const InterviewContent = ({ interview, loading }) => {
  const [openAnswers, setOpenAnswers] = useState({});

  const toggleAnswer = (index) => {
    setOpenAnswers((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  if (loading) {
    return (
      <div className="p-10 text-center text-slate-500">
        Loading interview questions...
      </div>
    );
  }

  if (!interview?.questions?.length) {
    return (
      <div className="p-10 text-center text-slate-500">
        No interview questions available.
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-4xl px-10 py-10">
      {/* Header */}

      <div className="mb-12 border-b border-slate-200 pb-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
          Interview Questions
        </h1>

        <p className="mt-3 text-base leading-7 text-slate-500">
          Try answering yourself before revealing the answer.
        </p>
      </div>

      {interview.questions.map((item, index) => {
        const opened = openAnswers[index];

        return (
          <section
            key={index}
            className="mb-16 border-b border-slate-200 pb-12 last:border-b-0"
          >
            {/* Question Number */}

            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Question {index + 1}
            </p>

            {/* Difficulty */}

            <div className="mt-4 inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
              {item.difficulty}
            </div>

            {/* Question */}

            <h2 className="mt-6 text-2xl font-bold leading-9 text-slate-900">
              {item.question}
            </h2>

            {/* Toggle */}

            <button
              onClick={() => toggleAnswer(index)}
              className="mt-8 flex items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50 px-5 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-100"
            >
              {opened ? (
                <>
                  <ChevronUp size={18} />
                  Hide Answer
                </>
              ) : (
                <>
                  <ChevronDown size={18} />
                  Show Answer
                </>
              )}
            </button>

            {/* Answer */}

            {opened && (
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="mb-4 text-lg font-semibold text-slate-900">
                  Answer
                </h3>

                <p className="whitespace-pre-line text-[15px] leading-8 text-slate-700">
                  {item.answer}
                </p>
              </div>
            )}
          </section>
        );
      })}
    </article>
  );
};

export default InterviewContent;
