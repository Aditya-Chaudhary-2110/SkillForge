import { Router } from "express";

import { getAIHelper } from "../controllers/aiHelper.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.use(verifyJWT);

router.post("/", getAIHelper);

export default router;
