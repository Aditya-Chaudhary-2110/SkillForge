import Joi from "joi";

export const registerValidator = Joi.object({
  fullName: Joi.string().trim().min(3).max(25).required(),

  email: Joi.string().email().trim().lowercase().required(),

  password: Joi.string().min(5).required(),
});

export const loginValidator = Joi.object({
  email: Joi.string().email().trim().lowercase().required(),

  password: Joi.string().required(),
});
