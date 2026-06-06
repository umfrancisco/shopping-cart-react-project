import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => {
    setCart((prev) => {
		
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
		const message = document.getElementById("message");
		if (message) message.textContent = "Você já adicionou este item";

		return prev;
      }
	  
	  const message = document.getElementById("message");
	  message.textContent = "Item adicionado ao carrinho";
	  
      return [...prev, { ...product, quantity: 1 }];
    });
  };
  
  const addOneToCart = (id) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          if (item.quantity >= item.stock) {
			alert(`Limite máximo de '${item.name}' atingido`);
            return item;
          }
          return { ...item, quantity: item.quantity + 1 };
        }

        return item;
      })
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const getTotal = () => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, addOneToCart, removeFromCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};