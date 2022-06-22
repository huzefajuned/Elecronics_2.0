const adminAuthSchema = require("../Models/admin.auth.schema");
const bcrypt = require("bcrypt")

//creating adminRegister controller
const adminRegister = async (req, res) => {
    const { name, email, password } = req.body;

    try {

        // const userExist = await adminAuthSchema.findOne({ email:email });
        // if (userExist) {
        //     res.status(400).send({ message: "Admin Exists" });
        //     return;
        // }

        // const salt = await bcrypt.genSalt(10);
        // const secPassword = await bcrypt.hash(password, salt)

        const newAdmin = await new adminAuthSchema({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        console.log(newAdmin)

        const admin = await newAdmin.save();
        if (admin) {
            console.log("admin", admin)
            res.status(200).send({ message: "Admin Created Successfully" });
        }


    } catch (error) {
        console.log(error)
        res.status(401).send({ message: "Internal Server Error " });

    }

}

//creating adminLogin controller
const adminLogin = () => {
    console.log("login")
}


module.exports = { adminRegister, adminLogin }