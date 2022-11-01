import * as Joi from 'joi';

export const envValidation = {
  validationSchema: Joi.object({
    PORT: Joi.number().default(3000),
    NEWS_API_TOKEN: Joi.string().required(),
  }),
};
