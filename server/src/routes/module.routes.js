import { Router } from "express";
import {
  create,
  getAll,
  getById,
  update,
  remove,
} from "../controllers/module.controller.js";
import validate from "../middlewares/validate.middleware.js";
import {
  createModuleValidator,
  updateModuleValidator,
} from "../validators/module.validator.js";

const router = Router();

router.post("/", validate(createModuleValidator), create);

router.get("/", getAll);

router.get("/:id", getById);

router.put("/:id", validate(updateModuleValidator), update);

router.delete("/:id", remove);

export default router;
