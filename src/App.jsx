import {BrowserRouter, Route, Routes} from "react-router-dom";
import OrderPage from "./pages/order/components/OrderPage.jsx";
import Header from "./commons/components/header/Header.jsx";
import HistoryPage from "./pages/history/components/HistoryPage.jsx";
import BasketPage from "./pages/basket/components/BasketPage.jsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<OrderPage/>}/>
                    <Route path="/order" element={<OrderPage/>}/>
                    <Route path="/history" element={<HistoryPage/>}/>
                    <Route path="/basket" element={<BasketPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
