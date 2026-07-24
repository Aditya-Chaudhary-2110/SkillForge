import { Router } from "express";
import {
  create,
  getAll,
  getById,
  update,
  remove,
  getByTopic,
} from "../controllers/resource.controller.js";
import validate from "../middlewares/validate.middleware.js";
import {
  createResourceValidator,
  updateResourceValidator,
} from "../validators/resource.validator.js";

const router = Router();

router.post("/", validate(createResourceValidator), create);

router.get("/", getAll);

router.get("/topic/:topicId", getByTopic);

router.get("/:id", getById);

router.put("/:id", validate(updateResourceValidator), update);

router.delete("/:id", remove);

export default router;
