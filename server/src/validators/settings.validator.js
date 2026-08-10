import Joi from "joi";

export const changePasswordSchema = Joi.object({
  currentPassword: Joi.string().required().messages({
    "string.empty": "Current password is required.",
    "any.required": "Current password is required.",
  }),

  newPassword: Joi.string().min(8).required().messages({
    "string.empty": "New password is required.",
    "string.min": "New password must be at least 8 characters long.",
    "any.required": "New password is required.",
  }),
});

export const deleteAccountSchema = Joi.object({
  password: Joi.string().required().messages({
    "string.empty": "Password is required.",
    "any.required": "Password is required.",
  }),
});
