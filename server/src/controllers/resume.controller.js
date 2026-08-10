import fs from "fs";

import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

import Resume from "../models/resume.model.js";

import {
  uploadResume as uploadResumeToSupabase,
  deleteResume as deleteResumeFromSupabase,
} from "../services/supabase.service.js";

import { extractResumeText } from "../services/resumeParser.service.js";
import { analyzeResume } from "../services/resumeAnalysis.service.js";

/* ==========================================================
   UPLOAD RESUME
========================================================== */

export const uploadResume = asyncHandler(async (req, res) => {
  if (!req.file) {
    throw new ApiError(400, "Resume file is required.");
  }

  const existingResume = await Resume.findOne({
    user: req.user._id,
  });

  let resumeText;
  let uploaded;

  try {
    // ==========================================
    // Extract Resume Text
    // ==========================================

    resumeText = await extractResumeText(req.file.path, req.file.mimetype);

    if (!resumeText || !resumeText.trim()) {
      throw new ApiError(400, "Unable to extract text from the resume.");
    }

    // ==========================================
    // Upload New Resume to Supabase
    // ==========================================

    uploaded = await uploadResumeToSupabase(req.file);

    // ==========================================
    // Delete Old Resume From Supabase
    // ==========================================

    if (existingResume?.publicId) {
      try {
        await deleteResumeFromSupabase(existingResume.publicId);
      } catch (error) {
        // Do not fail the new upload just because
        // the old Supabase file could not be deleted.
        console.error("Failed to delete old resume from Supabase:", error);
      }
    }

    // ==========================================
    // Replace MongoDB Resume
    // ==========================================

    if (existingResume) {
      existingResume.originalName = req.file.originalname;
      existingResume.fileUrl = uploaded.secure_url;
      existingResume.publicId = uploaded.publicId;
      existingResume.fileSize = req.file.size;
      existingResume.fileType = req.file.mimetype;
      existingResume.extractedText = resumeText;

      // New resume requires fresh analysis
      existingResume.analysis = null;

      await existingResume.save();
    } else {
      await Resume.create({
        user: req.user._id,
        originalName: req.file.originalname,
        fileUrl: uploaded.secure_url,
        publicId: uploaded.publicId,
        fileSize: req.file.size,
        fileType: req.file.mimetype,
        extractedText: resumeText,
        analysis: null,
      });
    }
  } catch (error) {
    // ==========================================
    // Delete Newly Uploaded Supabase File
    // If something failed after uploading it
    // ==========================================

    if (uploaded?.publicId) {
      try {
        await deleteResumeFromSupabase(uploaded.publicId);
      } catch (cleanupError) {
        console.error(
          "Failed to clean up new resume from Supabase:",
          cleanupError,
        );
      }
    }

    throw new ApiError(
      error.statusCode || error.status || 500,
      error.message || "Resume processing failed.",
    );
  } finally {
    // ==========================================
    // Delete Local Temporary File
    // ==========================================

    if (req.file?.path && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
  }

  // ==========================================
  // Return Updated Resume
  // ==========================================

  const resume = await Resume.findOne({
    user: req.user._id,
  }).select("-extractedText");

  return res
    .status(201)
    .json(new ApiResponse(201, resume, "Resume uploaded successfully."));
});

/* ==========================================================
   ANALYZE RESUME
========================================================== */

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

  // ==========================================
  // Return Cached Analysis
  // ==========================================

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

  // ==========================================
  // Analyze Resume
  // ==========================================

  const analysis = await analyzeResume(resume.extractedText);

  resume.analysis = analysis;

  await resume.save();

  return res
    .status(200)
    .json(new ApiResponse(200, analysis, "Resume analyzed successfully."));
});

/* ==========================================================
   REANALYZE RESUME
========================================================== */

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

/* ==========================================================
   GET RESUME
========================================================== */

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

/* ==========================================================
   GET RESUME ANALYSIS
========================================================== */

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

/* ==========================================================
   DELETE RESUME
========================================================== */

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
