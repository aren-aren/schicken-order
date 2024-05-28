import CategoryList from "./CategoryList.jsx";
import MenuList from "./MenuList.jsx";
import {useRecoilState} from "recoil";
import {categoryState, menusInCategoryState, nowCategoryState} from "../../../commons/recoil/atom.js";
import {useEffect} from "react";
import {categoryManager} from "../categoryManager/categoryManager.js";

function OrderPage(){
    const [, setCategory] = useRecoilState(categoryState);
    const [nowCategory] = useRecoilState(nowCategoryState);
    const [, setMenusIncategory] = useRecoilState(menusInCategoryState);

    useEffect(()=>{
        categoryManager.getCategories().then(data =>{
            setCategory(data);
        })
        categoryManager.getMenusInCategory(nowCategory).then(data => {
            setMenusIncategory(data);
        })
    },[])

    return (
        <>
            <CategoryList/>
            <MenuList/>
        </>)
}

export default OrderPage;
