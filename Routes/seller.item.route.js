const express = require("express");
const router = express.Router();

const sellerItemController = require('../Controllers/seller.item.controller');

//createing a new item
router.post('/item', sellerItemController.upload.single("image"), sellerItemController.insert);

//Retriving all items
router.get('/item', sellerItemController.read);

//Deleting an item using Id
router.delete('/item/:id', sellerItemController.deleteById);

//Updating an item using Id
router.put('/item/:id', sellerItemController.updateById);

//for testing purpuse
// router.get('/ckeckT', checkT);


module.exports = router 