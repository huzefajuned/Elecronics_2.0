// const bcrypt = require("bcrypt")

const authSellerSchema = require('../Models/auth.seller.schema')



//creating sellerRegister controller
const sellerRegister = async (req, res, next) => {
    try {

        const authSeller = new authSellerSchema({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })

        const newSeller = await authSeller.save();
        console.log(authSeller);
        console.log(newSeller)

    } catch (error) {
        console.log(error)
    }





    // console.log(authSellerSchema.name)
    // console.log("regsiter is hit by postman");
    // res.send({ message: "okk regsiter" })
}

//creating adminLogin controller
const sellerLogin = (req, res, next) => {

    console.log("login is hit by postman");
    res.send({ message: "okk" })
}


module.exports = { sellerRegister, sellerLogin }