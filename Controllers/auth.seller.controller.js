// const bcrypt = require("bcrypt")
const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const AuthSellerSchema = require('../Models/auth.seller.schema')


const config = "mysecretkeyishere"


//creating sellerRegister controller
const sellerRegister = async (req, res) => {
    const { name, email, password } = req.body;
    try {

        if (!name || !email || !password) {
            res.status(200).send({ message: "fill all Fields" });
            return;
        }
        const alreadySeller = await AuthSellerSchema.findOne({ email: req.body.email });
        if (alreadySeller) {
            res.status(202).send({ message: "already registered as seller" })
            return;
        }

        //hashing password using bcrypt.js
        const salt = await bcrypt.genSaltSync(10);
        const secPassword = await bcrypt.hashSync(password, salt)

        const authSeller = new AuthSellerSchema({
            name: req.body.name,
            email: req.body.email,
            password: secPassword
        })
        // console.log(password);
        // console.log(secPassword)
        const newSeller = await authSeller.save();

        if (newSeller) {
            res.status(201).send({ message: "registred successfully" })
        }

    } catch (error) {
        res.status(500).send({ message: "internal server error" })
        // console.log(error)
    }
}

//creating adminLogin controller
const sellerLogin = async (req, res) => {
    const { email, password } = req.body;


    try {
        if (!email || !password) {
            res.status(200).send({ message: "fill all Fields" });
            return;
        }
        const sellerLogin = await AuthSellerSchema.findOne({ email: req.body.email });

        if (sellerLogin) {
            const comparePass = await bcrypt.compare(req.body.password, sellerLogin.password);

            if (comparePass) {
                // res.status(201).send({ message: "seller LoggedIn " })
                const token = jwt.sign({ email }, config, {
                    algorithm: "HS256",
                    expiresIn: '24h',
                });
                console.log("token", token);
                res.status(200).json({
                    message: 'Seller Logged In!',
                    token: token,
                    success: true,

                });

            } else {
                res.status(202).send({ message: "Wrong username or password." });

            }
            console.log(sellerLogin)
        } else {
            res.status(202).send({ message: "Not a seller" });

        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal Server error Occured" });
    }

}
const index = (req, res) => {
    res.json({
        success: true,
        message: 'Index page'
    })
};


module.exports = { sellerRegister, sellerLogin, index }