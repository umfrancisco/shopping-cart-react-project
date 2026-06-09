import { apiService } from "./api";

// GET all products
export const getProducts = () => apiService.get("/product");

// GET single product
export const getProductById = (id) => apiService.get(`/product/${id}`);

// GET products by category
export const getProductsByCategory = (category) => apiService.get(`/product/category/${category}`);

// POST create product
export const createProduct = (product) => apiService.post("/product", product);

// GET all carts
export const getCarts = () => apiService.get("/cart");

// POST create cart
export const createCart = (cart) => apiService.post("/cart", cart);

// PUT update product
export const updateProduct = (id, product) => apiService.put(`/product/${id}`, product);

// DELETE product
export const deleteProduct = (id) => apiService.delete(`/product/${id}`);