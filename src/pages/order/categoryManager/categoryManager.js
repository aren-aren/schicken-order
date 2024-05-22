import axios from "axios";

export const categoryManager = {
    moveCategory : moveCategory,
    init : {
        setCategoryState,
        setMenuState,
    },
    getCategory : ()=>categoryState.category,
    getMenus : ()=>menuState.menus
}

const categoryState = {};
const menuState = {};

function setCategoryState([category, setCategory]){
    categoryState.category = category;
    categoryState.setCategory = setCategory;
}

function setMenuState([menus, setMenus]){
    menuState.menus = menus;
    menuState.setMenus = setMenus;
}

function moveCategory(id){
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const subPath = "menus/category/" + id;

    axios.get(baseUrl + subPath)
        .then(res=>{
            console.log("getMenus Result : ", res.status);
            categoryState.setCategory(res.data.id);
            renderMenus(res.data.menus);
        });
}

function renderMenus(menus){
    menuState.setMenus(menus);
}
