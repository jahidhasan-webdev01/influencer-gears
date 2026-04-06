import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext([]);

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [brands, setBrands] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const result = await fetch("/products.json");
            const data = await result.json();

            const uniqueBrands = [...new Set(data.map(product => product.brand))];
            setBrands(uniqueBrands)
            setProducts(data)
        }

        fetchProducts();
    }, [])

    return (
        <ProductsContext.Provider value={{ products, brands }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider;