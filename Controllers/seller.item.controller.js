const multer = require("multer");
const sellerItemSchema = require('../Models/seller.item.schema');

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

const upload = multer({ storage: Storage });

// ********* insert new Product
const insert = async (req, res) => {
    // const { image, price, model, description, category } = req.body;

    try {
        const newProduct = new sellerItemSchema({
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

}

//READ ALL ITEMS
const read = async (req, res) => {
    try { 
       await  sellerItemSchema.find({}, (err, result) => {
            if (err) {
                res.send(err)
            }
            res.send(result)
        })
    } catch (error) {
        console.log(error)
    }
}

//  filtering  item through search
const seacrh =  (req, res) => {


    try {
        var regex = new RegExp(req.params.model, 'i');
        console.log(regex)
        sellerItemSchema.find({ model: regex }).then((result) => {
            res.status(200).json(result);

        })
    } catch (error) {
        console.log(error)

    }


}


//deleting a single item
const deleteById = (req, res) => {
    const id = req.params.id;
    sellerItemSchema.findByIdAndDelete(id).then(data => {
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
    sellerItemSchema.findByIdAndUpdate(id).then(data => {
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
module.exports = { read, seacrh, insert, deleteById, updateById, upload, checkT }