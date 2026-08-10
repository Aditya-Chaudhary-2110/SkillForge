import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import { buildDashboard } from "../services/progressEngine/buildDashboard.js";

export const getDashboard = asyncHandler(async (req, res) => {
  const dashboard = await buildDashboard({
    userId: req.user._id,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, dashboard, "Dashboard fetched successfully"));
});
