import axios from "axios";
import {useEffect, useState} from "react";
import Category from "../category/Category.jsx";

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

    return (
        <div>
            {categoryName.map(cn => <Category key={cn.id} name={cn.name}/>)}
        </div>
    )
}

export default CategoryList;
