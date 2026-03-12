const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");


// Add product
router.post("/products", productController.addProduct);


// Get all products
router.get("/products", productController.getProducts);


// Get product by ID
router.get("/products/:id", productController.getProductById);


// Update product
router.put("/products/:id", productController.updateProduct);


// Delete product
router.delete("/products/:id", productController.deleteProduct);


// Search product by name
router.get("/products/search", productController.searchProduct);


// Filter by category
router.get("/products/category", productController.filterCategory);


module.exports = router;