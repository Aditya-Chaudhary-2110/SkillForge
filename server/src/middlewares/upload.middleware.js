import multer from "multer";
import path from "path";
import fs from "fs";

/* ==========================================
CREATE UPLOAD DIRECTORIES
========================================== */

const resumeDir = "uploads/resumes";
const avatarDir = "uploads/avatars";

[resumeDir, avatarDir].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

/* ==========================================
STORAGE
========================================== */

const storage = multer.diskStorage({
  destination(req, file, cb) {
    if (file.fieldname === "resume") {
      return cb(null, resumeDir);
    }

    if (file.fieldname === "avatar") {
      return cb(null, avatarDir);
    }

    cb(new Error("Invalid upload field."));
  },

  filename(req, file, cb) {
    const uniqueName = `${Date.now()}-${file.originalname.replace(
      /\s+/g,
      "-",
    )}`;

    cb(null, uniqueName);
  },
});

/* ==========================================
FILE FILTER
========================================== */

const fileFilter = (req, file, cb) => {
  const extension = path.extname(file.originalname).toLowerCase();

  if (file.fieldname === "resume") {
    const allowedResume = [".pdf", ".docx"];

    if (!allowedResume.includes(extension)) {
      return cb(new Error("Only PDF and DOCX files are allowed."));
    }

    return cb(null, true);
  }

  if (file.fieldname === "avatar") {
    const allowedAvatar = [".jpg", ".jpeg", ".png", ".webp"];

    if (!allowedAvatar.includes(extension)) {
      return cb(new Error("Only JPG, JPEG, PNG and WEBP images are allowed."));
    }

    return cb(null, true);
  }

  cb(new Error("Invalid upload field."));
};

/* ==========================================
MULTER
========================================== */

const upload = multer({
  storage,
  fileFilter,
});

export default upload;
