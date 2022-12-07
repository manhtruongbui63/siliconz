const Joi = require("@hapi/joi");
const { join } = require("path");

const validateParam = (schema, name) => {
  return (req, res, next) => {
    const validatorResult = schema.validate({ param: req.params[name] });

    if (validatorResult.error) {
      return res.status(400).json(validatorResult.error);
    } else {
      if (!req.value) {
        req.value = {};
      }
      if (!req.value["params"]) {
        req.value["params"] = {};
      }
      req.value.body = validatorResult.value
      next();
    }
  };
};

const validateBody = (schema) => {
  return (req, res, next) => {
    const validateResult = schema.validate(req.body);
    if (validateResult.error) {
      return res.status(400).json(validateResult.error);
    } else {
      if (!req.value) {
        req.value = {};
      }
      if (!req.value["params"]) {
        req.value["params"] = {};
      }
      next();
    }
  };
};

const schemas = {
  idSchema: Joi.object().keys({
    param: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
  }),
  userSchema: Joi.object().keys({
    firstName: Joi.string().required().min(2),
    lastName: Joi.string().required().min(2),
    email: Joi.string().email().required(),
  }),
};

module.exports = {
  validateParam,
  schemas,
};
