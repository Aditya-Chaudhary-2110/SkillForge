import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

import Resume from "../models/resume.model.js";

import { analyzeResume } from "../services/resumeAnalysis.service.js";

export const analyzeUploadedResume = asyncHandler(async (req, res) => {
  const resume = await Resume.findOne({
    user: req.user._id,
  });

  if (!resume) {
    throw new ApiError(404, "Resume not found.");
  }

  if (!resume.extractedText) {
    throw new ApiError(400, "Resume text not found.");
  }

  // Return cached analysis if it already exists
  if (resume.analysis) {
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          resume.analysis,
          "Resume analysis fetched successfully.",
        ),
      );
  }

  const analysis = await analyzeResume(resume.extractedText);

  resume.analysis = analysis;

  await resume.save();

  return res
    .status(200)
    .json(new ApiResponse(200, analysis, "Resume analyzed successfully."));
});

export const getUploadedResume = asyncHandler(async (req, res) => {
  const resume = await Resume.findOne({
    user: req.user._id,
  }).select("-extractedText");

  if (!resume) {
    throw new ApiError(404, "Resume not found.");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, resume, "Resume fetched successfully."));
});

export const getResumeAnalysis = asyncHandler(async (req, res) => {
  const resume = await Resume.findOne({
    user: req.user._id,
  });

  if (!resume) {
    throw new ApiError(404, "Resume not found.");
  }

  if (!resume.analysis) {
    throw new ApiError(404, "Resume has not been analyzed yet.");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        resume.analysis,
        "Resume analysis fetched successfully.",
      ),
    );
});

export const reanalyzeResume = asyncHandler(async (req, res) => {
  const resume = await Resume.findOne({
    user: req.user._id,
  });

  if (!resume) {
    throw new ApiError(404, "Resume not found.");
  }

  if (!resume.extractedText) {
    throw new ApiError(400, "Resume text not found.");
  }

  const analysis = await analyzeResume(resume.extractedText);

  resume.analysis = analysis;

  await resume.save();

  return res
    .status(200)
    .json(new ApiResponse(200, analysis, "Resume reanalyzed successfully."));
});

import { deleteResume as deleteResumeFromSupabase } from "../services/supabase.service.js";

export const deleteUploadedResume = asyncHandler(async (req, res) => {
  const resume = await Resume.findOne({
    user: req.user._id,
  });

  if (!resume) {
    throw new ApiError(404, "Resume not found.");
  }

  await deleteResumeFromSupabase(resume.publicId);

  await Resume.findByIdAndDelete(resume._id);

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Resume deleted successfully."));
});
