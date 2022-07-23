const express = require("express");
const router = express.Router();

const sellerItemController = require('../Controllers/seller.item.controller');
const verifyToken = require('../middleware/auth.seller.middleware');

//createing a new item
router.post('/item', verifyToken, sellerItemController.upload.single("image"), sellerItemController.insert);

//Retriving all items
router.get('/item', verifyToken, sellerItemController.read);

//  filtering  item through search
router.get("/item/search/:model", sellerItemController.seacrh)

//Retriving all items
router.get('/allItems', sellerItemController.read);

//Deleting an item using Id
router.delete('/item/:id', verifyToken, sellerItemController.deleteById);

//Updating an item using Id
router.put('/item/:id', verifyToken, sellerItemController.updateById);

module.exports = router 