const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    image: {
        type: String,
        // required: true
    },
    price: {
        type: Number,
        // required: true
    },
    model: {
        type: String,
        // required: true
    },
    description: {
        type: String,
        // required: true
    },
    category: {
        type: String,
        // required: true

    }
})


const prodSchema = mongoose.model('prodSchema', productSchema);
module.exports = prodSchema;