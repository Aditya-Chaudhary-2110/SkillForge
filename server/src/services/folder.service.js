import Folder from "../models/folder.model.js";
import ApiError from "../utils/ApiError.js";

export const createFolder = async (userId, folderData) => {
  const existingFolder = await Folder.findOne({
    user: userId,
    name: folderData.name,
  });

  if (existingFolder) {
    throw new ApiError(409, "Folder already exists");
  }

  return await Folder.create({
    user: userId,
    ...folderData,
  });
};

export const getUserFolders = async (userId) => {
  return await Folder.find({ user: userId }).sort({ name: 1 });
};

export const getFolderById = async (userId, folderId) => {
  const folder = await Folder.findOne({
    _id: folderId,
    user: userId,
  });

  if (!folder) {
    throw new ApiError(404, "Folder not found");
  }

  return folder;
};

export const updateFolder = async (userId, folderId, folderData) => {
  const folder = await Folder.findOneAndUpdate(
    {
      _id: folderId,
      user: userId,
    },
    folderData,
    {
      new: true,
      runValidators: true,
    },
  );

  if (!folder) {
    throw new ApiError(404, "Folder not found");
  }

  return folder;
};

export const deleteFolder = async (userId, folderId) => {
  const folder = await Folder.findOneAndDelete({
    _id: folderId,
    user: userId,
  });

  if (!folder) {
    throw new ApiError(404, "Folder not found");
  }

  return folder;
};
