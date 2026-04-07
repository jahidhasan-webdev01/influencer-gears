import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import { LuFilter } from "react-icons/lu";

const Products = () => {
    const { products, brands } = useContext(ProductsContext);

    const [filterProducts, setFilterProducts] = useState([])

    const [sortType, setSortType] = useState("default");
    const [selectedBrands, setSelectedBrands] = useState([])

    useEffect(() => {
        setFilterProducts(products);
    }, [products]);

    useEffect(() => {
        let result = [...products];

        if (selectedBrands.length) {
            result = result.filter(p => selectedBrands.includes(p.brand));
        }

        if (sortType === "low") {
            result.sort((a, b) => a.price - b.price);
        }

        if (sortType === "high") {
            result.sort((a, b) => b.price - a.price);
        }

        setFilterProducts(result);

    }, [products, selectedBrands, sortType]);


    const handleBrandChange = (e) => {
        if (selectedBrands.includes(e.target.value)) {
            const newSelectedBrands = selectedBrands.filter((brand) => brand !== e.target.value)
            setSelectedBrands(newSelectedBrands)
        } else {
            setSelectedBrands([...selectedBrands, e.target.value]);
        }
    }

    return (
        <div className="w-full px-2 md:w-10/12 md:px-0 mx-auto py-10 lg:py-20">
            <h1 className="text-center text-4xl font-extrabold">All Collection</h1>

            <div className="drawer">
                <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />

                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-1"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>

                    <div className="bg-base-200 min-h-full w-80 p-4 pt-50">
                        <h1 className="text-xl font-bold">Brands</h1>

                        <form>
                            {brands.map((br, index) => (
                                <label
                                    key={index}
                                    className="flex items-center gap-2 cursor-pointer hover:bg-purple-50 px-4 py-1"
                                >
                                    <input
                                        type="checkbox"
                                        value={br}
                                        onChange={handleBrandChange}
                                    />
                                    {br}
                                </label>
                            ))}
                        </form>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-5 gap-5 mt-10">
                <div className="space-y-5 col-span-5 md:col-span-1 flex flex-row-reverse justify-between md:justify-start md:flex-col px-5 md:px-0 sticky top-24 h-fit">

                    <div>
                        <h1 className="text-xl font-bold">Sort by price</h1>
                        <form className="mt-2">
                            <select
                                value={sortType}
                                onChange={(e) => setSortType(e.target.value)}
                                className="border px-3 py-2 rounded"
                            >
                                <option value="default">Default</option>
                                <option value="low">Low to High</option>
                                <option value="high">High to Low</option>
                            </select>
                        </form>
                    </div>

                    <div>
                        <h1 className="text-xl font-bold">Brands</h1>
                        <label htmlFor="my-drawer-1" className="mt-2 btn btn-sm btn-neutral md:hidden flex justify-center items-center">
                            <LuFilter />
                        </label>

                        <form className="mt-2 hidden md:block">
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

                <div className="col-span-5 md:col-span-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        filterProducts.map((product, index) => <ProductCard key={index} product={product} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;