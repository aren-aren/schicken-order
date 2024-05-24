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
        <main>
            <CategoryList/>
            <MenuList/>
        </main>)
}

export default OrderPage;
