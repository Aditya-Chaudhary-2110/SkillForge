import Joi from "joi";

export const createSkillValidator = Joi.object({
  name: Joi.string().trim().required(),

  slug: Joi.string().trim().lowercase().required(),

  description: Joi.string().trim().required(),

  icon: Joi.string().trim().required(),

  color: Joi.string().trim().required(),

  order: Joi.number().integer().min(0).optional(),

  isPublished: Joi.boolean().optional(),
});

export const updateSkillValidator = Joi.object({
  name: Joi.string().trim().optional(),

  slug: Joi.string().trim().lowercase().optional(),

  description: Joi.string().trim().optional(),

  icon: Joi.string().trim().optional(),

  color: Joi.string().trim().optional(),

  order: Joi.number().integer().min(0).optional(),

  isPublished: Joi.boolean().optional(),
}).min(1);
