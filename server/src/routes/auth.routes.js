import { Router } from "express";
import {
  register,
  login,
  getCurrentUser,
  logout,
  refreshToken,
} from "../controllers/auth.controller.js";
import validate from "../middlewares/validate.middleware.js";
import {
  registerValidator,
  loginValidator,
} from "../validators/auth.validator.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", validate(registerValidator), register);

router.post("/login", validate(loginValidator), login);

router.post("/refresh-token", refreshToken);

router.get("/me", verifyJWT, getCurrentUser);

router.post("/logout", verifyJWT, logout);

export default router;
