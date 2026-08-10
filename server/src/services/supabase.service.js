import fs from "fs";

import supabase from "../config/supabase.config.js";

/* ==========================================
            GENERIC UPLOAD
========================================== */

const uploadFile = async (file, folder) => {
  const fileBuffer = fs.readFileSync(file.path);

  const fileName = `${folder}/${Date.now()}-${file.originalname.replace(/\s+/g, "-")}`;

  const { error } = await supabase.storage
    .from(process.env.SUPABASE_BUCKET)
    .upload(fileName, fileBuffer, {
      contentType: file.mimetype,
      upsert: false,
    });

  if (error) {
    throw error;
  }

  const { data } = supabase.storage
    .from(process.env.SUPABASE_BUCKET)
    .getPublicUrl(fileName);

  if (!data?.publicUrl) {
    throw new Error("Failed to generate public URL.");
  }

  return {
    publicId: fileName,
    secure_url: data.publicUrl,
  };
};

/* ==========================================
            RESUME
========================================== */

export const uploadResume = async (file) => {
  return uploadFile(file, "resumes");
};

export const deleteResume = async (publicId) => {
  const { error } = await supabase.storage
    .from(process.env.SUPABASE_BUCKET)
    .remove([publicId]);

  if (error) {
    throw error;
  }

  return true;
};

/* ==========================================
            AVATAR
========================================== */

export const uploadAvatar = async (file) => {
  return uploadFile(file, "avatars");
};

export const deleteAvatar = async (publicId) => {
  const { error } = await supabase.storage
    .from(process.env.SUPABASE_BUCKET)
    .remove([publicId]);

  if (error) {
    throw error;
  }

  return true;
};
