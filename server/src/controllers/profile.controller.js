import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import { getProfile, updateProfile } from "../services/profile.service.js";

export const getMyProfile = asyncHandler(async (req, res) => {
  const data = await getProfile(req.user._id);

  return res
    .status(200)
    .json(new ApiResponse(200, data, "Profile fetched successfully."));
});

export const updateMyProfile = asyncHandler(async (req, res) => {
  const profile = await updateProfile(req.user._id, req.body);

  return res
    .status(200)
    .json(new ApiResponse(200, profile, "Profile updated successfully."));
});
