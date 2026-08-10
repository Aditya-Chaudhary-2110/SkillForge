import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import {
  getSettings,
  changePassword,
  logoutAllDevices,
  deleteAccount,
} from "../services/settings.service.js";

/* ==========================================
            GET SETTINGS
========================================== */

export const getUserSettings = asyncHandler(async (req, res) => {
  const settings = await getSettings(req.user._id);

  return res
    .status(200)
    .json(new ApiResponse(200, settings, "Settings fetched successfully."));
});

/* ==========================================
          CHANGE PASSWORD
========================================== */

export const updatePassword = asyncHandler(async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  await changePassword(req.user._id, currentPassword, newPassword);

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password changed successfully."));
});

/* ==========================================
      LOGOUT FROM ALL DEVICES
========================================== */

export const logoutEverywhere = asyncHandler(async (req, res) => {
  await logoutAllDevices(req.user._id);

  return res
    .status(200)
    .json(
      new ApiResponse(200, {}, "Logged out from all devices successfully."),
    );
});

/* ==========================================
          DELETE ACCOUNT
========================================== */

export const removeAccount = asyncHandler(async (req, res) => {
  const { password } = req.body;

  await deleteAccount(req.user._id, password);

  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Account deleted successfully."));
});
