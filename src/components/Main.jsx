import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/404";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Store from "../pages/Store";

function Main() {
    return (
        <main className="flex justify-center m-2 md:m-10">
            <Routes>
                <Route path="/" element={<Store />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    );
}

export default Main;
