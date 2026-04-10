import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import { LuFilter } from "react-icons/lu";
import { TbCoinTakaFilled } from "react-icons/tb";
import { CartContext } from "../../context/CartContext";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router";

const Products = () => {
    const { products, brands } = useContext(ProductsContext);
    const { cart, addToCart } = useContext(CartContext);

    const [filterProducts, setFilterProducts] = useState([])

    const [sortType, setSortType] = useState(
        sessionStorage.getItem("sortType") || "default"
    );
    const [selectedBrands, setSelectedBrands] = useState(
        JSON.parse(sessionStorage.getItem("selectedBrands")) || []
    );

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

        sessionStorage.setItem("sortType", sortType);
        sessionStorage.setItem("selectedBrands", JSON.stringify(selectedBrands));
    }, [products, selectedBrands, sortType]);


    const handleBrandChange = (e) => {
        if (selectedBrands.includes(e.target.value)) {
            const newSelectedBrands = selectedBrands.filter((brand) => brand !== e.target.value)
            setSelectedBrands(newSelectedBrands)
        } else {
            setSelectedBrands([...selectedBrands, e.target.value]);
        }
    }

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();

        const filtered = products.filter((product) => {
            const nameMatch = product.name.toLowerCase().includes(query);
            const categoryMatch = product.category.toLowerCase().includes(query);
            const featuresMatch = product.features.some(f =>
                f.toLowerCase().includes(query)
            );

            return nameMatch || categoryMatch || featuresMatch;
        });

        setFilterProducts(filtered)
    }

    return (
        <div className="w-full px-2 md:w-10/12 md:px-0 mx-auto py-10 lg:py-20">
            <h1 className="text-center text-4xl font-extrabold">All Collection</h1>

            <div className="text-center mt-2">
                <label className="input input-sm">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input onChange={(e) => handleSearch(e)} type="search" required placeholder="Search" />
                </label>
            </div>

            <div className="mt-5 col-span-5 md:col-span-4 w-full space-y-5">
                {
                    filterProducts.length < 1 &&
                    <p className="w-full mt-5 text-center text-sm font-bold text-gray-500">No products found!</p>
                }
            </div>

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

            <div className="grid grid-cols-5 gap-5 mt-1 md:mt-10">
                <div className="col-span-5 md:col-span-1 md:sticky md:top-24 self-start space-y-5 flex flex-row-reverse justify-between md:justify-start md:flex-col px-5 md:px-0">
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
                                            checked={selectedBrands.includes(br)}
                                        />
                                        {br}
                                    </label>
                                )
                            }
                        </form>
                    </div>
                </div>

                <div className="col-span-5 md:col-span-4 w-full space-y-5">
                    {
                        filterProducts.length > 0 &&
                        filterProducts.map((product, index) =>
                            <div key={index} className="w-full flex justify-between border border-gray-300 rounded-lg p-2 lg:p-4">
                                <div className="flex gap-5">
                                    <div>
                                        <img src={product.image} alt={product.name} className="w-24 h-24" />
                                    </div>
                                    <div>
                                        <Link to={`/product/${product.id}`}>
                                            <h1 className="font-bold text-xl">{product.name}</h1>
                                        </Link>
                                        <ul className="text-sm text-gray-500 mt-2 pl-5">
                                            {
                                                product.features.map((ft, index) => <li className="list-disc" key={index}>{ft}</li>)
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold mt-2 gap-1 text-end flex flex-col justify-center items-center">
                                        <p className="inline-flex flex-row items-center gap-1 text-xl"><TbCoinTakaFilled />{product.price} </p>
                                        {
                                            cart.find((pro) => pro.id === product.id)
                                                ?
                                                <button
                                                    disabled
                                                    className="btn btn-sm w-full bg-transparent border border-purple-600 text-purple-500 rounded-lg mt-5">
                                                    added to cart <FiShoppingCart />
                                                </button>
                                                :
                                                <button
                                                    onClick={() => addToCart(product)}
                                                    className="btn btn-sm w-full bg-purple-500 border border-purple-600 text-white rounded-lg mt-5 hover:bg-transparent hover:text-purple-500">
                                                    add to cart
                                                    <FiShoppingCart />
                                                </button>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;