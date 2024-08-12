const express = require("express");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");
dotenv.config();

require("./Connection/DataBase");

const sellerItemRoute = require("./Routes/seller.item.route");
const sellerAuthRoute = require("./Routes/auth.seller.route");
const buyerAuthRoute = require("./Routes/auth.buyer.route");

const app = express();
const PORT = process.env.PORT;

// parse application/json data
app.use(bodyParser.json());
app.use(express.json());

// app.use(sellerItemRoute, sellerAuthRoute,userAuth)

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(sellerAuthRoute);
app.use(sellerItemRoute);
app.use(buyerAuthRoute);

app.use("/public/", express.static("public"));
app.use("/uploads/", express.static("uploads"));
app.use("/Seller_Dashboard/uploads/", express.static("uploads"));

app.listen(PORT, () => {
  console.log("Listening Port at " + PORT);
});
