const express = require('express');
const router = express.Router();
const multer = require("multer");
const fs = require("fs")


require('../Connection/DataBase');


const prodSchema = require('../Models/prodSchema');


//Rending ProductData to MongoDB Backend........;;;
// router.post('/product/insert', async (req, res) => {
//     const { photo, price, model, description, category } = req.body;
//     if (!photo || !price || !model || !description || !category) {
//         res.sendStatus(400).json({ message: "fill all data" })
//         console.log('errr')
//     }
//     try {

//         newProduct = new prodSchema({ photo, price, model, description, category });
//         const finalProd = await newProduct.save()
//         console.log(finalProd);
//         if (!finalProd) {
//             res.status(402).json({ Message: "product Error" })
//         }
//         else {
//             res.status(200).json({ Message: "product saved Successfully" })
//         }
//     } catch (error) {
//         console.log(error)
//     }
// })

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
// const file = req.files.file;

const Storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: Storage }).single("image");

// ********* insert new data

router.post('/product/insert', upload, async (req, res) => {
    const { image, price, model, description, category } = req.body;
    // if (!photo || !price || !model || !description || !category) {
    //     res.sendStatus(400).json({ alert: "fill all data" })
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
            res.status(402).json({ Message: "product Error" })
            console.log("err")
        }
        else {
            res.status(200).json({ Message: "product saved Successfully" })
        }
    } catch (error) {
        console.log(error)
    }

})



// router.post("/single", upload.single('image'), (req, res) => {
//     var img = (req.file) ? req.file.filename : null;

//     prodSchema.create(img, function (err, result) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Saved To database");
//             res.send(img);
//         }
//     })
// })




module.exports = router;