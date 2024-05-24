import CategoryList from "./CategoryList.jsx";
import MenuList from "./MenuList.jsx";
import {useRecoilState} from "recoil";
import {categoryState} from "../../../commons/recoil/atom.js";
import {useEffect} from "react";
import {categoryManager} from "../categoryManager/categoryManager.js";

function OrderPage(){
    const [, setCategory] = useRecoilState(categoryState);

    useEffect(()=>{
        categoryManager.getCategories().then(data =>{
            setCategory(data);
        })
    },[])

    return (
        <section className='px-10 pt-5 col-start-2 col-span-3 bg-amber-50'>
            <CategoryList/>
            <MenuList/>
        </section>)
}

export default OrderPage;
