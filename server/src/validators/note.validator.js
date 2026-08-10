import Joi from "joi";

export const createNoteValidator = Joi.object({
  folder: Joi.string().optional(),

  title: Joi.string().trim().required(),

  content: Joi.string().allow("").optional(),
});

export const updateNoteValidator = Joi.object({
  title: Joi.string().trim().optional(),

  content: Joi.string().allow("").optional(),
}).min(1);
