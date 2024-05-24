import axios from "axios";

export const categoryManager = {
    getCategories,
    getMenusInCategory
}

const baseUrl = import.meta.env.VITE_BASE_URL;
const cacheData = {}

function axiosGet(path){
    return axios.get(baseUrl + path)
        .then(res=>{
            if(res.status === 200) return res.data;

            console.log("get error response!!");
            console.log(res.status, res.statusText, res.data);
            return null;
        });
}

function getAxiosOrCache(path){
    if(cacheData[path] != null) return cacheData[path];

    const data = axiosGet(path);
    cacheData[path] = data;
    return data;
}

function getCategories(){
    return getAxiosOrCache("categories");
}

function getMenusInCategory(id){
    return getAxiosOrCache("menus/category/" + id);

}

