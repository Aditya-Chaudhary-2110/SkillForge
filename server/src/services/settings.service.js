import bcrypt from "bcrypt";

import User from "../models/user.model.js";
import Profile from "../models/profile.model.js";
import Resume from "../models/resume.model.js";

import { deleteResume as deleteResumeFromSupabase } from "./supabase.service.js";

import ApiError from "../utils/ApiError.js";

/* ==========================================
            GET SETTINGS
========================================== */

export const getSettings = async (userId) => {
  const user = await User.findById(userId).select(
    "_id fullName email createdAt",
  );

  if (!user) {
    throw new ApiError(404, "User not found.");
  }

  return user;
};

/* ==========================================
          CHANGE PASSWORD
========================================== */

export const changePassword = async (userId, currentPassword, newPassword) => {
  const user = await User.findById(userId);

  if (!user) {
    throw new ApiError(404, "User not found.");
  }

  const isPasswordCorrect = await bcrypt.compare(
    currentPassword,
    user.password,
  );

  if (!isPasswordCorrect) {
    throw new ApiError(400, "Current password is incorrect.");
  }

  // User model pre-save hook will hash the new password.
  user.password = newPassword;

  // Invalidate the stored refresh token so existing
  // refresh-token based sessions cannot continue.
  user.refreshToken = undefined;

  await user.save();

  return true;
};

/* ==========================================
      LOGOUT FROM ALL DEVICES
========================================== */

export const logoutAllDevices = async (userId) => {
  const user = await User.findById(userId);

  if (!user) {
    throw new ApiError(404, "User not found.");
  }

  user.refreshToken = undefined;

  await user.save();

  return true;
};

/* ==========================================
          DELETE ACCOUNT
========================================== */

export const deleteAccount = async (userId, password) => {
  const user = await User.findById(userId);

  if (!user) {
    throw new ApiError(404, "User not found.");
  }

  // Verify the user's password before deleting anything.
  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    throw new ApiError(400, "Incorrect password.");
  }

  /* ------------------------------
      Delete Resume From Supabase
  ------------------------------ */

  const resume = await Resume.findOne({ user: userId });

  if (resume) {
    try {
      await deleteResumeFromSupabase(resume.publicId);
    } catch (error) {
      console.error("Failed to delete resume from Supabase:", error.message);
    }

    await Resume.deleteOne({
      _id: resume._id,
    });
  }

  /* ------------------------------
          Delete Profile
  ------------------------------ */

  await Profile.deleteOne({
    user: userId,
  });

  /* ------------------------------
           Delete User
  ------------------------------ */

  await User.deleteOne({
    _id: userId,
  });

  return true;
};
