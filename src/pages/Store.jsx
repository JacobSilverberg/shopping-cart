import { useShoppingCart } from "../components/ShoppingCart";
import items from "../data/items.json";

function Store() {
    const { increaseCartQuantity } = useShoppingCart();

    return (
        <div className="grid grid-cols-2 md:grid-cols-5 xl:grid-cols-6 gap-3 xl:gap-6 m-10">
            {items.map((item) => {
                return (
                    <div key={item.id} className="bg-white rounded-xl drop-shadow-lg my-5 p-5 grid grid-rows-1 items-center text-center">
                        <div>
                            <h2 className="font-bold text-xl">{item.name}</h2>
                            <img src={item.imgUrl} className="my-3" />
                            <h3>$ {item.price}</h3>
                        </div>
                        <div className="flex justify-center">
                            <button
                                className="bg-lime-500 my-4 p-2 px-4 rounded-lg hover:bg-lime-600 active:bg-lime-700"
                                onClick={() => increaseCartQuantity(item.id)}
                            >
                                + Add to Cart
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Store;
