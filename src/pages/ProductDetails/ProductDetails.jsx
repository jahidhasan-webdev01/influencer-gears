import { useContext } from "react";
import { useParams } from "react-router";
import { ProductsContext } from "../../context/ProductsContext";
import { CartContext } from "../../context/CartContext";
import { FiShoppingCart } from "react-icons/fi";
import { TbCoinTakaFilled } from "react-icons/tb";

const ProductDetails = () => {
    const { id } = useParams();
    const { products } = useContext(ProductsContext);
    const { cart, addToCart } = useContext(CartContext);

    const selectedProduct = products.find(
        (item) => item.id === parseInt(id)
    );

    return (
        <div className="min-h-[90vh] grid grid-cols-1 lg:grid-cols-2 py-10 md:py-0 lg:space-x-30">
            <div className="flex flex-col justify-center items-center lg:items-end">
                <img src={selectedProduct?.image} alt={selectedProduct?.name} className="h-96 w-96" />
            </div>

            <div className=" flex flex-col justify-center bg-gray-100 py-10 lg:pt-0 px-5 md:px-0 lg:pl-30">
                <h1 className="text-3xl lg:text-4xl font-extrabold">{selectedProduct?.name}</h1>
                <p className="text-gray-500 mt-2">{selectedProduct?.description}</p>
                <div className="text-gray-500 mt-5">
                    <p>Category: {selectedProduct?.category}</p>
                    <p>Brand: {selectedProduct?.brand}</p>
                    <p className="inline-flex flex-row items-center gap-1">Price: <TbCoinTakaFilled />{selectedProduct?.price}</p>
                    <p>Rating: {selectedProduct?.rating} ({selectedProduct?.reviews})</p>
                </div>

                <ul className="text-sm text-gray-500 mt-2 pl-5">
                    {
                        selectedProduct?.features.map((ft, index) => <li className="list-disc" key={index}>{ft}</li>)
                    }
                </ul>

                <div className="font-bold mt-2 gap-1 ">

                    {
                        cart?.find((pro) => pro?.id === selectedProduct?.id)
                            ?
                            <button
                                disabled
                                className="btn btn-sm bg-transparent border border-purple-600 text-purple-500 rounded-lg mt-5">
                                added to cart <FiShoppingCart />
                            </button>
                            :
                            <button
                                onClick={() => addToCart(selectedProduct)}
                                className="btn btn-sm bg-purple-500 border border-purple-600 text-white rounded-lg mt-5 hover:bg-transparent hover:text-purple-500">
                                add to cart
                                <FiShoppingCart />
                            </button>
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;