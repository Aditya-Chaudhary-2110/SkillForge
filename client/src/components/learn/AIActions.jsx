import { useState } from "react";
import { Sparkles, Lightbulb, Brain, TriangleAlert, Save } from "lucide-react";
import toast from "react-hot-toast";

import { saveAIToNotes } from "../../services/note.service";

const AIActions = ({ helper, loading, lesson }) => {
  const [active, setActive] = useState("simple");
  const [saving, setSaving] = useState(false);

  const buttons = [
    {
      id: "simple",
      title: "Explain Simpler",
      icon: Sparkles,
    },
    {
      id: "example",
      title: "Real World Example",
      icon: Lightbulb,
    },
    {
      id: "memory",
      title: "Memory Trick",
      icon: Brain,
    },
    {
      id: "mistake",
      title: "Common Mistake",
      icon: TriangleAlert,
    },
  ];

  const handleSaveToNotes = async () => {
    try {
      setSaving(true);

      await saveAIToNotes({
        topic: lesson.topic._id,
        title: lesson.content.title,
        slug: lesson.topic.slug,
        content: `
## Explain Simpler

${helper.simple}

---

## Real World Example

${helper.example}

---

## Memory Trick

${helper.memory}

---

## Common Mistake

${helper.mistake}
        `,
      });

      toast.success("Saved to Notes");
    } catch (err) {
      toast.error("Unable to save note");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}

      <div className="border-b border-slate-200 px-6 py-4">
        <h2 className="text-base font-semibold text-slate-900">AI Helper</h2>

        <p className="mt-1 text-sm text-slate-500">
          Learn smarter with AI generated explanations.
        </p>
      </div>

      {/* Buttons */}

      <div className="flex flex-wrap gap-2 px-6 py-4">
        {buttons.map((button) => {
          const Icon = button.icon;

          return (
            <button
              key={button.id}
              onClick={() => setActive(button.id)}
              className={`flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition-all duration-200

              ${
                active === button.id
                  ? "border-indigo-600 bg-indigo-600 text-white shadow-sm"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Icon size={16} />
              {button.title}
            </button>
          );
        })}
      </div>

      {/* Response */}

      <div className="border-t border-slate-200 px-6 py-5">
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
          Response
        </h3>

        <div className="min-h-[70px] rounded-2xl bg-slate-50 p-4">
          {loading ? (
            <div className="animate-pulse space-y-3">
              <div className="h-3.5 w-3/4 rounded bg-slate-200"></div>

              <div className="h-3.5 w-full rounded bg-slate-200"></div>

              <div className="h-3.5 w-5/6 rounded bg-slate-200"></div>

              <div className="h-3.5 w-2/3 rounded bg-slate-200"></div>
            </div>
          ) : (
            <p className="whitespace-pre-line text-[14px] leading-6 text-slate-700">
              {helper?.[active] || "No AI explanation available."}
            </p>
          )}
        </div>
      </div>

      {/* Save Button */}

      <div className="border-t border-slate-200 px-6 py-4">
        <button
          onClick={handleSaveToNotes}
          disabled={saving}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-60"
        >
          <Save size={16} />
          {saving ? "Saving..." : "Save to Notes"}
        </button>
      </div>
    </div>
  );
};

export default AIActions;
