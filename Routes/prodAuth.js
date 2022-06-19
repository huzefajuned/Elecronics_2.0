const express = require('express');
const router = express.Router();
const multer = require("multer");
const fs = require("fs")


require('../Connection/DataBase');


const prodSchema = require('../Models/prodSchema');


//REtriving all ProductData FRom MOngoDb Backend........;;;;;;

router.get('/product/read', (req, res) => {

    try {
        prodSchema.find({}, (err, result) => {
            if (err) {
                res.send(err)
            }
            res.send(result)
        })
    } catch (error) {
        console.log(error)
    }
})

// *************
// / MULTER STORAGE..

const Storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: Storage }).single("image");

// ********* insert new Product
router.post('/product/insert', upload, async (req, res) => {
    const { image, price, model, description, category } = req.body;
    // if (!image || !price || !model || !description || !category) {
    //     res.status(400).json({ message: "fill all data" })
    //     console.log('errr')
    // }
    try {
        const newProduct = new prodSchema({
            image: req.file.path,
            price: req.body.price,
            model: req.body.model,
            description: req.body.description,
            category: req.body.category
        });
        const finalProd = await newProduct.save()
        console.log(finalProd);
        if (!finalProd) {
            res.status(402).send({ message: "product Error" })
            console.log("err")
        }
        else {
            res.status(200).send({ message: "product saved Successfully" })
        }
    } catch (error) {
        console.log(error)
    }

})

//delete a single item

router.delete("/product/read/:id", (req, res) => {
    const id = req.params.id;
    prodSchema.findByIdAndRemove(id)
        .then(data => {
            // console.log("data", data)
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete item with id=${id}. Maybe item was not found!`
                });
            } else {
                res.send({
                    
                    message: "item was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete item with id=" + id
            });
        });
});
module.exports = router;