import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import ProductCard from "../ProductCard/ProductCard";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const Popular = () => {
    const products = useContext(ProductsContext);

    const popular = products
        .slice()
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 8);

    return (
        <div className="w-full px-2 md:w-10/12 md:px-0 mx-auto py-10 lg:py-20">
            <h1 className="text-center text-4xl font-extrabold">Popular Collection</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10">
                {
                    popular.map((product, index) => <ProductCard key={index} product={product} />)
                }
            </div>

            <Link to="/" className="text-right mt-5 text-purple-500 font-semibold flex items-center justify-end-safe gap-1">
                see more
                <FaArrowRight className='animate-bounce' />
            </Link>
        </div>
    );
};

export default Popular;