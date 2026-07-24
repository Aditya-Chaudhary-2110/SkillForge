import Joi from "joi";

export const createModuleValidator = Joi.object({
  skill: Joi.string().required(),

  name: Joi.string().trim().required(),

  slug: Joi.string().trim().lowercase().required(),

  description: Joi.string().trim().required(),

  order: Joi.number().integer().min(0).optional(),

  isPublished: Joi.boolean().optional(),
});

export const updateModuleValidator = Joi.object({
  skill: Joi.string().optional(),

  name: Joi.string().trim().optional(),

  slug: Joi.string().trim().lowercase().optional(),

  description: Joi.string().trim().optional(),

  order: Joi.number().integer().min(0).optional(),

  isPublished: Joi.boolean().optional(),
}).min(1);
