import { useShoppingCart } from "../components/ShoppingCart";
import items from "../data/items.json";
// import { formatCurrency } from "../utilities/formatCurrency";

function Cart() {
    const { cartItems, cartQuantity, getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
    if (cartItems == null) return null;

    return (
        <>
            {cartItems.length != 0 ? (
                <div className="flex flex-col">
                    <div className="grid xl:grid-cols-5 md:grid-cols-3 gap-3 m-3 md:m-7">
                        {cartItems.map((currItem) => {
                            const item = items.find((i) => i.id === currItem.id);
                            return (
                                <div key={item.id} className="bg-white rounded-xl drop-shadow-lg my-5 p-5 grid-rows-1 items-center">
                                    <div>
                                        <h2 className="hover:text-lime-700 duration-100 font-bold text-xl">{item.name}</h2>
                                        <img src={item.imgUrl} className="my-2" />
                                        <h3>{item.price} $</h3>
                                    </div>
                                    <div className="mt-4 flex flex-col justify-center">
                                        <div className="flex justify-center">
                                            <button
                                                className="bg-red-500 p-2 px-4 rounded-md hover:bg-red-600 active:bg-red-700"
                                                onClick={() => decreaseCartQuantity(item.id)}
                                            >
                                                -
                                            </button>
                                            <div className="mx-4 text-lg flex items-center">
                                                {getItemQuantity(item.id)}
                                                <p className="text-sm ml-1">x</p>
                                            </div>
                                            <button
                                                className="bg-lime-500 p-2 px-4 rounded-md hover:bg-lime-600 active:bg-lime-700"
                                                onClick={() => increaseCartQuantity(item.id)}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button
                                            className="bg-red-600 text-white my-4 p-2 px-10 rounded-lg hover:bg-red-700 active:bg-red-800"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="border-2 border-slate-300 my-7"></div>
                    <div className="flex flex-col justify-center items-center">
                        <h4 className="text-xl">
                            Total:{" "}
                            {formatCurrency(
                                cartItems.reduce((total, cartItem) => {
                                    const item = items.find((i) => i.id === cartItem.id);
                                    return total + (item?.price || 0) * cartItem.quantity;
                                }, 0)
                            )}
                        </h4>
                        <button className="my-4 bg-lime-500 p-2 px-4 rounded-md hover:bg-lime-600 active:bg-lime-700">
                            Purchase {cartQuantity} items to improve my game!{" "}
                        </button>
                    </div>
                </div>
            ) : (
                <h3 className="flex font-bold text-center text-4xl">Empty Cart</h3>
            )}
        </>
    );
}

const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency",
});

function formatCurrency(number) {
    return CURRENCY_FORMATTER.format(number);
}

export default Cart;
