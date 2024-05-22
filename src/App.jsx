import CategoryList from "./pages/order/components/CategoryList.jsx";
import MenuList from "./pages/order/components/MenuList.jsx";
import {categoryManager} from "./pages/order/categoryManager/categoryManager.js";
import {useState} from "react";

function App() {
    categoryManager.init.setCategoryState(useState(""));
    categoryManager.init.setMenuState(useState([]));

    return (
        <>
            <CategoryList/>
            <MenuList/>
        </>
    )
}

export default App
