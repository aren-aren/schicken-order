import axios from "axios";
import {useEffect, useState} from "react";

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
            {categoryName.map(cn => <div key={cn.id}>{cn.name}</div>)}
        </div>
    )
}

export default CategoryList;
