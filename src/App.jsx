import { HashRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { ShoppingCartProvider } from "./components/ShoppingCart";

function App() {
    return (
        <HashRouter>
            <ShoppingCartProvider>
                <Header />
                <Main />
                <Footer />
            </ShoppingCartProvider>
        </HashRouter>
    );
}

export default App;
