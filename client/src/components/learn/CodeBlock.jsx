const CodeBlock = ({ language = "java", code }) => {
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg">
      <div className="flex items-center justify-between border-b border-slate-700 px-5 py-3">
        <span className="text-sm font-medium text-slate-300">{language}</span>

        <button className="text-sm text-slate-400 transition hover:text-white">
          Copy
        </button>
      </div>

      <pre className="overflow-x-auto p-6">
        <code className="font-mono text-[15px] leading-8 text-slate-100">
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
