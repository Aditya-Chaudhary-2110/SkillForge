import Joi from "joi";

export const createResourceValidator = Joi.object({
  topic: Joi.string().required(),

  type: Joi.string()
    .valid("note", "coding", "mcq", "interview", "ai")
    .required(),

  title: Joi.string().trim().required(),

  content: Joi.object().required(),

  order: Joi.number().integer().min(0).optional(),

  isPublished: Joi.boolean().optional(),
});

export const updateResourceValidator = Joi.object({
  topic: Joi.string().optional(),

  type: Joi.string()
    .valid("note", "coding", "mcq", "interview", "ai")
    .optional(),

  title: Joi.string().trim().optional(),

  content: Joi.object().optional(),

  order: Joi.number().integer().min(0).optional(),

  isPublished: Joi.boolean().optional(),
}).min(1);
