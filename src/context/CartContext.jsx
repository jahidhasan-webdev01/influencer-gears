import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, { ...product, quantity: 1 }]);
        toast.success("Added to cart");
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;