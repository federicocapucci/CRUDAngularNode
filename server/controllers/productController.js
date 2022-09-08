const Product = require("../models/ProductModel");

exports.createProduct = async (req, res) => {
    try {
        //Create the product
        let product = new Product(req.body);

        await product.save();

        res.status(201).send('Product created:' + product)
    }
    catch (err) {
        console.log(err)
        res.status(500).send('Error found')
    }
}

exports.obtainProducts = async (_req, res) => {
    try {
        //Get all products
        const products = await Product.find();
        res.status(200).json(products)
    }
    catch (err) {
        console.log(err)
        res.status(500).send('Error found')
    }
}

exports.updateProduct = async (req, res) => {
    try {
        //Get product ID and update it
        const { name, category, location, price } = req.body
        const id = req.params.id
        let product = await Product.findById(id)

        if (!product) {
            return res.status(404).json({ msg: 'Product not found' })
        }

        product.name = name;
        product.category = category;
        product.location = location;
        product.price = price;

        product = await Product.findOneAndUpdate({ _id: id }, product, { new: true })

        res.status(200).json(product)

    }
    catch (err) {
        console.log(err)
        res.status(500).send('Error found')
    }
}

exports.obtainProduct = async (req, res) => {
    try {
        //Get all products
        const id = req.params.id
        let product = await Product.findById(id)
        
        if (!product) {
            return  res.status(404).json({ msg: 'Product not found' })
        }

        res.json(product)
    }
    catch (err) {
        console.log(err)
        res.status(500).send('Error found')
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        //Get all products
        const id = req.params.id
        let product = await Product.findById(id)
        
        if (!product) {
            return res.status(404).json({ msg: 'Product not found' })
        }
        
        await Product.findOneAndDelete({_id: id})

        res.json({msg: 'Product deleted successfully', product})

    }
    catch (err) {
        console.log(err)
        res.status(500).send('Error found')
    }
}





