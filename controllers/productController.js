const Product = require("../models/Product");


// Add product
const addProduct = async (req, res) => {
try {

const product = new Product(req.body);
await product.save();

res.status(201).json(product);

} catch (error) {
res.status(500).json(error);
}
};


// Get all products
const getProducts = async (req, res) => {
try {

const products = await Product.find();
res.status(200).json(products);

} catch (error) {
res.status(500).json(error);
}
};


// Get product by ID
const getProductById = async (req, res) => {
try {

const product = await Product.findById(req.params.id);

if(!product){
return res.status(404).json({message:"Product not found"});
}

res.status(200).json(product);

} catch (error) {
res.status(500).json(error);
}
};


// Update product
const updateProduct = async (req, res) => {
try {

const product = await Product.findByIdAndUpdate(
req.params.id,
req.body,
{new:true}
);

res.status(200).json(product);

} catch (error) {
res.status(500).json(error);
}
};


// Delete product
const deleteProduct = async (req, res) => {
try {

await Product.findByIdAndDelete(req.params.id);

res.status(200).json({message:"Product deleted"});

} catch (error) {
res.status(500).json(error);
}
};


// Search by name
const searchProduct = async (req,res)=>{
try{

const name = req.query.name;

const products = await Product.find({
productName:{$regex:name,$options:"i"}
});

res.status(200).json(products);

}catch(error){
res.status(500).json(error);
}
};


// Filter by category
const filterCategory = async(req,res)=>{
try{

const cat = req.query.cat;

const products = await Product.find({category:cat});

res.status(200).json(products);

}catch(error){
res.status(500).json(error);
}
};


module.exports = {
addProduct,
getProducts,
getProductById,
updateProduct,
deleteProduct,
searchProduct,
filterCategory
};