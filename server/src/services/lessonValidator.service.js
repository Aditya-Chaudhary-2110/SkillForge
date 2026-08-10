export const validateLesson = (lesson) => {
  if (!lesson || typeof lesson !== "object") {
    throw new Error("Lesson must be an object.");
  }

  if (!lesson.title) {
    throw new Error("Lesson title is missing.");
  }

  if (!Array.isArray(lesson.sections)) {
    throw new Error("Lesson sections must be an array.");
  }

  if (lesson.sections.length === 0) {
    throw new Error("Lesson must contain at least one section.");
  }

  for (const section of lesson.sections) {
    if (!section.heading) {
      throw new Error("Section heading is missing.");
    }

    if (!Array.isArray(section.content)) {
      throw new Error(`Section "${section.heading}" content must be an array.`);
    }
  }

  return lesson;
};
