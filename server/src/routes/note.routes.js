import { Router } from "express";

import {
  create,
  saveAIToNotes,
  getAll,
  getById,
  update,
  remove,
  getTodayStats,
} from "../controllers/note.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";
import validate from "../middlewares/validate.middleware.js";

import {
  createNoteValidator,
  updateNoteValidator,
} from "../validators/note.validator.js";

const router = Router();

router.use(verifyJWT);

router.post("/", validate(createNoteValidator), create);

router.post("/save-ai", saveAIToNotes);

// ================= Dashboard =================
router.get("/today-stats", getTodayStats);

router.get("/", getAll);

router.get("/:id", getById);

router.put("/:id", validate(updateNoteValidator), update);

router.delete("/:id", remove);

export default router;
