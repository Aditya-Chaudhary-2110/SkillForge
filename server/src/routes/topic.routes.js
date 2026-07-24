import { Router } from "express";
import {
  create,
  getAll,
  getById,
  update,
  remove,
} from "../controllers/topic.controller.js";
import validate from "../middlewares/validate.middleware.js";
import {
  createTopicValidator,
  updateTopicValidator,
} from "../validators/topic.validator.js";

const router = Router();

router.post("/", validate(createTopicValidator), create);

router.get("/", getAll);

router.get("/:id", getById);

router.put("/:id", validate(updateTopicValidator), update);

router.delete("/:id", remove);

export default router;
