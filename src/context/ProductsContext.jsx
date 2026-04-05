import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext([]);

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const result = await fetch("/products.json");
            const data = await result.json();

            setProducts(data)
        }

        fetchProducts();

    }, [])

    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider;