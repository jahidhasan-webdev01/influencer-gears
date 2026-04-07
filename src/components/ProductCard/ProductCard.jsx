import { useContext } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { TbCoinTakaFilled } from "react-icons/tb";
import { CartContext } from "../../context/CartContext";

const ProductCard = ({ product }) => {
    const { image, name, category, price, rating, reviews, features } = product;
    const { cart, addToCart } = useContext(CartContext);

    return (
        <div className="border border-gray-200 rounded-xl group flex flex-col h-full">

            <div className="relative w-full h-64 overflow-hidden flex items-center justify-center">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-contain hover:scale-110 duration-150"
                />
                <p className="absolute top-2 right-0 bg-purple-500 text-white text-xs px-3 py-1 rounded-l-full">
                    {category}
                </p>
            </div>

            <div className="p-4 flex flex-col flex-1 space-y-2">
                <h1 className="text-2xl font-bold">{name}</h1>

                <div className="flex justify-between">
                    <p className="inline-flex items-center gap-1 font-bold text-xl">
                        <TbCoinTakaFilled /> {price}
                    </p>

                    <p className="text-xs border border-purple-700 text-purple-700 rounded-full px-2 flex items-center font-medium">
                        {rating} ({reviews})
                    </p>
                </div>

                <div>
                    {features.map((fet, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 text-sm text-gray-600"
                        >
                            <FaCheckCircle />
                            <p>{fet}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-auto">
                    {
                        cart.find((pro) => pro.id === product.id)
                            ?
                            <button
                                disabled
                                className="btn w-full bg-transparent border border-purple-600 text-purple-500 rounded-full mt-5">
                                added to cart <FiShoppingCart />
                            </button>
                            :
                            <button
                                onClick={() => addToCart(product)}
                                className="btn w-full bg-purple-500 border border-purple-600 text-white rounded-full mt-5 hover:bg-transparent hover:text-purple-500">
                                add to cart <FiShoppingCart />
                            </button>
                    }
                </div>

            </div>
        </div>
    );
};

export default ProductCard;