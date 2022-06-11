const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()

const DataBase =
    mongoose.connect(process.env.DataBase).then(() => {
        console.log(" Connected To Electronics DataBase")
    })
        .catch(
            (error) => {
                console.log("Error To Connection DataBase" + error)
                exit(1)
            }
        )


module.exports = DataBase;