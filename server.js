const express = require('express');
const bodyParser = require('body-parser')

const dotenv = require("dotenv");
dotenv.config()

require('./Connection/DataBase');

const User = require('./Routes/user.route');
const itemRoute = require('./Routes/item.route');
const adminAuthRoute = require("./Routes/admin.auth.route")

const app = express();
const PORT = process.env.PORT;
app.use(User, itemRoute, adminAuthRoute)

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.json());

app.use('/public/', express.static("public"));
app.use('/uploads/', express.static("uploads"));
app.use('/Admin/uploads/', express.static("uploads"));



app.listen(PORT, () => {
    console.log("Listening Port at " + PORT)
    // console.log(PORT, "hii")
})