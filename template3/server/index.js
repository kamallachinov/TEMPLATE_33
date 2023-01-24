const cors = require("cors")
const express = require("express")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")


dotenv.config()
const app = express()

const { Schema } = mongoose;

const productSchema = new Schema({
    imgUrl: { type: String, required: true },
    category: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true }
}, {
    timestamps: true
}
)

const Products = mongoose.model("Kamal", productSchema)

app.use(cors())
app.use(bodyParser.json())


app.get("/", (req, res) => {
    res.send("<h1>Admin Panel</h1>")
})


//GET PRODUCTS
app.get("/products", (req, res) => {
    Products.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(404).json({ message: err })
        }
    })
})

//GET PRODUCT BY ID

app.get("/products/:id", (req, res) => {
    const { id } = req.params
    Products.findById(id, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(404).json({ message: err })
        }
    })
})

// ADD PRODUCT

app.post("/products", (req, res) => {
    const product = new Products(
        {
            imgUrl: req.body.imgUrl,
            category: req.body.category,
            name: req.body.name,
            price: req.body.price
        }
    )
    product.save()
    res.send("Created product")
})

//DELETE PRODUCT
app.delete("/products/:id", (req, res) => {
    const { id } = req.params
    Products.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("Deleted data!")
        } else {
            res.status(404).json({ message: err })
        }
    })
})

const url = process.env.CONNECTION_URL.replace("<password>", process.env.PASSWORD)
const PORT = process.env.PORT

mongoose.set('strictQuery', true)
mongoose.connect(url, (err) => {
    if (!err) {
        console.log("DB CONNECTED");
        app.listen(PORT, () => {
            console.log("server started");
        })
    }
})