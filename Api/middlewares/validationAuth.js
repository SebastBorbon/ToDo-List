const Joi = require("joi");

const validationRegister = Joi.object({
  name: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().required().email(),
  phone: Joi.string().required(),
  password: Joi.string()
    .min(7)
    .max(40)
    .required()
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{7,40}$/),
});

const validationLogin = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required(),
});

module.exports = {
  validationRegister,
  validationLogin,
};
