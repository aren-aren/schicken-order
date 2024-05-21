import axios from "axios";

export const categoryManager = {
    category : 0,
    moveCategory : moveCategory,
    setMenuList : ()=>{}
}

async function moveCategory(id){
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const subPath = id === 0 ? "menus" : "menus/category/" + id;

    const res = await axios.get(baseUrl + subPath);
    categoryManager.category = id;
    renderMenus(res.data);
}

function renderMenus(menus){
    categoryManager.setMenuList(menus);
}
