import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import { searchContent } from "../services/search.service.js";

export const search = asyncHandler(async (req, res) => {
  const { q } = req.query;

  if (!q || !q.trim()) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "Search query is required."));
  }

  const results = await searchContent(q.trim());

  return res
    .status(200)
    .json(new ApiResponse(200, results, "Search completed successfully."));
});
