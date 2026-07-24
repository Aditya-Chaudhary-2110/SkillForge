import Skill from "../models/skill.model.js";
import Module from "../models/module.model.js";
import Progress from "../models/progress.model.js";
import Bookmark from "../models/bookmark.model.js";
import Folder from "../models/folder.model.js";
import Note from "../models/note.model.js";

export const getDashboardData = async (userId) => {
  const [skills, modules, completedTopics, bookmarks, folders, notes] =
    await Promise.all([
      Skill.countDocuments(),
      Module.countDocuments(),
      Progress.countDocuments({
        user: userId,
        isCompleted: true,
      }),
      Bookmark.countDocuments({
        user: userId,
      }),
      Folder.countDocuments({
        user: userId,
      }),
      Note.countDocuments({
        user: userId,
      }),
    ]);

  const continueLearning = await Progress.findOne({
    user: userId,
    isCompleted: false,
  })
    .populate({
      path: "topic",
      populate: {
        path: "module",
        populate: {
          path: "skill",
        },
      },
    })
    .sort({ updatedAt: -1 });

  const recentBookmarks = await Bookmark.find({
    user: userId,
  })
    .populate({
      path: "resource",
      select: "title type",
    })
    .sort({ createdAt: -1 })
    .limit(5);

  const recentNotes = await Note.find({
    user: userId,
  })
    .populate("folder", "name")
    .sort({ updatedAt: -1 })
    .limit(5);

  return {
    stats: {
      skills,
      modules,
      topicsCompleted: completedTopics,
      bookmarks,
      folders,
      notes,
    },

    continueLearning,

    recentBookmarks,

    recentNotes,
  };
};
