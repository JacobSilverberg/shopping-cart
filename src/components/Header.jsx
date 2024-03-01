import { Link, NavLink } from "react-router-dom";
import { useShoppingCart } from "./ShoppingCart";

function Header() {
    const { cartQuantity } = useShoppingCart();

    return (
        <header className="flex justify-between p-3 md:p-7 bg-black h-fit text-white">
            <Link className="text-3xl font-bold hover:text-lime-400 duration-100" to="/">
                Chubbs&#39; Golf Outlet
            </Link>
            <div className="flex items-center gap-2 md:gap-4 text-xl">
                <NavLink to="/" className="hover:text-lime-400 duration-100">
                    Shop
                </NavLink>
                <NavLink to="/cart" className="hover:text-lime-400 duration-100 flex">
                    Cart <p className="text-xs text-lime-400 ml-1">{cartQuantity}</p>
                </NavLink>
                <NavLink to="/about" className="hover:text-lime-400 duration-100">
                    About
                </NavLink>
            </div>
        </header>
    );
}

export default Header;
