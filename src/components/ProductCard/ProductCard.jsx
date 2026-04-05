import { FaCheckCircle } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { TbCoinTakaFilled } from "react-icons/tb";

const ProductCard = ({ product }) => {
    const { image, name, category, price, rating, reviews, features } = product;
    return (
        <div className="border border-gray-200 rounded-xl group">
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

            <div className="p-4 space-y-2">
                <h1 className="text-2xl font-bold">{name}</h1>
                <div className="flex flex-row justify-between">
                    <p className="inline-flex items-center gap-1 font-bold text-xl"><TbCoinTakaFilled /> {price}</p>
                    <p className="text-xs border border-purple-700 text-purple-700 rounded-full px-2 flex items-center font-medium">{rating} ({reviews})</p>
                </div>

                <div>
                    {
                        features.map((fet, index) =>
                            <div
                                key={index}
                                className="flex items-center gap-2 text-sm text-gray-600"
                            >
                                <FaCheckCircle />
                                <p>{fet}</p>
                            </div>)
                    }
                </div>

                <button className="btn w-full bg-purple-500 border border-purple-600 text-white rounded-full mt-5">
                    add to cart
                    <FiShoppingCart />
                </button>
            </div>
        </div>
    );
};

export default ProductCard;