const multer = require("multer")
const prodSchema = require('../Models/item.schema');


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
const insert = (upload, async (req, res) => {
    // const { image, price, model, description, category } = req.body;

    try {
        const newProduct = new prodSchema({
            image: req.body,
            price: req.body,
            model: req.body,
            description: req.body,
            category: req.body
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


//READ ALL ITEMS
const read = (req, res) => {
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
}

//deleting a single item
const deleteById = (req, res) => {
    const id = req.params.id;
    prodSchema.findByIdAndDelete(id).then(data => {
        console.log(data)
        if (!data) {
            res.status(404).send({
                message: `Cannot update item with id=${id}. Maybe item was not found!`
            });
        } else {
            res.send({
                message: "item was updated successfully!",
            });
        }
    })
}


//updating a single item
const updateById = (req, res) => {
    const id = req.params.id;
    prodSchema.findByIdAndUpdate(id).then(data => {
        console.log(data)
        if (!data) {
            res.status(404).send({
                message: `Cannot update item with id=${id}. Maybe item was not found!`
            });
        } else {
            res.send({
                message: "item was updated successfully!",
            });
        }
    })
}


const checkT = (req, res) => {
    res.json({ message: "checkTclicked" })

}
module.exports = { read, insert, deleteById, updateById, checkT }