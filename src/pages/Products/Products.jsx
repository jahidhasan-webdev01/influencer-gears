import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import ProductCard from "../../components/ProductCard/ProductCard";

const Products = () => {
    const products = useContext(ProductsContext);
    const [filterProducts, setFilterProducts] = useState([])
    const [brands, setBrands] = useState([]);
    const [sort, setSort] = useState("default");
    const [selectedBrands, setSelectedBrands] = useState([])

    useEffect(() => {
        const uniqueBrands = [...new Set(products.map(product => product.brand))];
        setBrands(uniqueBrands);
        setFilterProducts(products);
    }, [products]);

    const handleBrandChange = (e) => {
        setSelectedBrands([...selectedBrands, e.target.value])
    }

    console.log({ selectedBrands });

    return (
        <div className="w-full px-2 md:w-10/12 md:px-0 mx-auto py-10 lg:py-20">
            <h1 className="text-center text-4xl font-extrabold">All Collection</h1>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10">
                
            </div> */}

            <div className="grid grid-cols-5 gap-5 mt-10">
                <div className="space-y-5 col-span-1">
                    <div>
                        <h1 className="text-xl font-bold">Sort</h1>
                        <form className="mt-2">
                            <select
                                value={sort}
                                onChange={(e) => setSort(e.target.value)}
                                className="border-2 border-purple-300 px-3 py-2 rounded"
                            >
                                <option value="default">Default</option>
                                <option value="low">Price: Low to High</option>
                                <option value="high">Price: High to Low</option>
                            </select>
                        </form>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Brands</h1>
                        <form className="mt-2">
                            {
                                brands.map((br, index) =>
                                    <label
                                        key={index}
                                        className="flex items-center gap-2 cursor-pointer hover:bg-purple-50 px-4 py-1">
                                        <input
                                            type="checkbox"
                                            value={br}
                                            onChange={handleBrandChange}
                                        />
                                        {br}
                                    </label>)
                            }
                        </form>
                    </div>
                </div>

                <div className="col-span-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        filterProducts.map((product, index) => <ProductCard key={index} product={product} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;