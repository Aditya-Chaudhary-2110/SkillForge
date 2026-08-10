import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { getSkillRoadmap } from "../controllers/roadmap.controller.js";

const router = Router();

router.use(verifyJWT);

router.get("/:skillSlug", getSkillRoadmap);

export default router;
