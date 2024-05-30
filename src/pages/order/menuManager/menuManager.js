import axios from "axios";

export const menuManager = {
    getCategories,
    getMenusInCategory,
    addMenu,
    updateMenu,
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

function axiosPost(path, data){
    return axios.post(baseUrl + path, data)
        .then(res => {
            if(res.status === 200) {
                emptyCache();
                return res.data;
            }

            console.log("post error response!!");
            console.log(res.status, res.statusText, res.data);
            return null;
        })
}

function axiosPut(path, data){
    return axios.put(baseUrl + path, data)
        .then(res => {
            if(res.status === 200) {
                emptyCache();
                return res.data;
            }

            console.log("put error response!!");
            console.log(res.status, res.statusText, res.data);
            return null;
        })
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

function addMenu (data) {
    return axiosPost("menus", convertFormdata(data));
}

function updateMenu(data) {
    return axiosPut("menus/" + data.id, convertFormdata(data));
}

function convertFormdata(data){
    const formdata = new FormData();

    formdata.append("id", data.id);
    formdata.append("menu", data.menu);
    formdata.append("price", data.price);
    formdata.append("attach", data.attach);

    return formdata;
}

function emptyCache(){
    for (let key in cacheData) {
        delete cacheData[key];
    }
}
