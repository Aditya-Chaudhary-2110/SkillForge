import { Router } from "express";

import { verifyJWT } from "../middlewares/auth.middleware.js";
import validate from "../middlewares/validate.middleware.js";

import {
  changePasswordSchema,
  deleteAccountSchema,
} from "../validators/settings.validator.js";

import {
  getUserSettings,
  updatePassword,
  logoutEverywhere,
  removeAccount,
} from "../controllers/settings.controller.js";

const router = Router();

/* ==========================================
            GET SETTINGS
========================================== */

router.get("/", verifyJWT, getUserSettings);

/* ==========================================
          CHANGE PASSWORD
========================================== */

router.patch(
  "/password",
  verifyJWT,
  validate(changePasswordSchema),
  updatePassword,
);

/* ==========================================
      LOGOUT FROM ALL DEVICES
========================================== */

router.post("/logout-all", verifyJWT, logoutEverywhere);

/* ==========================================
          DELETE ACCOUNT
========================================== */

router.delete("/", verifyJWT, validate(deleteAccountSchema), removeAccount);

export default router;
