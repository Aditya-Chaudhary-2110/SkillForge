import Joi from "joi";

export const createFolderValidator = Joi.object({
  name: Joi.string().trim().required(),
});

export const updateFolderValidator = Joi.object({
  name: Joi.string().trim().required(),
});
