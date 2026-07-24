import { Router } from "express";
import {
  create,
  getAll,
  getById,
  update,
  remove,
} from "../controllers/skill.controller.js";
import validate from "../middlewares/validate.middleware.js";
import {
  createSkillValidator,
  updateSkillValidator,
} from "../validators/skill.validator.js";

const router = Router();

router.post("/", validate(createSkillValidator), create);
router.put("/:id", validate(updateSkillValidator), update);

router.get("/", getAll);

router.get("/:id", getById);

router.delete("/:id", remove);

export default router;
