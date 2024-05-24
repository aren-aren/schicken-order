import {BrowserRouter, Route, Routes} from "react-router-dom";
import OrderPage from "./pages/order/components/OrderPage.jsx";
import Header from "./commons/layout/Header.jsx";
import HistoryPage from "./pages/history/components/HistoryPage.jsx";
import BasketPage from "./pages/basket/components/BasketPage.jsx";
import {RecoilRoot} from "recoil";

function App() {

    return (
        <>
            <BrowserRouter>
                <Header/>
                <main className='px-10 grid grid-cols-5 justify-center'>
                    <RecoilRoot>
                        <Routes>
                            <Route path="/" element={<OrderPage/>}/>
                            <Route path="/order" element={<OrderPage/>}/>
                            <Route path="/history" element={<HistoryPage/>}/>
                            <Route path="/basket" element={<BasketPage/>}/>
                        </Routes>
                    </RecoilRoot>
                </main>
            </BrowserRouter>
        </>
    )
}

export default App
