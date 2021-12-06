const mongoose = require('mongoose');
const Joi = require('joi');

const customerSchema = new mongoose.Schema({
    ProductCategory: {
        type: String,
        minlength: 5,
        maxlength: 50,
        required: true
    },
    ProductName: {
        type: String,
        minlength: 5,
        maxlength: 50,
        required: true
    }, 
    ProductOne: {
        type: String,
        minlength: 5,
        maxlength: 50,
        
    },
    ProductTwo: {
        type: String,
        minlength: 5,
        maxlength: 50,
       
    },
    ProductThird: {
        type: String,
        minlength: 5,
        maxlength: 50,
        
    },
    ProductFourth: {
        type: String,
        minlength: 5,
        maxlength: 50,
        
    },
});

const Customer = mongoose.model('Customer', customerSchema);

const validateCustomer = (customer) => {
    const schema = {
        ProductCategory: Joi.string().min(5).max(50).required(),
        ProductName: Joi.string().min(5).max(50).required(),
        ProductOne: Joi.string().min(5).max(50),
        ProductTwo: Joi.string().min(5).max(50),
        ProductThird: Joi.string().min(5).max(50),
        ProductFourth: Joi.string().min(5).max(50),
    }
    return Joi.validate(customer, schema);
}


module.exports.Customer = Customer;
module.exports.validate = validateCustomer;