const Joi = require('@hapi/joi');
const registerValidation = function(data){
    const schema = Joi.object ({
        name: Joi.string()
                 .min(4),
        email: Joi.string()
                   .email()
                   .min(6)
                   .required(),
        password: Joi.string()
                   .min(6)
                   .required(),
        phone: Joi.string()
                   .min(6),
        role: Joi.string()
                   .min(2)
                          
    })
   return  schema.validate(data)
}
module.exports.registerValidation = registerValidation
