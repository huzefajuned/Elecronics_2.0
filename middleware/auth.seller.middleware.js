const jwt = require("jsonwebtoken");
const config = "mysecretkeyishere"



const verifyToken = (req, res, next) => {

        let token = req.headers[`authorization`];
        if (token) {
                token = token.split(' ')[1];
                jwt.verify(token, config, (err, user) => {
                        if (err) {
                                res.send({ message: "plase provide a  token" })
                        }
                        else {
                                req.user = user;
                                next();
                        }
                })
        } else {
                res.status(200).send({ message: "plase add valid token" })
        }
}


module.exports = verifyToken;