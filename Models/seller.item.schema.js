const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
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


const sellerItemSchema = mongoose.model('sellerItemSchema', itemSchema);
module.exports = sellerItemSchema;