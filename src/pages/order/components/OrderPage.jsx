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
        <section className='px-0 md:px-10 pt-5 col-start-2 col-span-5 bg-amber-50'>
            <CategoryList/>
            <MenuList/>
        </section>)
}

export default OrderPage;
