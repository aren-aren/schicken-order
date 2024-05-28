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

export const formattedMenusState = selector({
    key : "formattedMenus",
    get : ({get})=>{
        const menus = get(menusInCategoryState);

        return menus?.map(menu => {return {...menu,  price : moneyFormat(menu.price)}})
    },
    set : ({set}, newValue) => set(menusInCategoryState, newValue.menus)
})


/* utils */

function moneyFormat(number){
    const money = number + "";
    let formatted = [];
    for (let i = 0; i < money.length; i++) {
        formatted.push(money.at(money.length - i - 1));
        if(i%3 === 2 && i !== money.length-1){
            formatted.push(",");
        }
    }
    return formatted.reverse().join("");
}
