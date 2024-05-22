import CategoryList from "./commons/components/categoryList/CategoryList.jsx";
import MenuList from "./pages/menus/MenuList.jsx";
import {categoryManager} from "./commons/categoryManager/categoryManager.js";
import {useState} from "react";

function App() {
    categoryManager.init.setCategoryState(useState(0));
    categoryManager.init.setMenuState(useState([]));

    return (
        <>
            <CategoryList/>
            <MenuList/>
        </>
    )
}

export default App
