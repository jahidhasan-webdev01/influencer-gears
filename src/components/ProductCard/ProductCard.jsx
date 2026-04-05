import { FaCheckCircle } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { TbCoinTakaFilled } from "react-icons/tb";

const ProductCard = ({ product }) => {
    const { image, name, category, price, rating, brand, description, reviews, features } = product;
    return (
        <div className="border border-gray-200 rounded-xl">
            <div className="w-full h-64 overflow-hidden flex items-center justify-center">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-contain"
                />
                <p className="absolute top-2 right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                    {category}
                </p>
            </div>

            <div className="p-4 space-y-2">
                <h1 className="text-2xl font-bold">{name}</h1>
                <div className="flex flex-row justify-between">
                    <p className="inline-flex items-center gap-1 font-bold text-xl"><TbCoinTakaFilled /> {price}</p>
                    <p className="text-xs bg-purple-500 border border-purple-700 text-white rounded-full px-2 flex items-center font-medium">{rating} ({reviews})</p>
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