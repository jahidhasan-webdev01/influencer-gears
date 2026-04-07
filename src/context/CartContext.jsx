import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem("cart") || "[]")
    );

    useEffect(() => { 
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

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