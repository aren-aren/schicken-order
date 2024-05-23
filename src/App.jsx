import {BrowserRouter, Route, Routes} from "react-router-dom";
import OrderContent from "./pages/order/components/OrderContent.jsx";
import Header from "./commons/components/header/Header.jsx";
import HistoryContent from "./pages/history/components/HistoryContent.jsx";
import BasketContent from "./pages/basket/components/BasketContent.jsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<OrderContent/>}/>
                    <Route path="/order" element={<OrderContent/>}/>
                    <Route path="/history" element={<HistoryContent/>}/>
                    <Route path="/basket" element={<BasketContent/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
