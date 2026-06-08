import { apiService } from "./api";

// GET all products
export const getProducts = () => apiService.get("/game");
export const getHardwares = () => apiService.get("/hardware");

// GET single product
export const getProductById = (id) => apiService.get(`/game/${id}`);

// GET products by category
export const getProductsByCategory = (category) => apiService.get(`/game/category/${category}`);

// POST create product
export const createProduct = (product) => apiService.post("/game", product);

// POST create cart
export const createCart = (cart) => apiService.post("/cart", cart);

// PUT update product
export const updateProduct = (id, product) => apiService.put(`/game/${id}`, product);

// DELETE product
export const deleteProduct = (id) => apiService.delete(`/game/${id}`);