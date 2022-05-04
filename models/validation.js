const Joi = require('@hapi/joi');

// Register Validate
const registerValidation = function(data){
    const schema = Joi.object ({
        name:Joi.string(),
        email: Joi.string()
                   .email()
                   .min(6)
                   .required(),
        password: Joi.string()
                   .min(6)
                   .required(),
        phone : Joi.string(),
        role : Joi.string()
                          
    })
   return  schema.validate(data)
}
const loginValidation = function(data){
    const schema = Joi.object ({
        email: Joi.string()
                   .email()
                   .min(6)
                   .required(),
        password: Joi.string()
                   .min(6)
                   .required(),
                          
    })
   return  schema.validate(data)
}
module.exports = {registerValidation,loginValidation}