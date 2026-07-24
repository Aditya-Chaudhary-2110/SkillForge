import {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
} from "../services/auth.service.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import {
  accessTokenOptions,
  refreshTokenOptions,
} from "../constants/cookie.constants.js";

export const register = asyncHandler(async (req, res) => {
  const { user, accessToken, refreshToken } = await registerUser(req.body);

  return res
    .status(201)
    .cookie("accessToken", accessToken, accessTokenOptions)
    .cookie("refreshToken", refreshToken, refreshTokenOptions)
    .json(
      new ApiResponse(
        201,
        {
          user,
        },
        "User registered successfully",
      ),
    );
});

export const login = asyncHandler(async (req, res) => {
  const { user, accessToken, refreshToken } = await loginUser(req.body);

  return res
    .status(200)
    .cookie("accessToken", accessToken, accessTokenOptions)
    .cookie("refreshToken", refreshToken, refreshTokenOptions)
    .json(
      new ApiResponse(
        200,
        {
          user,
        },
        "User logged in successfully",
      ),
    );
});

export const getCurrentUser = asyncHandler(async (req, res) => {
  return res.status(200).json(
    new ApiResponse(
      200,
      {
        user: req.user,
      },
      "Current user fetched successfully",
    ),
  );
});

export const logout = asyncHandler(async (req, res) => {
  await logoutUser(req.user._id);

  return res
    .status(200)
    .clearCookie("accessToken", accessTokenOptions)
    .clearCookie("refreshToken", refreshTokenOptions)
    .json(new ApiResponse(200, {}, "User logged out successfully"));
});

export const refreshToken = asyncHandler(async (req, res) => {
  const refreshTokenCookie = req.cookies?.refreshToken;

  const { accessToken, refreshToken: newRefreshToken } =
    await refreshAccessToken(refreshTokenCookie);

  return res
    .status(200)
    .cookie("accessToken", accessToken, accessTokenOptions)
    .cookie("refreshToken", newRefreshToken, refreshTokenOptions)
    .json(new ApiResponse(200, {}, "Access token refreshed successfully"));
});
