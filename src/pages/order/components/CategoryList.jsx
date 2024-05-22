import axios from "axios";
import {useEffect, useState} from "react";
import Header from "../../../commons/components/header/Header.jsx";
import {categoryManager} from "../categoryManager/categoryManager.js";

async function getCategories(){
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const res = await axios.get(baseUrl + "categories");
    return res.data;
}

function CategoryList(){
    const [categoryName, setCategoryName] = useState([]);

    useEffect(() => {
        (async ()=>setCategoryName(await getCategories()))();
    }, []);

    const onClick = id=>{
        categoryManager.moveCategory(id);
    }

    return <Header items={categoryName} activeId={categoryManager.getCategory()} onClick={onClick}/>
}

export default CategoryList;
