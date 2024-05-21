import axios from "axios";
import {useEffect, useState} from "react";
import Category from "../category/Category.jsx";
import logoImg from "/src/assets/S-Chicked-Logo.png";

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
        <div className="flex space-x-4 gap-1 bg-red-600 p-2">
            <div className="max-h-12 w-12">
                <img src={logoImg} style={{height:"100%"}}/>
            </div>
            {categoryName.map(cn => <Category key={cn.id} id={cn.id} name={cn.name}/>)}
        </div>
    )
}

export default CategoryList;
