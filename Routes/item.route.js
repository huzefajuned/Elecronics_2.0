const express = require("express");
const router = express.Router();


const itemController = require("../Controllers/item.controller.js");
const { read,insert } = require("../Controllers/item.controller")

//createing a new item
router.post('/item', itemController.insert);

//Retriving all items
router.get('/item', itemController.read);

//Deleting an item using Id
router.delete('/item/:id', itemController.deleteById);

//Updating an item using Id
router.put('/item/:id', itemController.updateById);

//for chekcing purpuse
router.get('/ckeckT', itemController.checkT);


module.exports = router 