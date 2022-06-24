const express = require('express');
const router = express.Router()

const authSellerController = require("../Controllers/auth.seller.controller");

//for admin-register
router.post("/seller/register", authSellerController.sellerRegister);

//for admin-login
router.post("/seller/login", authSellerController.sellerLogin);


module.exports = router