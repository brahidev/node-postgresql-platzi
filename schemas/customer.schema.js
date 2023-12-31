const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const lastname = Joi.string()
const phone = Joi.string()
const email = Joi.string().email()
const password = Joi.string()
const userId = Joi.number().integer();

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastname: lastname.required(),
  phone: phone.required(),
  user: Joi.object({
    email: email.required(),
    password: password.required()
  })
});

const updateCustomerSchema = Joi.object({
    name: name,
    phone: phone,
    userId: userId
});

const getCustomerSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema }
