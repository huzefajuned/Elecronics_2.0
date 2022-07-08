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
            res.status(200).send({ message: "fill all Field okkk" });
            return;
        }
        const sellerLogin = await AuthSellerSchema.findOne({ email: req.body.email });

        if (sellerLogin) {
            const comparePass = await bcrypt.compare(req.body.password, sellerLogin.password);

            if (comparePass) {
                jwt.sign({ sellerLogin }, config, {
                    algorithm: "HS256", expiresIn: '24h',
                }, (err, token) => {

                    res.status(201).send({ sellerLogin, auth: token, message: 'Seller Logged In!', })
                    // console.log(token.auth)

                });
            } else {
                res.status(202).send({ message: "Wrong username or password." });

            }
        } else {
            res.status(202).send({ message: "Not a seller" });

        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal Server error Occured" });
    }

}


// const index = (req, res) => {
//     res.json({
//         success: true,
//         message: 'Index page'
//     })
// };


module.exports = { sellerRegister, sellerLogin }