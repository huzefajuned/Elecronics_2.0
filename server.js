const express = require('express');
const bodyParser = require('body-parser')

const dotenv = require("dotenv");
dotenv.config()

require('./Connection/DataBase');


const sellerItemRoute = require("./Routes/seller.item.route");
const sellerAuthRoute = require('./Routes/auth.seller.route')


const app = express();
const PORT = process.env.PORT;


app.use(sellerItemRoute, sellerAuthRoute)

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