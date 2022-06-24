const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        // required: true
    },
    password: {
        type: String,
        // required: true
    }
})


const authSellerSchema = mongoose.model('authSellerSchema', sellerSchema);
module.exports = authSellerSchema;