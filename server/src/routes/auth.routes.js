import { Router } from "express";

import {
  register,
  login,
  logout,
  getCurrentUser,
  refreshToken,
} from "../controllers/auth.controller.js";

import validate from "../middlewares/validate.middleware.js";
import upload from "../middlewares/upload.middleware.js";

import {
  registerValidator,
  loginValidator,
} from "../validators/auth.validator.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

/* ==========================================
            AUTH
========================================== */

router.post(
  "/register",
  upload.single("avatar"),
  validate(registerValidator),
  register,
);

router.post("/login", validate(loginValidator), login);

router.post("/refresh-token", refreshToken);

router.get("/me", verifyJWT, getCurrentUser);

router.post("/logout", verifyJWT, logout);

export default router;
