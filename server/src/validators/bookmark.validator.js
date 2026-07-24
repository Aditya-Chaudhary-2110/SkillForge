import Joi from "joi";

export const createBookmarkValidator = Joi.object({
  resource: Joi.string().required(),
});

export const updateBookmarkValidator = Joi.object({});
