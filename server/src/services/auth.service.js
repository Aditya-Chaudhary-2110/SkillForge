import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import { generateAccessAndRefreshTokens } from "./token.service.js";

export const registerUser = async (userData) => {
  const { fullName, email, password } = userData;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new ApiError(409, "User already exists");
  }

  const user = await User.create({
    fullName,
    email,
    password,
  });

  const { accessToken, refreshToken } =
    await generateAccessAndRefreshTokens(user);

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken",
  );

  if (!createdUser) {
    throw new ApiError(500, "Failed to create user");
  }

  return {
    user: createdUser,
    accessToken,
    refreshToken,
  };
};

export const loginUser = async (loginData) => {
  const { email, password } = loginData;

  // Check if user exists
  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(401, "Invalid email or password");
  }

  // Compare password
  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new ApiError(401, "Invalid email or password");
  }

  // Generate new tokens
  const { accessToken, refreshToken } =
    await generateAccessAndRefreshTokens(user);

  // Get sanitized user
  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken",
  );

  if (!loggedInUser) {
    throw new ApiError(500, "Failed to login user");
  }

  return {
    user: loggedInUser,
    accessToken,
    refreshToken,
  };
};

export const logoutUser = async (userId) => {
  await User.findByIdAndUpdate(
    userId,
    {
      $set: {
        refreshToken: "",
      },
    },
    {
      new: true,
    },
  );
};

export const refreshAccessToken = async (refreshToken) => {
  // Step 1: Check if refresh token exists
  if (!refreshToken) {
    throw new ApiError(401, "Unauthorized request");
  }

  let decodedToken;

  try {
    decodedToken = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
  } catch (error) {
    throw new ApiError(401, "Invalid or expired refresh token");
  }

  const user = await User.findById(decodedToken._id);

  if (!user) {
    throw new ApiError(401, "Invalid refresh token");
  }

  if (refreshToken !== user.refreshToken) {
    throw new ApiError(401, "Refresh token is invalid or has been used");
  }

  const { accessToken, refreshToken: newRefreshToken } =
    await generateAccessAndRefreshTokens(user);

  return {
    accessToken,
    refreshToken: newRefreshToken,
  };
};
