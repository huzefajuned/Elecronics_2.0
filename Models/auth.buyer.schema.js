const mongoose = require("mongoose");


const buyerSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,

    }
    
})
const User = mongoose.model("User", buyerSchema);
module.exports = User;

