import {atom, selector} from "recoil";

export const categoryState = atom({
    key : "category",
    default : []
})

export const nowCategoryState = atom({
    key : "nowCategory",
    default : 0
})

export const menusInCategoryState = atom({
    key : "menusInCategory",
    default : []
})

export const modalState = atom({
    key : "modal",
    default : false
})

export const modalDataState = atom({
    key : "modalData",
    default : {}
})

export const franchiseListState = atom({
    key : "franchiseList",
    default : []
})

/* selector */

export const formatedMenusState = selector({
    key : "formatedMenus",
    get : ({get})=>{
        const menus = get(menusInCategoryState);

        return menus?.map(menu => {return {...menu,  price : moneyFormat(menu.price)}})
    },
    set : ({set}, newValue) => set(menusInCategoryState, newValue.menus)
})

export const formatedModalDataState = selector({
    key : "formated",
    get : ({get})=>{
        const menu = get(modalDataState);

        return {...menu,  price : moneyFormat(menu.price)}
    },
    set : ({set}, newValue) => set(modalDataState,{...newValue, price : formatToNumber(newValue.price)})
})

/* utils */

function moneyFormat(target){
    const money = target + "";
    let formatted = [];
    for (let i = 0; i < money.length; i++) {
        formatted.push(money.at(money.length - i - 1));
        if(i%3 === 2 && i !== money.length-1){
            formatted.push(",");
        }
    }
    return formatted.reverse().join("");
}

function formatToNumber(target){
    return Number(target.toString().replace(/[^0-9]/g, ""));
}
