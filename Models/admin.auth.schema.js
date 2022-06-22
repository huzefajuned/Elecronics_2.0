const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    pricemaile: {
        type: String,
        // required: true
    },
    password: {
        type: String,
        // required: true
    }
})


const adminAuthSchema = mongoose.model('adminAuthSchema', adminSchema);
module.exports = adminAuthSchema;