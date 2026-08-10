import {
  uploadResume,
  getResume,
  analyzeResume,
  deleteResume,
  reanalyzeResume,
} from "../api/resume.api";

/* ==========================================
UPLOAD RESUME
========================================== */

export const uploadUserResume = async (file) => {
  const formData = new FormData();

  formData.append("resume", file);

  return await uploadResume(formData);
};

/* ==========================================
GET RESUME
========================================== */

export const fetchResume = async () => {
  return await getResume();
};

/* ==========================================
ANALYZE RESUME
========================================== */

export const analyzeUserResume = async () => {
  return await analyzeResume();
};

/* ==========================================
REANALYZE RESUME
========================================== */

export const reanalyzeUserResume = async () => {
  return await reanalyzeResume();
};

/* ==========================================
DELETE RESUME
========================================== */

export const deleteUserResume = async () => {
  return await deleteResume();
};
