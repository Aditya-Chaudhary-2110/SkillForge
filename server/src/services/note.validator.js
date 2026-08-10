import Joi from "joi";

export const createNoteValidator = Joi.object({
  title: Joi.string().trim().required(),

  slug: Joi.string().trim().lowercase().required(),

  content: Joi.string().required(),

  topic: Joi.string().optional().allow(null),

  type: Joi.string().valid("manual", "ai").default("manual"),
});

export const updateNoteValidator = Joi.object({
  title: Joi.string().trim(),

  content: Joi.string(),

  topic: Joi.string().allow(null),

  type: Joi.string().valid("manual", "ai"),
});
