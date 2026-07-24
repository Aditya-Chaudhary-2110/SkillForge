import { Router } from "express";
import {
  create,
  getAll,
  getById,
  remove,
} from "../controllers/bookmark.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import validate from "../middlewares/validate.middleware.js";
import { createBookmarkValidator } from "../validators/bookmark.validator.js";

const router = Router();

router.use(verifyJWT);

router.post("/", validate(createBookmarkValidator), create);

router.get("/", getAll);

router.get("/:id", getById);

router.delete("/:id", remove);

export default router;
