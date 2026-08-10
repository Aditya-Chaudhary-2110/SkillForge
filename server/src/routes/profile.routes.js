import { Router } from "express";

import { verifyJWT } from "../middlewares/auth.middleware.js";

import {
  getMyProfile,
  updateMyProfile,
} from "../controllers/profile.controller.js";

const router = Router();

router.use(verifyJWT);

router.get("/", getMyProfile);

router.patch("/", updateMyProfile);

export default router;
