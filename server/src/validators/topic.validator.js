import Joi from "joi";

export const createTopicValidator = Joi.object({
  module: Joi.string().required(),

  name: Joi.string().trim().required(),

  slug: Joi.string().trim().lowercase().required(),

  description: Joi.string().trim().required(),

  estimatedTime: Joi.number().integer().min(0).optional(),

  difficulty: Joi.string()
    .valid("Beginner", "Intermediate", "Advanced")
    .optional(),

  order: Joi.number().integer().min(0).optional(),

  isPublished: Joi.boolean().optional(),
});

export const updateTopicValidator = Joi.object({
  module: Joi.string().optional(),

  name: Joi.string().trim().optional(),

  slug: Joi.string().trim().lowercase().optional(),

  description: Joi.string().trim().optional(),

  estimatedTime: Joi.number().integer().min(0).optional(),

  difficulty: Joi.string()
    .valid("Beginner", "Intermediate", "Advanced")
    .optional(),

  order: Joi.number().integer().min(0).optional(),

  isPublished: Joi.boolean().optional(),
}).min(1);
