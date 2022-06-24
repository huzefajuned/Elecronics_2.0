const logger = (req, res, next) => {
    res.send({ message: "logger is on" })
    console.log("loggggger on")
}
module.exports=logger;