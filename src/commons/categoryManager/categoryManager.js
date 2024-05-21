import axios from "axios";



export const categoryManager = {
    category : null,
    moveCategory : moveCategory,
    setMenuList : ()=>{},
    setCategory : null,
    init : init
}

function init([category, setCategory]){
    categoryManager.category = category;
    categoryManager.setCategory = setCategory;
}

async function moveCategory(id){
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const subPath = id === 0 ? "menus" : "menus/category/" + id;

    const res = await axios.get(baseUrl + subPath);
    categoryManager.setCategory(id);
    renderMenus(res.data);
}

function renderMenus(menus){
    categoryManager.setMenuList(menus);
}
