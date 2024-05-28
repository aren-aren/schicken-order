import CategoryList from "./CategoryList.jsx";
import MenuList from "./MenuList.jsx";
import {useRecoilState} from "recoil";
import {categoryState, formattedMenusState, nowCategoryState} from "../../../commons/recoil/atom.js";
import {useEffect} from "react";
import {categoryManager} from "../categoryManager/categoryManager.js";

function OrderPage(){
    const [, setCategory] = useRecoilState(categoryState);
    const [nowCategory] = useRecoilState(nowCategoryState);
    const [, setMenus] = useRecoilState(formattedMenusState);

    useEffect(()=>{
        categoryManager.getCategories().then(data =>{
            setCategory(data);
        })
        categoryManager.getMenusInCategory(nowCategory).then(data => {
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
