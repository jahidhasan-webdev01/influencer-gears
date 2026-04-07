import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { TbCoinTakaFilled } from "react-icons/tb";

const Cart = () => {
    const { cart, setCart } = useContext(CartContext);

    const removeFromCart = (productId) => {
        const filterResult = cart.filter((item) => item.id !== productId)

        setCart(filterResult)
    }

    const handleIncrease = (id) => {
        const findProduct = cart.find((item) => item.id === id);

        if (findProduct) {
            const updateQuantity =
                cart.map((item) =>
                    item.id === id
                        ?
                        { ...item, quantity: item.quantity + 1 }
                        :
                        item)
            setCart(updateQuantity)
        }
    }

    const handleDecrease = (id) => {
        const findProduct = cart.find((item) => item.id === id);

        if (findProduct.quantity > 1) {
            const updateQuantity =
                cart.map((item) =>
                    item.id === id
                        ?
                        { ...item, quantity: item.quantity - 1 }
                        :
                        item)
            setCart(updateQuantity)
        } else {
            removeFromCart(id)
        }
    }

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
    }

    return (
        <div className="w-full px-2 md:w-10/12 md:px-0 mx-auto py-10 lg:py-20">
            <h1 className="text-center text-4xl font-extrabold">Your Cart</h1>

            {
                cart.length === 0 ?
                    <div className="mt-5 text-center">
                        <p className="text-sm font-bold text-gray-500">Your cart is empty!</p>
                    </div>
                    :
                    <div className="mt-5 space-y-2">
                        {
                            cart.map((item, index) =>
                                <div key={index} className="w-full flex justify-between border border-gray-300 rounded-lg p-2 lg:p-4">
                                    <div className="flex gap-2">
                                        <div>
                                            <img src={item.image} alt={item.name} className="w-24 h-24" />
                                        </div>
                                        <div>
                                            <h1 className="font-bold text-xl">{item.name}</h1>
                                            <ul className="text-sm text-gray-500 mt-2">
                                                {
                                                    item.features.map((ft, index) => <li key={index}>{ft}</li>)
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="text-xs">
                                        <div className="font-bold mt-2 gap-1 text-end flex flex-col justify-center items-center">
                                            <p>{item.price} </p>
                                            <p className=" text-gray-500" >X</p>

                                            <div className="flex items-center gap-2 justify-center">
                                                <button onClick={() => handleIncrease(item.id)} className="btn btn-primary btn-sm">+</button>
                                                <p>{item.quantity}</p>
                                                <button onClick={() => handleDecrease(item.id)} className="btn btn-primary btn-sm">-</button>
                                            </div>

                                            <hr className="w-full border-t border-gray-300 mt-1" />
                                            <p className="inline-flex items-center gap-2 text-base"><TbCoinTakaFilled /> {item.quantity * item.price}</p>
                                        </div>
                                    </div>
                                </div>)
                        }
                        <div className="mt-5 flex flex-row justify-between font-bold">
                            <p>Total:</p>
                            <p className="inline-flex items-center gap-2 text-base"><TbCoinTakaFilled />{calculateTotal()}</p>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Cart;