import { Router } from "express";
import {
  create,
  getAll,
  getById,
  update,
  remove,
} from "../controllers/folder.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import validate from "../middlewares/validate.middleware.js";
import {
  createFolderValidator,
  updateFolderValidator,
} from "../validators/folder.validator.js";

const router = Router();

router.use(verifyJWT);

router.post("/", validate(createFolderValidator), create);

router.get("/", getAll);

router.get("/:id", getById);

router.put("/:id", validate(updateFolderValidator), update);

router.delete("/:id", remove);

export default router;
