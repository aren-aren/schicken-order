import CategoryList from "./CategoryList.jsx";
import MenuList from "./MenuList.jsx";
import {useRecoilState} from "recoil";
import {categoryState, formatedMenusState, nowCategoryState} from "../../../commons/recoil/atom.js";
import {useEffect} from "react";
import {menuManager} from "../menuManager/menuManager.js";

function OrderPage(){
    const [, setCategory] = useRecoilState(categoryState);
    const [nowCategory] = useRecoilState(nowCategoryState);
    const [, setMenus] = useRecoilState(formatedMenusState);

    useEffect(()=>{
        menuManager.getCategories().then(data =>{
            setCategory(data);
        })
        menuManager.getMenusInCategory(nowCategory).then(data => {
            setMenus(data);
        })
    },[])

    return (
        <>
            <CategoryList/>
            <MenuList/>
        </>)
}

export default OrderPage;
