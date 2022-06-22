const express = require('express');
const bodyParser = require('body-parser')

// const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config()

require('./Connection/DataBase');

const prodAuth = require('./Routes/prodAuth');
const User = require('./Routes/userAuth');
// const userAuth = require('./Routes/userAuth');

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
// app.use(User, prodAuth);

app.use(User, prodAuth);
// app.use(userAuth);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/public/', express.static("public"));
app.use('/uploads/', express.static("uploads"));
app.use('/Admin/uploads/', express.static("uploads"));



app.listen(PORT, () => {
    console.log("Listening Port at " + PORT)
    // console.log(PORT, "hii")
})