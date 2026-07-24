import { Router } from "express";
import {
  create,
  getAll,
  getById,
  update,
  remove,
} from "../controllers/progress.controller.js";
import validate from "../middlewares/validate.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  createProgressValidator,
  updateProgressValidator,
} from "../validators/progress.validator.js";

const router = Router();

router.use(verifyJWT);

router.post("/", validate(createProgressValidator), create);

router.get("/", getAll);

router.get("/:id", getById);

router.put("/:id", validate(updateProgressValidator), update);

router.delete("/:id", remove);

export default router;
