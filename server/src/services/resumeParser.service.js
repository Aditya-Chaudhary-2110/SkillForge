import fs from "fs";
import pdfParse from "pdf-parse-new";
import mammoth from "mammoth";

/* ==========================================
            PARSE PDF
========================================== */

export const parsePDF = async (filePath) => {
  const buffer = fs.readFileSync(filePath);

  const data = await pdfParse(buffer);

  return data.text;
};

/* ==========================================
            PARSE DOCX
========================================== */

export const parseDOCX = async (filePath) => {
  const result = await mammoth.extractRawText({
    path: filePath,
  });

  return result.value;
};

/* ==========================================
        EXTRACT RESUME TEXT
========================================== */

export const extractResumeText = async (filePath, mimeType) => {
  switch (mimeType) {
    case "application/pdf":
      return await parsePDF(filePath);

    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return await parseDOCX(filePath);

    default:
      throw new Error(`Unsupported resume format: ${mimeType}`);
  }
};
