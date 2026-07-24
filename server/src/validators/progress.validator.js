import Joi from "joi";

export const createProgressValidator = Joi.object({
  topic: Joi.string().required(),

  isCompleted: Joi.boolean().optional(),

  completedAt: Joi.date().optional(),
});

export const updateProgressValidator = Joi.object({
  isCompleted: Joi.boolean().optional(),

  completedAt: Joi.date().allow(null).optional(),
}).min(1);
