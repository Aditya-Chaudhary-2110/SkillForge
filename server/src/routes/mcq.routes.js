import { Router } from "express";

import { getMCQs } from "../controllers/mcq.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.use(verifyJWT);

router.get("/:skillSlug/:moduleSlug/:topicSlug", getMCQs);

export default router;
