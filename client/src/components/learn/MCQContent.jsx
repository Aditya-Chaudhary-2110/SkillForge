import { useState } from "react";

const MCQContent = ({ mcqs, loading }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Stores selected option for each question
  const [answers, setAnswers] = useState({});

  // Stores submitted state for each question
  const [submittedQuestions, setSubmittedQuestions] = useState({});

  // Show final result
  const [showResult, setShowResult] = useState(false);

  if (loading) {
    return (
      <div className="p-10 text-center text-slate-500">Loading MCQs...</div>
    );
  }

  if (!mcqs?.questions?.length) {
    return (
      <div className="p-10 text-center text-slate-500">No MCQs available.</div>
    );
  }

  // Score
  const score = mcqs.questions.reduce((total, q, index) => {
    return answers[index] === q.correctAnswer ? total + 1 : total;
  }, 0);

  // Result Screen
  if (showResult) {
    const percentage = Math.round((score / mcqs.questions.length) * 100);

    return (
      <article className="mx-auto max-w-3xl px-10 py-16 text-center">
        <h1 className="text-4xl font-bold text-slate-900">🎉 Quiz Completed</h1>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <p className="text-lg text-slate-500">Your Score</p>

          <h2 className="mt-4 text-6xl font-bold text-indigo-600">
            {score} / {mcqs.questions.length}
          </h2>

          <p className="mt-4 text-2xl font-semibold text-slate-700">
            {percentage}%
          </p>

          <p className="mt-8 text-lg text-slate-600">
            {percentage >= 80
              ? "Excellent 🎯"
              : percentage >= 60
                ? "Good Job 👍"
                : "Keep Practicing 💪"}
          </p>

          <button
            onClick={() => {
              setCurrentQuestion(0);
              setAnswers({});
              setSubmittedQuestions({});
              setShowResult(false);
            }}
            className="mt-10 rounded-xl bg-indigo-600 px-8 py-3 font-semibold text-white hover:bg-indigo-700"
          >
            Retry Quiz
          </button>
        </div>
      </article>
    );
  }

  const question = mcqs.questions[currentQuestion];

  const selectedOption = answers[currentQuestion] || null;

  const submitted = Boolean(submittedQuestions[currentQuestion]);

  const isCorrect = selectedOption === question.correctAnswer;

  return (
    <article className="mx-auto max-w-4xl px-10 py-10">
      {/* Header */}

      <div className="mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
          Multiple Choice Questions
        </h1>

        <p className="mt-3 text-base leading-7 text-slate-500">
          Test your understanding of this topic.
        </p>
      </div>

      {/* Progress */}

      <p className="mb-6 text-sm font-semibold uppercase tracking-wide text-indigo-600">
        Question {currentQuestion + 1} of {mcqs.questions.length}
      </p>

      {/* Difficulty */}

      <div className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
        {question.difficulty}
      </div>

      {/* Question */}

      <h2 className="mt-6 text-2xl font-bold leading-9 text-slate-900">
        {question.question}
      </h2>

      {/* Options */}

      <div className="mt-8 space-y-4">
        {question.options.map((option) => {
          const selected = selectedOption === option.id;

          return (
            <button
              key={option.id}
              disabled={submitted}
              onClick={() =>
                setAnswers((prev) => ({
                  ...prev,
                  [currentQuestion]: option.id,
                }))
              }
              className={`flex w-full items-center rounded-2xl border px-5 py-4 text-left transition
              ${
                selected
                  ? "border-indigo-600 bg-indigo-50"
                  : "border-slate-200 hover:border-indigo-400 hover:bg-slate-50"
              }`}
            >
              <span
                className={`mr-4 flex h-8 w-8 items-center justify-center rounded-full font-semibold
                ${
                  selected
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                {option.id}
              </span>

              <span className="text-slate-700">{option.text}</span>
            </button>
          );
        })}
      </div>

      {/* Submit */}

      <div className="mt-10">
        <button
          disabled={!selectedOption || submitted}
          onClick={() => {
            setSubmittedQuestions((prev) => ({
              ...prev,
              [currentQuestion]: true,
            }));
          }}
          className={`rounded-xl px-6 py-3 font-semibold transition
          ${
            !selectedOption || submitted
              ? "cursor-not-allowed bg-slate-200 text-slate-500"
              : "bg-indigo-600 text-white hover:bg-indigo-700"
          }`}
        >
          Submit Answer
        </button>
      </div>

      {/* Result */}

      {submitted && (
        <>
          <div
            className={`mt-8 rounded-2xl border p-6 ${
              isCorrect
                ? "border-emerald-200 bg-emerald-50"
                : "border-red-200 bg-red-50"
            }`}
          >
            <h3
              className={`text-lg font-bold ${
                isCorrect ? "text-emerald-700" : "text-red-700"
              }`}
            >
              {isCorrect ? "✅ Correct Answer" : "❌ Incorrect Answer"}
            </h3>

            <p className="mt-4 leading-8 text-slate-700">
              {question.explanation}
            </p>
          </div>

          {/* Navigation */}

          <div className="mt-10 flex items-center justify-between">
            <button
              disabled={currentQuestion === 0}
              onClick={() => {
                const previous = currentQuestion - 1;
                setCurrentQuestion(previous);
              }}
              className={`rounded-xl px-5 py-3 font-semibold transition
      ${
        currentQuestion === 0
          ? "cursor-not-allowed bg-slate-200 text-slate-500"
          : "border border-slate-300 bg-white hover:bg-slate-100"
      }`}
            >
              ← Previous
            </button>

            {currentQuestion === mcqs.questions.length - 1 ? (
              <button
                disabled={!submitted}
                onClick={() => {
                  setShowResult(true);
                }}
                className={`rounded-xl px-6 py-3 font-semibold transition
        ${
          !submitted
            ? "cursor-not-allowed bg-slate-200 text-slate-500"
            : "bg-emerald-600 text-white hover:bg-emerald-700"
        }`}
              >
                Finish Quiz
              </button>
            ) : (
              <button
                disabled={!submitted}
                onClick={() => {
                  const next = currentQuestion + 1;
                  setCurrentQuestion(next);
                }}
                className={`rounded-xl px-6 py-3 font-semibold transition
        ${
          !submitted
            ? "cursor-not-allowed bg-slate-200 text-slate-500"
            : "bg-indigo-600 text-white hover:bg-indigo-700"
        }`}
              >
                Next →
              </button>
            )}
          </div>
        </>
      )}
    </article>
  );
};

export default MCQContent;
